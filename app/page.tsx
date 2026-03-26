import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import SectionWrapper from "@/components/SectionWrapper";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Hult Prize Nationals at Hult Boston on May 1-2, 2026. Your participant hub for schedule, submissions, FAQs, and travel.",
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden text-white min-h-[32rem] sm:min-h-[36rem]">
        <Image
          src="/hero-home.png"
          alt=""
          fill
          priority
          className="object-cover object-[center_35%] sm:object-[center_30%]"
          sizes="100vw"
        />
        {/* Readability: darker on the left (headline), softer on the right; subtle brand tint at bottom */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1]"
          style={{
            background: [
              "linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.42) 42%, rgba(0,0,0,0.28) 72%, rgba(0,0,0,0.45) 100%)",
              "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, transparent 42%, rgba(18,16,56,0.88) 100%)",
            ].join(", "),
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-tr from-midnight/70 via-purple-900/20 to-heritage/15"
        />

        <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-4xl animate-fade-in-up [text-shadow:0_2px_28px_rgba(0,0,0,0.55)]">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 tracking-tight">
              Hult Prize
              <br />
              <span className="text-gradient">Nationals</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/60">
                US East Coast
              </span>
            </h1>

            {/* Date + Location pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-sm border border-white/10">
                <svg
                  className="w-4 h-4 text-heritage"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-bold">{siteConfig.dates}</span>
              </div>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors rounded-xl px-5 py-3 text-sm border border-white/10"
              >
                <svg
                  className="w-4 h-4 text-heritage"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Cambridge, MA</span>
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-10">
              {siteConfig.homeCtas.map((cta) => (
                <CTAButton
                  key={cta.href}
                  label={cta.label}
                  href={cta.href}
                  variant={cta.variant}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What is Hult Prize ── */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label">About</p>
            <h2 className="section-title">What is Hult Prize?</h2>
            <div className="mt-6 space-y-4 text-hp-gray leading-relaxed text-lg">
              <p>
                Hult Prize is the world&apos;s largest student competition for
                social good, challenging university students to solve some of the
                world&apos;s most pressing issues through sustainable,
                market-based ventures. Often called the &quot;Nobel Prize for
                Students,&quot; it runs annually across more than 100 countries.
              </p>
              <p>
                The National Competition brings together the top teams from
                campus and regional rounds, competing for a chance to advance to
                the Global Accelerator and ultimately the World Final — where the
                winning team is awarded <strong className="text-hp-black">$1 million in seed funding</strong>.
              </p>
              <p>
                This year&apos;s Nationals is hosted at{" "}
                <strong className="text-hp-black">Hult International Business School, Boston</strong> — a
                fitting home for a competition that prizes global impact,
                innovation, and entrepreneurial courage.
              </p>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "$1M", label: "Seed funding for winners", color: "text-heritage" },
              { stat: "100+", label: "Countries represented", color: "text-purple" },
              { stat: "2 Days", label: "of pitches, mentorship & networking", color: "text-hp-orange" },
              { stat: "May 1–2", label: "Hult Boston, Cambridge MA", color: "text-midnight" },
            ].map(({ stat, label, color }) => (
              <div
                key={stat}
                className="card card-hover flex flex-col items-center text-center p-6"
              >
                <span className={`text-3xl sm:text-4xl font-black ${color}`}>{stat}</span>
                <span className="text-sm text-hp-gray mt-2">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── Quick navigation cards ── */}
      <SectionWrapper className="bg-hp-off-white" tight>
        <p className="section-label text-center">Navigate</p>
        <h2 className="section-title text-center">Everything you need</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: "Schedule",
              href: "/schedule",
              desc: "Day-by-day program for May 1-2, with times and locations.",
              color: "heritage",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              ),
            },
            {
              title: "Submissions",
              href: "/submissions",
              desc: "Submit your pitch deck and team details before the deadline.",
              color: "purple",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ),
            },
            {
              title: "FAQs",
              href: "/faqs",
              desc: "Answers to common questions about pitches, logistics, and rules.",
              color: "hp-orange",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
            {
              title: "Travel + Stay",
              href: "/travel",
              desc: "Hotels, campus housing, and transit options near the venue.",
              color: "midnight",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              ),
            },
          ].map(({ title, href, desc, icon, color }) => (
            <Link
              key={href}
              href={href}
              className="card card-hover group"
            >
              <div className={`w-12 h-12 bg-${color}/10 rounded-xl flex items-center justify-center text-${color} mb-4 group-hover:bg-${color} group-hover:text-white transition-all duration-200`}>
                {icon}
              </div>
              <h3 className="font-bold text-hp-black group-hover:text-heritage transition-colors mb-1 text-lg">
                {title}
              </h3>
              <p className="text-sm text-hp-gray">{desc}</p>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Sponsors shell ── */}
      {siteConfig.sponsors.showSponsors ? (
        <SectionWrapper tight>
          <p className="section-label text-center">Partners</p>
          <h2 className="section-title text-center">Our Sponsors</h2>
          {siteConfig.sponsors.tiers.map((tier) => (
            <div key={tier.name} className="mt-8">
              <p className="text-center text-sm font-bold text-hp-gray uppercase tracking-wider mb-4">
                {tier.name}
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                {tier.logos.map((logo) => (
                  <a
                    key={logo.name}
                    href={logo.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grayscale hover:grayscale-0 transition-all"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo.logoUrl} alt={logo.name} className="h-14 object-contain" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </SectionWrapper>
      ) : (
        <SectionWrapper tight>
          <div className="text-center py-6">
            <p className="section-label">Partners</p>
            <h2 className="section-title">Sponsors</h2>
            <p className="text-hp-gray mt-4 max-w-md mx-auto text-sm">
              Sponsor announcements coming soon. Interested in partnering?{" "}
              <Link
                href="/contact"
                className="text-heritage font-semibold underline hover:no-underline"
              >
                Get in touch.
              </Link>
            </p>
          </div>
        </SectionWrapper>
      )}
    </>
  );
}
