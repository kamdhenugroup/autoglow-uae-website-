"use client";

import React from "react";
import { useLanguage } from "@/components/language-provider";
import { motion } from "motion/react";

export default function PrivacyPage() {
  const { t, language } = useLanguage();

  const isRtl = language === "ar";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="border-b border-border pb-8">
          <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            {isRtl ? "سياسة الخصوصية" : "Privacy Policy"}
          </h1>
          <p className="text-sm font-mono text-muted uppercase tracking-wider">
            {isRtl ? "آخر تحديث: أكتوبر ٢٠٢٦" : "Last updated: October 2026"}
          </p>
        </div>

        <div className={`prose dark:prose-invert max-w-none text-foreground/80 leading-relaxed space-y-6 ${isRtl ? "text-right font-sans" : "text-left"}`}>
          {isRtl ? (
            <>
              <p>
                نحن في <strong>AutoGlow</strong> (دبي وأبوظبي، دولة الإمارات العربية المتحدة) نقدر خصوصيتك ونهتم ببياناتك الشخصية. توضح سياسة الخصوصية هذه كيف نقوم بجمع، استخدام، وحماية معلوماتك الشخصية عند زيارة موقعنا الإلكتروني (autoglow.ae) أو الاستفادة من خدماتنا المتخصصة في حماية طلاء السيارات (PPF) وطلاء السيراميك والتفصيل الفاخر.
              </p>
              
              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">١. المعلومات التي نجمعها</h2>
              <p>
                نقوم بجمع المعلومات التي تقدمها لنا مباشرة عند حجز موعد، طلب استشارة، أو التواصل معنا عبر الهاتف أو البريد الإلكتروني أو قنوات التواصل الاجتماعي (مثل الاسم، رقم الهاتف، عنوان البريد الإلكتروني، ومعلومات وسيارات العميل). كما نجمع بيانات تقنية تلقائية عبر أدوات التحليل (مثل Google Analytics و Microsoft Clarity) لتحسين تجربة التصفح.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">٢. استخدام معلوماتك</h2>
              <p>
                نستخدم البيانات المُجمعة للأغراض التالية: تأكيد الحجوزات وإدارتها، تقديم خدمات العناية بالسيارات وخدمة العملاء، إرسال التحديثات حول حالة سيارتك، وتحسين أداء الموقع وخدماتنا بناءً على تعليقاتك وتحليلات الاستخدام.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">٣. ملفات تعريف الارتباط وتقنيات التتبع</h2>
              <p>
                يستخدم موقعنا ملفات تعريف الارتباط (Cookies) وأدوات تتبع الأداء مثل Google Analytics و Microsoft Clarity لفهم تفاعل الزوار مع المحتوى وتحسين تجربة المستخدم. يمكنك التحكم في إعدادات ملفات تعريف الارتباط أو تعطيلها مباشرة من متصفحك.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">٤. أمن البيانات وحمايتها</h2>
              <p>
                نطبق معايير أمنية تقنية وتنظيمية صارمة لحماية بياناتك الشخصية من الوصول غير المصرح به أو التغيير أو الإفصاح أو التدمير.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">٥. محتوى خرائط Google</h2>
              <p>
                قد نعرض معلومات التقييمات من خلال Google Maps Platform. يخضع استخدام خدمات Google Maps لشروط <a href="https://cloud.google.com/maps-platform/terms" target="_blank" rel="noopener noreferrer" className="text-accent underline">Google Maps Platform</a> وسياسة <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent underline">خصوصية Google</a>.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">٦. التواصل معنا</h2>
              <p>
                إذا كان لديك أي أسئلة أو استفسارات حول سياسة الخصوصية الخاصة بنا، يرجى التواصل معنا عبر البريد الإلكتروني: <a href="mailto:info@autoglow.ae" className="text-accent underline">info@autoglow.ae</a> أو عبر أرقام الاتصال الرسمية في دبي (+971 50 467 0081) وأبوظبي (+971 50 632 1408).
              </p>
            </>
          ) : (
            <>
              <p>
                At <strong>AutoGlow</strong> (operating in Dubai and Abu Dhabi, UAE), we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (autoglow.ae) or utilize our premium automotive protection, PPF, ceramic coating, and detailing services.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">1. Information We Collect</h2>
              <p>
                We collect personal information that you provide directly to us when booking a consultation, requesting a quote, or contacting us via phone, email, or messaging channels (such as your name, phone number, email address, and vehicle make/model). We also automatically collect technical usage data through analytics platforms (such as Google Analytics and Microsoft Clarity) to optimize our website experience.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
              <p>
                The information we collect is used to: schedule and manage your service bookings, deliver high-quality detailing and customer support, send important updates regarding your vehicle service status, and analyze website traffic to improve our digital and physical offerings.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">3. Cookies & Tracking Technologies</h2>
              <p>
                Our website utilizes cookies and performance tracking tools including Google Analytics and Microsoft Clarity to understand user behavior and enhance site navigation. You can manage or disable cookies through your browser settings at any time.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">4. Data Security</h2>
              <p>
                We implement robust administrative, technical, and physical security measures designed to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">5. Google Maps content</h2>
              <p>
                We may display review information through Google Maps Platform. Use of Google Maps services is subject to the <a href="https://cloud.google.com/maps-platform/terms" target="_blank" rel="noopener noreferrer" className="text-accent underline">Google Maps Platform Terms of Service</a> and <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent underline">Google Privacy Policy</a>.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">6. Contact Information</h2>
              <p>
                If you have any questions or concerns regarding this Privacy Policy, please contact our team at <a href="mailto:info@autoglow.ae" className="text-accent underline">info@autoglow.ae</a> or call our Dubai HQ at +971 50 467 0081 / Abu Dhabi studio at +971 50 632 1408.
              </p>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
