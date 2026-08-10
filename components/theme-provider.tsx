"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Monkeypatch useInsertionEffect for React 19 to prevent warnings/errors from libraries
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

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
