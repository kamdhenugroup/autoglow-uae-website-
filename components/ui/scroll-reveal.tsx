"use client";

import { motion, HTMLMotionProps } from "motion/react";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  as?: "div" | "section";
  delay?: number;
}

export function ScrollReveal({ 
  children, 
  className = "",
  delay = 0,
  as = "div",
  ...props
}: ScrollRevealProps) {
  const Component = as === "section" ? motion.section : motion.div;
  
  return (
    <Component
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        delay 
      }}
      className={className}
      {...(props as any)}
    >
      {children}
    </Component>
  );
}
