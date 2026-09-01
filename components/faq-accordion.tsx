'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="my-8 space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-border rounded-2xl bg-surface/50 overflow-hidden transition-all duration-200 hover:border-accent/40 shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between p-5 text-left font-display font-semibold text-foreground text-base sm:text-lg focus:outline-none"
            >
              <span>{item.question}</span>
              <Icon
                icon="solar:alt-arrow-down-linear"
                className={`w-5 h-5 text-accent transition-transform duration-200 flex-shrink-0 ml-4 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-foreground/80 text-sm sm:text-base leading-relaxed border-t border-border/40 pt-4">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
