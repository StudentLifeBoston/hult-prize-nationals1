import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import { siteConfig } from "@/lib/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Hult Prize Nationals Boston 2026 organizing team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        accent="Get in Touch"
        title="Contact Us"
        subtitle="We're here to help. Reach out before, during, or after the event."
      />

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {/* Email */}
            <div className="card card-hover flex flex-col items-start gap-4">
              <div className="w-12 h-12 bg-heritage/10 rounded-xl flex items-center justify-center text-heritage">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="font-black text-hp-black text-lg mb-1">
                  Email
                </h2>
                <p className="text-sm text-hp-gray mb-3">
                  For pre-event questions, submission issues, or general
                  inquiries. We aim to respond within 24 hours on business
                  days.
                </p>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-heritage font-bold underline hover:no-underline text-sm"
                >
                  {siteConfig.contactEmail}
                </a>
              </div>
            </div>

            {/* Day-of Help Desk */}
            <div className="card card-hover flex flex-col items-start gap-4">
              <div className="w-12 h-12 bg-midnight/10 rounded-xl flex items-center justify-center text-midnight">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="font-black text-hp-black text-lg mb-1">
                  Day-of Help Desk
                </h2>
                <p className="text-sm text-hp-gray mb-3">
                  On May 1-2, our team will be available in person throughout
                  the event.
                </p>
                <p className="text-sm text-hp-black font-semibold">
                  {siteConfig.contactNote}
                </p>
              </div>
            </div>
          </div>

          {/* Response time / expectations */}
          <div className="card bg-hp-off-white border-0">
            <h2 className="font-black text-hp-black mb-4">What to include in your email</h2>
            <ul className="space-y-3 text-sm text-hp-gray">
              {[
                "Your team name and university",
                "The specific issue or question (be as detailed as possible)",
                "Any relevant form links, submission IDs, or screenshots",
                "Your preferred contact method if email doesn't work",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-heritage mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="mt-10">
            <h2 className="font-black text-hp-black mb-4">
              Looking for something specific?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "View Schedule", href: "/schedule" },
                { label: "Submit Your Deck", href: "/submissions" },
                { label: "FAQs", href: "/faqs" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-hp-border text-sm font-bold text-hp-black hover:border-heritage hover:text-heritage hover:bg-heritage/5 transition-all"
                >
                  {link.label}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
