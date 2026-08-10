"use client";

import React from "react";
import { useLanguage } from "@/components/language-provider";
import { motion } from "motion/react";

export default function TermsPage() {
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
            {isRtl ? "شروط الخدمة" : "Terms of Service"}
          </h1>
          <p className="text-sm font-mono text-muted uppercase tracking-wider">
            {isRtl ? "آخر تحديث: يوليو ٢٠٢٦" : "Last updated: July 2026"}
          </p>
        </div>

        <div className={`prose dark:prose-invert max-w-none text-foreground/80 leading-relaxed space-y-6 ${isRtl ? "text-right font-sans" : "text-left"}`}>
          {isRtl ? (
            <>
              <p>
                مرحباً بكم في <strong>AutoGlow</strong>. باستخدامكم لموقعنا الإلكتروني أو الاستفادة من خدماتنا، فإنكم توافقون على الالتزام بالشروط والأحكام التالية والتقيد بها بالكامل.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">١. قبول الشروط</h2>
              <p>
                تشكل هذه الشروط اتفاقية ملزمة قانوناً بينك وبين AutoGlow. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام موقعنا أو طلب خدماتنا.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">٢. حجز الخدمات وإلغاؤها</h2>
              <p>
                تخضع جميع خدمات حماية الأسطح وتفصيل السيارات لمدى التوافر. نحتفظ بالحق في تعديل الأسعار أو تعديل مواعيد الحجوزات بالتنسيق المسبق مع العميل.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">٣. المسؤولية والضمانات</h2>
              <p>
                نحن نقدم ضمانات محددة على خدمات أفلام حماية الطلاء (PPF) وطلاء السيراميك بناءً على الباقة المختارة. لا يغطي الضمان الأضرار الناتجة عن الحوادث، سوء الاستخدام، أو الصيانة غير الصحيحة خارج مراكزنا المعتمدة.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">٤. حقوق الملكية الفكرية</h2>
              <p>
                جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص والرسومات والشعارات والصور، هي ملك لـ AutoGlow ومحمية بموجب قوانين الملكية الفكرية المعمول بها في دولة الإمارات العربية المتحدة.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">٥. القانون الحاكم</h2>
              <p>
                تخضع هذه الشروط والأحكام وتفسر وفقاً لقوانين إمارة دبي ودولة الإمارات العربية المتحدة، وتخضع أي نزاعات للاختصاص القضائي الحصري لمحاكم دبي.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>AutoGlow</strong>. By accessing our website or utilizing our premium services, you agree to be bound by and comply with the following Terms of Service.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                These terms constitute a legally binding agreement between you and AutoGlow. If you do not agree with any part of these terms, please do not use our website or order our services.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">2. Bookings & Cancellations</h2>
              <p>
                All surface protection and detailing services are subject to availability. We reserve the right to adjust pricing or reschedule bookings with prior coordination with the client.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">3. Liability & Warranties</h2>
              <p>
                We provide specific warranties on our Paint Protection Film (PPF) and Ceramic Coating services based on the package selected. This warranty does not cover damage caused by collisions, improper washing, or neglect.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">4. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of AutoGlow and is protected by applicable intellectual property laws of the United Arab Emirates.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">5. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the Emirate of Dubai and the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the Dubai Courts.
              </p>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
