"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Icon } from "@iconify/react";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferencesModal, setShowPreferencesModal] = useState(false);
  
  // Cookie categories state
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    const consent = localStorage.getItem("autoglow_cookie_consent");
    if (!consent) {
      // Default to okay/accepted as requested ("so by default all the cookies are okay")
      const defaultConsent = { necessary: true, analytics: true, marketing: true };
      localStorage.setItem("autoglow_cookie_consent", JSON.stringify(defaultConsent));
      // Optionally show banner briefly or keep it hidden if default is okay, but user requested "we need to add an cookie banner and also, like, cookie preferences... We use cookies to enhance your experience... Add a manage cookies option on the footer"
      // Let's show banner on first visit so they can see Accept / Manage Preferences, while defaulting to okay if accepted.
      setShowBanner(true);
    } else {
      try {
        const parsed = JSON.parse(consent);
        setPreferences(parsed);
      } catch (e) {
        // fallback
      }
    }

    const handleOpenSettings = () => {
      setShowPreferencesModal(true);
    };

    window.addEventListener("open-cookie-settings", handleOpenSettings);
    return () => {
      window.removeEventListener("open-cookie-settings", handleOpenSettings);
    };
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    setPreferences(allAccepted);
    localStorage.setItem("autoglow_cookie_consent", JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowPreferencesModal(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("autoglow_cookie_consent", JSON.stringify(preferences));
    setShowBanner(false);
    setShowPreferencesModal(false);
  };

  return (
    <>
      {/* Cookie Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-zinc-950/95 backdrop-blur-xl border-t border-border shadow-2xl text-white"
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-3 max-w-3xl">
                <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent shrink-0 mt-0.5">
                  <Icon icon="solar:shield-keyhole-bold-duotone" className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base mb-1">Cookie & Privacy Notice</h4>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    We use cookies to enhance your experience, analyze our traffic, and serve tailored content. By continuing to browse, you agree to our use of cookies. Read our{" "}
                    <Link href="/privacy" className="text-accent underline hover:text-accent/80">Privacy Policy</Link> and{" "}
                    <Link href="/terms" className="text-accent underline hover:text-accent/80">Terms of Service</Link>.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-end">
                <button
                  onClick={() => setShowPreferencesModal(true)}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-border text-xs font-semibold hover:border-accent/50 transition-all text-white"
                >
                  Cookie Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2.5 rounded-xl bg-accent text-accent-foreground text-xs font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-accent/20"
                >
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preferences Modal */}
      <AnimatePresence>
        {showPreferencesModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-lg bg-zinc-950 border border-border rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative"
            >
              <button
                onClick={() => setShowPreferencesModal(false)}
                className="absolute top-6 right-6 text-white/50 hover:text-white p-1"
                aria-label="Close"
              >
                <Icon icon="solar:close-circle-linear" className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                  <Icon icon="solar:settings-bold-duotone" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Cookie Preferences</h3>
                  <p className="text-xs text-white/60">Manage how we use cookies and tracking tools</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {/* Necessary */}
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-border/80 flex items-start justify-between gap-4">
                  <div>
                    <h5 className="font-semibold text-sm mb-1">Strictly Necessary Cookies</h5>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Required for basic site functionality, security, and session management. Cannot be disabled.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="mt-1 accent-accent w-4 h-4 cursor-not-allowed"
                  />
                </div>

                {/* Analytics */}
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-border/80 flex items-start justify-between gap-4">
                  <div>
                    <h5 className="font-semibold text-sm mb-1">Analytics & Performance</h5>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Helps us analyze traffic using Google Analytics & Microsoft Clarity to improve site navigation and performance.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="mt-1 accent-accent w-4 h-4 cursor-pointer"
                  />
                </div>

                {/* Marketing */}
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-border/80 flex items-start justify-between gap-4">
                  <div>
                    <h5 className="font-semibold text-sm mb-1">Marketing & Tailored Content</h5>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Used to deliver relevant automotive protection offers and measure promotional campaign effectiveness.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="mt-1 accent-accent w-4 h-4 cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
                <button
                  onClick={() => setShowPreferencesModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-zinc-900 border border-border text-xs font-semibold hover:bg-zinc-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2.5 rounded-xl bg-accent text-accent-foreground text-xs font-semibold hover:opacity-90 transition-opacity shadow-lg"
                >
                  Save Preferences
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
