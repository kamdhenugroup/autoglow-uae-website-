import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      studio,
      service,
      message,
      website_url,
      recaptchaVerified,
      recaptchaToken,
      formTime
    } = body;

    // 1. Honeypot check - silently drop bot submissions without raising alarm
    if (website_url && website_url.trim().length > 0) {
      console.warn("Spam bot trapped via honeypot field.");
      return NextResponse.json({ success: true, message: "Thank you for your submission." });
    }

    // 2. Submission speed check (bots submit forms instantaneously under 1.5 seconds)
    if (formTime && typeof formTime === "number") {
      const elapsedMs = Date.now() - formTime;
      if (elapsedMs < 1500) {
        return NextResponse.json(
          { error: "Form submitted too quickly. Please verify your details." },
          { status: 400 }
        );
      }
    }

    // 3. reCAPTCHA verification check
    if (!recaptchaToken && !recaptchaVerified) {
      return NextResponse.json(
        { error: "reCAPTCHA verification required. Please check 'I'm not a robot'." },
        { status: 400 }
      );
    }

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY || "6LenOmEtAAAAAInU7619Mw6cHlsKqSoTsKHpQAFr";
    if (recaptchaToken && recaptchaToken.length > 20 && recaptchaSecret) {
      try {
        const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${encodeURIComponent(recaptchaSecret)}&response=${encodeURIComponent(recaptchaToken)}`,
        });
        const verifyData = await verifyRes.json();
        if (!verifyData.success) {
          console.warn("Google reCAPTCHA siteverify response:", verifyData);
          // If explicitly invalid token (and not simulated fallback)
          if (verifyData["error-codes"] && verifyData["error-codes"].includes("invalid-input-response")) {
            return NextResponse.json(
              { error: "Security check failed. Invalid reCAPTCHA response token." },
              { status: 400 }
            );
          }
        }
      } catch (err) {
        console.error("reCAPTCHA verification request error:", err);
      }
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = (process.env.CONTACT_NOTIFICATION_EMAIL || "Waleed@autoglow.ae").replace(/\s+/g, "");
    const fromEmail = process.env.RESEND_FROM_EMAIL || "AutoGlow Contact <onboarding@resend.dev>";

    const cleanEmail = String(email || "").trim();

    // Log the lead details server-side
    console.log("=== NEW CONTACT LEAD RECEIVED ===");
    console.log(`Name: ${name}`);
    console.log(`Email: ${cleanEmail}`);
    console.log(`Phone: ${phone}`);
    console.log(`Studio: ${studio}`);
    console.log(`Service: ${service}`);
    console.log(`Recipient: ${recipientEmail}`);
    console.log(`Message: ${message}`);
    console.log("=================================");

    if (apiKey) {
      try {
        const resend = new Resend(apiKey);
        const emailPayload: any = {
          from: fromEmail,
          to: [recipientEmail],
          subject: `New Lead: ${service || 'General Inquiry'} from ${name} (${studio || 'UAE'})`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #111; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px;">
              <h2 style="color: #000; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
                🚘 AutoGlow - New Consultation Request
              </h2>
              
              <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 140px;">Client Name:</td>
                  <td style="padding: 8px 0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${cleanEmail}">${cleanEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
                  <td style="padding: 8px 0;"><a href="tel:${phone}">${phone || 'Not provided'}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Preferred Studio:</td>
                  <td style="padding: 8px 0;">${studio || 'Dubai / Abu Dhabi'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Requested Service:</td>
                  <td style="padding: 8px 0;"><span style="background: #f1f5f9; padding: 4px 8px; border-radius: 4px; font-size: 13px;">${service || 'General Consultation'}</span></td>
                </tr>
              </table>

              <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #000; border-radius: 4px;">
                <p style="margin: 0; font-weight: bold; font-size: 13px; color: #64748b; text-transform: uppercase;">Message / Vehicle Details:</p>
                <p style="margin-top: 8px; white-space: pre-wrap; color: #1e293b;">${message}</p>
              </div>

              <p style="margin-top: 25px; font-size: 12px; color: #94a3b8; text-align: center;">
                This lead was captured from your AutoGlow contact form.
              </p>
            </div>
          `,
        };

        if (cleanEmail && cleanEmail.includes("@")) {
          emailPayload.replyTo = cleanEmail;
        }

        const { data, error } = await resend.emails.send(emailPayload);

        if (error) {
          console.error("Resend API send error:", error);
          return NextResponse.json(
            { error: `Resend Error: ${error.message}` },
            { status: 400 }
          );
        }

        console.log("Resend email successfully sent:", data);
        return NextResponse.json({ success: true, data });
      } catch (sendErr: any) {
        console.error("Resend email exception:", sendErr);
        return NextResponse.json(
          { error: sendErr.message || "Failed to deliver email through Resend." },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: "Request received! Please configure RESEND_API_KEY environment variable to enable email delivery."
    });
  } catch (error: any) {
    console.error("Resend email error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to submit request." },
      { status: 500 }
    );
  }
}
