"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ThinkingOrb } from "thinking-orbs";

export function EntryLoader() {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Lock scroll during animation
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsComplete(true);
      document.body.style.overflow = "";
    }, 1100);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <motion.div
          id="entry-loader"
          className="fixed inset-0 z-[9999999] flex items-center justify-center bg-black/60 backdrop-blur-3xl p-4"
          exit={{
            opacity: 0,
            scale: 1.04,
            transition: {
              duration: 0.4,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {/* Glowing top accent line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2px] bg-[#e51924] shadow-[0_0_12px_#e51924]"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          />

          {/* Frosted Glass Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-8 md:p-10 rounded-3xl bg-zinc-950/70 border border-white/15 backdrop-blur-2xl shadow-[0_32px_96px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.15)] flex flex-col items-center text-center gap-5 max-w-sm w-full overflow-hidden"
          >
            {/* Subtle inner radial glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#e51924]/20 rounded-full blur-3xl pointer-events-none" />

            {/* ThinkingOrb integration */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative z-10 flex items-center justify-center p-3 rounded-full bg-black/60 border border-white/10 shadow-[0_0_30px_rgba(229,25,36,0.25)]"
            >
              <ThinkingOrb state="composing" size={64} speed={1.5} theme="dark" />
            </motion.div>

            {/* Official AutoGlow Brand Logo */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
              className="relative z-10 flex items-center justify-center pt-1"
            >
              <Image
                src="/images/autoglow-logo.png"
                alt="AutoGlow Car Care Expert"
                width={1670}
                height={532}
                className="h-9 md:h-11 w-auto object-contain filter drop-shadow-md"
                priority
              />
            </motion.div>

            {/* Premium Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="relative z-10 text-[10px] font-mono tracking-[0.22em] uppercase text-zinc-300"
            >
              Automotive Protection & Detailing
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


