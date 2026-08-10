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
            {isRtl ? "آخر تحديث: يوليو ٢٠٢٦" : "Last updated: July 2026"}
          </p>
        </div>

        <div className={`prose dark:prose-invert max-w-none text-foreground/80 leading-relaxed space-y-6 ${isRtl ? "text-right font-sans" : "text-left"}`}>
          {isRtl ? (
            <>
              <p>
                نحن في <strong>AutoGlow</strong> نقدر خصوصيتك ونهتم بكيفية التعامل مع بياناتك الشخصية. توضح هذه السياسة كيف نقوم بجمع واستخدام وحماية معلوماتك عند زيارة موقعنا الإلكتروني أو الاستفادة من خدماتنا في دبي وأبوظبي.
              </p>
              
              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">١. المعلومات التي نجمعها</h2>
              <p>
                قد نجمع معلومات شخصية تحدد هويتك، مثل الاسم، عنوان البريد الإلكتروني، رقم الهاتف، وتفاصيل السيارة، عند حجز استشارة أو التواصل معنا مباشرة.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">٢. كيف نستخدم معلوماتك</h2>
              <p>
                نستخدم البيانات التي نجمعها لتقديم وتخصيص خدماتنا، معالجة الحجوزات الخاصة بك، والتواصل معك بشأن التحديثات أو العروض الترويجية التي قد تهمك.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">٣. حماية البيانات</h2>
              <p>
                نحن نطبق مجموعة متنوعة من الإجراءات الأمنية للحفاظ على سلامة معلوماتك الشخصية ومنع الوصول غير المصرح به إليها.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">٤. ملفات تعريف الارتباط (Cookies)</h2>
              <p>
                يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة التصفح الخاصة بك وتحليل حركة المرور على الموقع. يمكنك اختيار إيقاف تشغيل ملفات تعريف الارتباط من خلال إعدادات متصفحك.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">٥. الاتصال بنا</h2>
              <p>
                إذا كان لديك أي أسئلة أو استفسارات بخصوص سياسة الخصوصية هذه، يرجى الاتصال بنا عبر البريد الإلكتروني: <a href="mailto:info@autoglow.ae" className="text-accent underline">info@autoglow.ae</a>.
              </p>
            </>
          ) : (
            <>
              <p>
                At <strong>AutoGlow</strong>, we value your privacy and care about how your personal data is handled. This policy explains how we collect, use, and protect your information when you visit our website or use our premium detailing and paint protection services in Dubai and Abu Dhabi.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">1. Information We Collect</h2>
              <p>
                We may collect personal identification information, such as your name, email address, phone number, and vehicle details, when you book a consultation or contact us directly.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
              <p>
                We use the data we collect to provide and personalize our services, process your bookings, and communicate with you about updates or promotions that may interest you.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">3. Data Protection</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information and prevent unauthorized access.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">4. Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience and analyze site traffic. You can choose to disable cookies through your browser settings.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">5. Contact Us</h2>
              <p>
                If you have any questions or concerns regarding this Privacy Policy, please contact us at <a href="mailto:info@autoglow.ae" className="text-accent underline">info@autoglow.ae</a>.
              </p>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
