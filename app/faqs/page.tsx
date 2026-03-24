import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import Accordion from "@/components/Accordion";
import { siteConfig } from "@/lib/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions for Hult Prize Nationals at Hult Boston 2026 — pitches, logistics, travel, and more.",
};

export default function FAQsPage() {
  return (
    <>
      <PageHero
        accent="Help"
        title="Frequently Asked Questions"
        subtitle="Everything participants need to know, organized by topic."
      />

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          {/* Category jump links */}
          <div className="flex flex-wrap gap-2 mb-12">
            {siteConfig.faqs.map((cat) => (
              <a
                key={cat.category}
                href={`#${cat.category.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                className="px-4 py-2 rounded-full border border-hp-border text-sm font-semibold text-hp-gray hover:border-heritage hover:text-heritage hover:bg-heritage/5 transition-all"
              >
                {cat.category}
              </a>
            ))}
          </div>

          {/* FAQ categories */}
          <div className="space-y-14">
            {siteConfig.faqs.map((cat) => {
              const anchorId = cat.category
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9-]/g, "");
              return (
                <div key={cat.category} id={anchorId}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-7 gradient-heritage rounded-full shrink-0" aria-hidden="true" />
                    <h2 className="text-lg sm:text-xl font-black text-hp-black">
                      {cat.category}
                    </h2>
                  </div>
                  <div className="card">
                    <Accordion items={cat.questions} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Still have questions */}
          <div className="mt-16 gradient-midnight rounded-3xl p-10 text-white text-center relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 70% 30%, #FF329B 0%, transparent 60%)",
              }}
            />
            <div className="relative">
              <h2 className="text-2xl font-black mb-3">Still have a question?</h2>
              <p className="text-white/60 text-sm mb-6 font-light">
                If you didn&apos;t find your answer above, our team is happy to
                help.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-heritage hover:bg-heritage-dark text-white rounded-xl font-bold text-sm transition-colors shadow-lg shadow-heritage/25"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
