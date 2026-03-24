import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Participant Submissions",
  description:
    "Submit your pitch deck and team details for Hult Prize Nationals at Hult Boston 2026.",
};

export default function SubmissionsPage() {
  const { submissions } = siteConfig;

  return (
    <>
      <PageHero
        accent="Action Required"
        title="Participant Submissions"
        subtitle="Everything you need to submit before arriving at Nationals."
      />

      {/* Deadline banner */}
      <div className="bg-gradient-to-r from-heritage to-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-center">
            <svg
              className="w-5 h-5 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <strong className="font-bold">Submission Deadline:</strong>
            <span>
              {submissions.deadlineDate} at {submissions.deadlineTime}
            </span>
            <span className="hidden sm:inline text-white/50">|</span>
            <span className="text-white/80">Late submissions will not be accepted.</span>
          </div>
        </div>
      </div>

      {/* Checklist */}
      <SectionWrapper tight className="bg-hp-off-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-hp-black mb-6">
            Pre-event checklist
          </h2>
          <div className="space-y-3">
            {[
              "Pitch deck submitted via the form below",
              "Team details form completed",
              "Deck link is set to 'Anyone can view'",
              "All team member names are correct",
              "Dietary / accessibility requirements noted",
              "Travel arrangements confirmed",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 bg-white rounded-xl border border-hp-border px-5 py-4"
              >
                <div className="w-5 h-5 rounded-md border-2 border-heritage/30 shrink-0" aria-hidden="true" />
                <span className="text-sm text-hp-black font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* What to submit */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <p className="section-label">Required</p>
          <h2 className="section-title">What to Submit</h2>
          <p className="mt-4 text-hp-gray leading-relaxed text-lg">
            All participating teams must complete <strong className="text-hp-black">both</strong> of the
            following submissions before the deadline. Incomplete submissions may
            affect your ability to compete.
          </p>

          <div className="mt-10 space-y-8">
            {/* Submission 1 — Pitch Deck */}
            <div className="card border-l-4 border-l-heritage">
              <div className="flex flex-wrap items-start gap-4 justify-between mb-4">
                <div>
                  <span className="text-xs font-bold text-heritage uppercase tracking-[0.15em]">
                    Submission 1 of 2
                  </span>
                  <h3 className="text-xl font-black text-hp-black mt-1">
                    Pitch Deck
                  </h3>
                </div>
                <span className="badge bg-heritage/10 text-heritage border border-heritage/20 font-bold">
                  Required
                </span>
              </div>

              <ul className="text-sm text-hp-gray space-y-3 mb-6">
                {[
                  "Submit a shareable link to your pitch deck (Google Slides, Canva, or PDF on Google Drive/Dropbox).",
                  'Make sure the link is set to "Anyone with the link can view."',
                  "Decks must be in English and include your team name on the first slide.",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-heritage mt-2 shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>

              {/* Update note */}
              <div className="bg-hp-orange/10 border border-hp-orange/20 rounded-xl p-4 mb-6 text-sm text-hp-orange flex items-start gap-3">
                <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Note:</strong> {submissions.updateNote}</span>
              </div>

              <CTAButton
                label="Submit Pitch Deck"
                href={submissions.pitchDeckFormUrl}
                variant="primary"
                external
              />
            </div>

            {/* Submission 2 — Team Details */}
            <div className="card border-l-4 border-l-midnight">
              <div className="flex flex-wrap items-start gap-4 justify-between mb-4">
                <div>
                  <span className="text-xs font-bold text-midnight uppercase tracking-[0.15em]">
                    Submission 2 of 2
                  </span>
                  <h3 className="text-xl font-black text-hp-black mt-1">
                    Team Details Form
                  </h3>
                </div>
                <span className="badge bg-midnight/10 text-midnight border border-midnight/20 font-bold">
                  Required
                </span>
              </div>

              <ul className="text-sm text-hp-gray space-y-3 mb-6">
                {[
                  "Full legal names of all team members (3–4 members required).",
                  "Primary team contact email and phone number.",
                  "University / institution name and country.",
                  "Details of any guests attending with your team (including University Representatives).",
                  "Dietary restrictions for catered meals.",
                  "Emergency contact and any accessibility requirements.",
                  "Confirmation of travel arrangement status (flying in / local).",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-midnight mt-2 shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>

              <CTAButton
                label="Submit Team Details"
                href={submissions.teamDetailsFormUrl}
                variant="secondary"
                external
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Help */}
      <SectionWrapper tight>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-hp-gray text-sm">
            Problems with submissions? Email us at{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-heritage font-bold underline hover:no-underline"
            >
              {siteConfig.contactEmail}
            </a>{" "}
            and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
