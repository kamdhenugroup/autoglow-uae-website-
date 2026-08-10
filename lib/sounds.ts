"use client";

import { play, SoundName } from "cuelume";

export function playSound(sound: SoundName) {
  if (typeof window !== "undefined") {
    try {
      play(sound);
    } catch {
      // Ignore audio autoplay/context restrictions prior to user gesture
    }
  }
}
