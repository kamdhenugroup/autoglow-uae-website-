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
            {isRtl ? "آخر تحديث: أكتوبر ٢٠٢٦" : "Last updated: October 2026"}
          </p>
        </div>

        <div className={`prose dark:prose-invert max-w-none text-foreground/80 leading-relaxed space-y-6 ${isRtl ? "text-right font-sans" : "text-left"}`}>
          {isRtl ? (
            <>
              <p>
                مرحباً بكم في <strong>AutoGlow</strong> (مراكز دبي وأبوظبي، دولة الإمارات العربية المتحدة). باستخدامك لموقعنا الإلكتروني (autoglow.ae) أو طلب خدماتنا المتخصصة في العناية بالسيارات وحمايتها، فإنك توافق تماماً على الالتزام بشروط الخدمة والأحكام الواردة أدناه.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">١. قبول الشروط</h2>
              <p>
                تُشكل هذه الشروط والأحكام اتفاقية قانونية ملزمة بينك وبين مراكز AutoGlow. إذا كنت لا توافق على أي بند من هذه الشروط، يرجى الامتناع عن استخدام الموقع أو الاستفادة من خدماتنا.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">٢. حجز الخدمات والمواعيد</h2>
              <p>
                تخضع جميع خدمات حماية طلاء السيارات (PPF)، طلاء السيراميك، والتظليل لمدى التوافر في استوديوهاتنا بدبي وأبوظبي. نحتفظ بالحق في تعديل مواعيد الحجوزات أو الأسعار بالتنسيق المسبق مع العميل عند وجود متطلبات فنية خاصة للسيارة.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">٣. الضمانات والصيانة</h2>
              <p>
                تقدم AutoGlow ضمانات معتمدة على أفلام حماية الطلاء (مثل XPEL) وخدمات السيراميك وفقاً للباقات المختارة. يسري الضمان بشرط الالتزام بتعليمات العناية اللاحقة وعدم إجراء أي تعديلات أو صيانة لدى مراكز غير معمتمة. لا يشمل الضمان الأضرار الناجمة عن الحوادث، سوء الاستخدام، أو العوامل الطبيعية الاستثنائية.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">٤. الملكية الفكرية ومحتوى الموقع</h2>
              <p>
                جميع محتويات الموقع الإلكتروني، بما في ذلك النصوص، التصاميم، الصور، الشعارات، والمقالات الصحفية/المدونة، هي ملكية حصرية لـ AutoGlow ومحمية بقوانين الملكية الفكرية ودولة الإمارات العربية المتحدة.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">٥. القانون الحاكم واختصاص التقاضي</h2>
              <p>
                تخضع هذه الشروط والأحكام وتُفسر وفقاً لتشريعات وقوانين إمارة دبي ودولة الإمارات العربية المتحدة. تختص محاكم دبي حصراً بالفصل في أي نزاع ينشأ عن استخدام خدماتنا أو موقعنا.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">٦. خدمات خرائط Google</h2>
              <p>
                تخضع خدمات Google Maps Platform المعروضة على هذا الموقع لشروط <a href="https://cloud.google.com/maps-platform/terms" target="_blank" rel="noopener noreferrer" className="text-accent underline">Google Maps Platform</a> وسياسة <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent underline">خصوصية Google</a>.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>AutoGlow</strong> (operating in Dubai and Abu Dhabi, UAE). By accessing our website (autoglow.ae) or booking our specialized automotive protection and detailing services, you agree to be bound by these Terms of Service.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                These terms and conditions constitute a binding legal agreement between you and AutoGlow. If you do not agree with any part of these terms, please refrain from using our website or booking our services.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">2. Bookings & Services</h2>
              <p>
                All Paint Protection Film (PPF), ceramic coating, window tinting, and detailing services at our Dubai and Abu Dhabi studios are subject to slot availability and vehicle inspection. We reserve the right to reschedule bookings or adjust quotes in agreement with the client if specialized pre-treatment is required.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">3. Warranties & Care</h2>
              <p>
                AutoGlow provides manufacturer-backed and certified warranties on PPF (such as XPEL) and ceramic coatings according to the selected package. Warranties require adherence to recommended aftercare guidelines and periodic inspection. Damage resulting from collisions, external chemical exposure, improper washing, or unauthorized modifications is excluded.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">4. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, imagery, logos, journal articles, and media, is the exclusive property of AutoGlow and protected under UAE copyright and intellectual property laws.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">5. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of the Emirate of Dubai and the United Arab Emirates. Any disputes arising herefrom shall be subject to the exclusive jurisdiction of the Dubai Courts.
              </p>

              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4">6. Google Maps services</h2>
              <p>
                Google Maps Platform services displayed on this website are subject to the <a href="https://cloud.google.com/maps-platform/terms" target="_blank" rel="noopener noreferrer" className="text-accent underline">Google Maps Platform Terms of Service</a> and <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent underline">Google Privacy Policy</a>.
              </p>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
