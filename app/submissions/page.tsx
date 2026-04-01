import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Participant Submissions",
  description:
    "Complete the required attendee submission form for Hult Prize Nationals at Hult Boston 2026.",
};

export default function SubmissionsPage() {
  const { submissions } = siteConfig;

  return (
    <>
      <PageHero
        accent="Action Required"
        title="Participant Submissions"
        subtitle="Complete the attendee and submission form before arriving at Nationals."
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
              "Attendee form completed by April 15th",
              "Team and university information entered",
              "All teammate names and emails are accurate",
              "Travel details for Boston arrival are selected",
              "Guest details are included (if applicable)",
              "Pitch deck is submitted as a shareable link or file upload",
              "Dietary and accessibility needs are noted",
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
            All participating teams must complete the form below before the deadline.
            This single form is used for both attendee details and pitch deck
            submission materials.
          </p>

          <div className="mt-10">
            <div className="card border-l-4 border-l-heritage">
              <div className="flex flex-wrap items-start gap-4 justify-between mb-4">
                <div>
                  <span className="text-xs font-bold text-heritage uppercase tracking-[0.15em]">
                    Required Form
                  </span>
                  <h3 className="text-xl font-black text-hp-black mt-1">
                    2026 East Coast National Competition Attendee Form
                  </h3>
                </div>
                <span className="badge bg-heritage/10 text-heritage border border-heritage/20 font-bold">
                  Required
                </span>
              </div>

              <ul className="text-sm text-hp-gray space-y-3 mb-6">
                {[
                  "Pitch deck submission via shareable link (Canva, Google Slides, or equivalent)",
                  'If submitting a link, set permissions to "Anyone with the link can view"',
                  "Pitch deck file upload option (PPT or PDF)",
                  "Deck updates are permitted by re-submitting the form before the deadline",
                  "Email, team name, and university details",
                  "Number of teammates traveling to Nationals (2, 3, or 4)",
                  "Team captain and teammate names and email addresses",
                  "Boston arrival date (Thursday, April 30th or Friday, May 1st)",
                  "University Representative and Campus Director details (if attending)",
                  "Dietary restrictions and accessibility/accommodation needs",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-heritage mt-2 shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>

              <div className="bg-hp-orange/10 border border-hp-orange/20 rounded-xl p-4 mb-6 text-sm text-hp-orange flex items-start gap-3">
                <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  <strong>Important:</strong> The form will not automatically collect
                  your name and email unless you enter them in the required fields.
                  If you revise your deck, please submit the updated link or file
                  again before the deadline. The most recent submission will be used.
                </span>
              </div>

              <CTAButton
                label="Complete Attendee + Submission Form"
                href={submissions.attendeeFormUrl}
                variant="primary"
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
            For submission support, please email{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-heritage font-bold underline hover:no-underline"
            >
              {siteConfig.contactEmail}
            </a>{" "}
            and our team will respond within 24 business hours.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
