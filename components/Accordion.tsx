"use client";

import { useState } from "react";

type AccordionItem = {
  q: string;
  a: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

function AccordionRow({ item }: { item: AccordionItem }) {
  const [open, setOpen] = useState(false);
  const id = `accordion-${item.q.replace(/\s+/g, "-").toLowerCase().slice(0, 30)}`;

  return (
    <div className="border-b border-hp-border/60 last:border-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 px-1 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="font-semibold text-hp-black group-hover:text-heritage transition-colors text-sm sm:text-base">
          {item.q}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
            open
              ? "bg-heritage text-white rotate-180"
              : "bg-heritage/10 text-heritage"
          }`}
          aria-hidden="true"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      <div
        id={id}
        role="region"
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-hp-gray text-sm sm:text-base leading-relaxed px-1">
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div>
      {items.map((item) => (
        <AccordionRow key={item.q} item={item} />
      ))}
    </div>
  );
}
