"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

export function TopProgressBar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const visibleRef = useRef(visible);

  useEffect(() => {
    visibleRef.current = visible;
  }, [visible]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // When the pathname or page load completes, finish the progress bar and hide it
  useEffect(() => {
    const handlePageComplete = () => {
      setProgress(100);
      const timer = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 100);
      return timer;
    };

    if (visible) {
      if (document.readyState === "complete") {
        const timer = handlePageComplete();
        return () => clearTimeout(timer);
      } else {
        const onLoad = () => handlePageComplete();
        window.addEventListener("load", onLoad);
        return () => window.removeEventListener("load", onLoad);
      }
    }
  }, [visible]);

  // When the pathname changes, complete and hide progress bar
  useEffect(() => {
    if (pathname !== lastPathname) {
      setLastPathname(pathname);
      setProgress(100);
      const timer = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname, lastPathname]);

  // Trickle progress up to 90%
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (visible && progress < 90) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return prev;
          }
          // Slow down progress as it gets closer to 90
          const diff = 90 - prev;
          const step = Math.max(1, Math.min(8, diff * 0.15));
          return prev + step;
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [visible, progress]);

  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      // Ignore clicks with modifiers (e.g. command/control click to open in a new tab)
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      // Ignore default-prevented events
      if (event.defaultPrevented) {
        return;
      }

      // Find closest anchor element
      let target = event.target as HTMLElement | null;
      while (target && target.tagName !== "A") {
        target = target.parentElement;
      }

      if (!target) return;

      const anchor = target as HTMLAnchorElement;
      const href = anchor.getAttribute("href");

      // Ignore empty href, mailto, tel, absolute external URLs, target="_blank", etc.
      if (!href) return;
      if (
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download")
      ) {
        return;
      }

      // Ignore hash links on the same page
      if (href.startsWith("#") || (href.includes("#") && href.split("#")[0] === window.location.pathname)) {
        return;
      }

      // Ignore clicks that target the current path exactly
      try {
        const targetUrl = new URL(anchor.href, window.location.href);
        if (targetUrl.pathname === window.location.pathname && targetUrl.search === window.location.search) {
          return;
        }
      } catch (e) {
        if (href === window.location.pathname) {
          return;
        }
      }

      // Start the progress bar
      setProgress(15);
      setVisible(true);
    };

    window.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      window.removeEventListener("click", handleAnchorClick, { capture: true });
    };
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed top-0 left-0 h-[3px] bg-accent z-[99999] transition-[width] duration-300 ease-out pointer-events-none"
          style={{
            width: `${progress}%`,
            boxShadow: "0 0 12px var(--color-accent, #e51924), 0 0 6px var(--color-accent, #e51924)",
          }}
        />
      )}
    </AnimatePresence>
  );
}
