"use client";

import { useEffect } from "react";
import { bind } from "cuelume";

export function SoundEffects() {
  useEffect(() => {
    try {
      bind();
    } catch {
      // AudioContext fallback
    }
  }, []);

  return null;
}
