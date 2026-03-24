import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import HomeCountdown from "@/components/HomeCountdown";
import { siteConfig, ScheduleItem } from "@/lib/content";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "Full participant-facing schedule for Hult Prize Nationals at Hult Boston on May 1-2, 2026.",
};

function ScheduleCard({ item }: { item: ScheduleItem }) {
  return (
    <div className="flex gap-4 sm:gap-6 group">
      {/* Time column */}
      <div className="w-20 sm:w-28 shrink-0 pt-1 text-right">
        <p className="text-sm font-bold text-hp-black">{item.time}</p>
        <p className="text-xs text-hp-gray">{item.endTime}</p>
      </div>

      {/* Timeline dot + line */}
      <div className="flex flex-col items-center">
        <div
          className="w-3.5 h-3.5 rounded-full mt-1.5 shrink-0 ring-4 ring-white bg-hp-black"
          aria-hidden="true"
        />
        <div className="w-px flex-1 bg-hp-border mt-2" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-8 last:pb-0">
        <div className="card card-hover border-l-4 border-l-hp-border">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <h3 className="font-bold text-hp-black text-base sm:text-lg leading-snug">
              {item.title}
            </h3>
          </div>
          <p className="text-sm text-hp-gray flex items-center gap-1.5 mb-2">
            <svg
              className="w-3.5 h-3.5 shrink-0"
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
            {item.location}
          </p>
          <p className="text-sm text-hp-gray leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function DaySchedule({
  day,
}: {
  day: { date: string; label: string; items: ScheduleItem[] };
}) {
  return (
    <div>
      {/* Day header */}
      <div className="flex items-center gap-4 mb-10">
        <div className="w-14 h-14 gradient-heritage rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-heritage/20">
          <span className="text-white font-black text-sm text-center leading-tight">
            {day.label.replace(" ", "\n")}
          </span>
        </div>
        <div>
          <p className="text-xs font-bold text-heritage uppercase tracking-[0.2em]">
            {day.label}
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-hp-black">
            {day.date}
          </h2>
        </div>
      </div>

      {/* Items */}
      <div>
        {day.items.map((item, i) => (
          <ScheduleCard key={`${item.time}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function SchedulePage() {
  return (
    <>
      <PageHero
        accent="Event Program"
        title="Schedule"
        subtitle={`${siteConfig.dates} · ${siteConfig.location}, Cambridge MA`}
      />

      <SectionWrapper tight className="bg-hp-off-white">
        <div className="max-w-xl mx-auto text-center">
          <HomeCountdown />
        </div>
      </SectionWrapper>

      {/* Day 1 */}
      <SectionWrapper>
        <DaySchedule day={siteConfig.schedule.day1} />
      </SectionWrapper>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-heritage/30 to-transparent" />
      </div>

      {/* Day 2 */}
      <SectionWrapper>
        <DaySchedule day={siteConfig.schedule.day2} />
      </SectionWrapper>

      {/* Footer note */}
      <SectionWrapper tight className="bg-hp-off-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-hp-gray">
            All times are Eastern Time (ET). Room assignments will be confirmed
            at check-in. Questions? Email{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-heritage font-semibold underline hover:no-underline"
            >
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
