"use client";

import React from "react";

if (typeof window !== "undefined") {
  try {
    const r = React as any;
    if (r && typeof r.useInsertionEffect === "function") {
      r.useInsertionEffect = r.useLayoutEffect;
      try {
        Object.defineProperty(React, "useInsertionEffect", {
          value: r.useLayoutEffect,
          configurable: true,
          writable: true,
        });
      } catch (inner) {}
    }
  } catch (e) {
    // Silent catch
  }
}

export function PatchInsertionEffect() {
  return null;
}
