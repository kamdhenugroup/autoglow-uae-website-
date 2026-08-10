"use client";

import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import { playSound } from "@/lib/sounds";
import { motion, AnimatePresence } from "motion/react";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const defaultMessage = encodeURIComponent("Hello AutoGlow, I would like to book a consultation.");

  const locations = [
    {
      name: "AutoGlow UAE - Dubai HQ",
      phone: "+971 50 467 0081",
      number: "971504670081",
    },
    {
      name: "AutoGlow - Abu Dhabi",
      phone: "+971 50 632 1408",
      number: "971506321408",
    },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40" ref={menuRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-72 bg-zinc-950/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-4 text-white z-50 mb-2"
          >
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-border/60">
              <div className="flex items-center gap-2">
                <Icon icon="ri:whatsapp-fill" className="w-5 h-5 text-emerald-400" />
                <span className="font-display font-bold text-sm tracking-wide">WhatsApp Support</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors p-1"
                aria-label="Close"
              >
                <Icon icon="solar:close-circle-linear" className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-white/60 mb-3">Select your preferred studio location to chat instantly:</p>
            <div className="space-y-2">
              {locations.map((loc, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${loc.number}?text=${defaultMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    playSound("chime");
                    setIsOpen(false);
                  }}
                  className="group flex flex-col p-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-border/80 hover:border-emerald-500/50 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs text-white group-hover:text-emerald-400 transition-colors">
                      {loc.name}
                    </span>
                    <Icon icon="solar:arrow-right-up-linear" className="w-3.5 h-3.5 text-white/40 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <span className="font-mono text-[11px] text-white/50 mt-1">
                    {loc.phone}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => {
          playSound("chime");
          setIsOpen(!isOpen);
        }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center relative group"
        aria-label="Toggle WhatsApp chat locations"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-zinc-950 animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-zinc-950" />
        <Icon icon="ri:whatsapp-fill" className="w-6 h-6" />
      </button>
    </div>
  );
}

