// ============================================================
//  CONTENT CONFIG — edit this file to update site content
//  No coding knowledge needed. Follow the structure below.
// ============================================================

export const siteConfig = {
  // ── Event basics ──────────────────────────────────────────
  eventName: "Hult Prize Nationals",
  eventSubtitle: "Hult Boston 2026",
  dates: "May 1–2, 2026 (Friday-Saturday)",
  location: "Hult International Business School",
  address: "1 Education St, Cambridge, MA 02141",
  googleMapsUrl:
    "https://maps.google.com/?q=1+Education+St,+Cambridge,+MA+02141",

  // ── Contact ───────────────────────────────────────────────
  contactEmail: "angel.hoagland@hult.edu",
  contactNote:
    "For day-of assistance, visit the Help Desk located at the main lobby registration table.",

  // ── Submission links ──────────────────────────────────────
  // Replace placeholder URLs with real form links when ready
  submissions: {
    pitchDeckFormUrl: "https://forms.example.com/pitch-deck", // ← replace
    teamDetailsFormUrl: "https://forms.example.com/team-details", // ← replace
    deadlineDate: "April 25, 2026",
    deadlineTime: "11:59 PM EST",
    updateNote:
      "If you update your deck after initial submission, please re-submit the updated link before the deadline. We will use the most recently submitted version.",
  },

  // ── Navigation links ──────────────────────────────────────
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Schedule", href: "/schedule" },
    { label: "Submissions", href: "/submissions" },
    { label: "FAQs", href: "/faqs" },
    { label: "Travel + Stay", href: "/travel" },
    { label: "Contact", href: "/contact" },
  ],

  // ── Home page CTAs ────────────────────────────────────────
  homeCtas: [
    {
      label: "View Schedule",
      href: "/schedule",
      variant: "primary" as const,
    },
    {
      label: "Submit Your Deck",
      href: "/submissions",
      variant: "secondary" as const,
    },
    { label: "FAQs", href: "/faqs", variant: "outline" as const },
    {
      label: "Travel + Stay",
      href: "/travel",
      variant: "outline" as const,
    },
  ],

  // ── Schedule ──────────────────────────────────────────────
  schedule: {
    day1: {
      date: "Friday, May 1, 2026",
      label: "Day 1",
      items: [
        {
          time: "11:00 AM",
          endTime: "12:00 PM",
          title: "Registration",
          location: "Hult Campus Lobby",
          description:
            "Check in, collect your participant badge, welcome packet, and event materials.",
          type: "logistics" as const,
        },
        {
          time: "12:00 PM",
          endTime: "1:00 PM",
          title: "Kickoff Orientation",
          location: "Fenway Bleachers",
          description:
            "Welcome orientation for all startup teams. Overview of the competition format, rules, schedule, and what to expect over the next two days.",
          type: "ceremony" as const,
        },
        {
          time: "1:00 PM",
          endTime: "2:00 PM",
          title: "Lunch",
          location: "7th Floor Atrium",
          description:
            "Buffet lunch provided for all participants.",
          type: "break" as const,
        },
        {
          time: "2:00 PM",
          endTime: "3:00 PM",
          title: "Welcome Session",
          location: "Fenway Bleachers",
          description:
            "Welcome remarks and keynote session to set the stage for the competition.",
          type: "ceremony" as const,
        },
        {
          time: "3:00 PM",
          endTime: "3:15 PM",
          title: "Transition to Pitch Rooms",
          location: "Assigned Classrooms",
          description:
            "Head to your assigned pitch room. Room assignments will be shared during orientation and at registration.",
          type: "logistics" as const,
        },
        {
          time: "3:15 PM",
          endTime: "7:45 PM",
          title: "Preliminary Round",
          location: "Assigned Pitch Rooms",
          description:
            "Each team delivers a 4-minute pitch followed by 4 minutes of Q&A. Judges will score (2 min) and provide feedback (2 min) after each pitch, with a 3-minute transition between teams.",
          type: "pitch" as const,
        },
        {
          time: "8:00 PM",
          endTime: "9:00 PM",
          title: "Networking Reception",
          location: "1965",
          description:
            "Appetizers and drinks for all participants. A chance to unwind, meet fellow teams, and connect with the Hult Prize community.",
          type: "social" as const,
        },
      ],
    },
    day2: {
      date: "Saturday, May 2, 2026",
      label: "Day 2",
      items: [
        {
          time: "8:00 AM",
          endTime: "10:00 AM",
          title: "Breakfast",
          location: "7th Floor Atrium",
          description:
            "Coffee, pastries, and light breakfast for all startup teams.",
          type: "break" as const,
        },
        {
          time: "10:00 AM",
          endTime: "10:15 AM",
          title: "Finals Opening Ceremony",
          location: "Fenway Bleachers",
          description:
            "Day 2 opening remarks and introduction to the finals format.",
          type: "ceremony" as const,
        },
        {
          time: "10:15 AM",
          endTime: "11:45 AM",
          title: "Final Pitches — Top 8",
          location: "Fenway Bleachers",
          description:
            "The top 8 teams from the Preliminary Round present on the main stage. Each team delivers a 4-minute pitch with 4 minutes of Q&A and a 2-minute transition.",
          type: "pitch" as const,
        },
        {
          time: "11:45 AM",
          endTime: "12:00 PM",
          title: "Break",
          location: "Fenway Bleachers / Atrium",
          description:
            "Short break between finals and the speaker session.",
          type: "break" as const,
        },
        {
          time: "12:00 PM",
          endTime: "1:00 PM",
          title: "Hult Talks — Speaker Session",
          location: "Fenway Bleachers",
          description:
            "A special speaker session featuring Hult Faculty while final deliberations take place.",
          type: "workshop" as const,
        },
        {
          time: "1:00 PM",
          endTime: "1:15 PM",
          title: "Award Ceremony & Closing",
          location: "Fenway Bleachers",
          description:
            "Winner announcement, awards presentation, and closing remarks from the organizers. Congratulations to all teams!",
          type: "ceremony" as const,
        },
      ],
    },
  },

  // ── FAQs ──────────────────────────────────────────────────
  faqs: [
    {
      category: "Participation & Eligibility",
      questions: [
        {
          q: "Who can participate in Hult Prize Nationals?",
          a: "Teams that have advanced through their campus or regional Hult Prize competition are eligible to participate. Each team must consist of 3–4 enrolled students from the same institution.",
        },
        {
          q: "Can I participate as a solo entrant?",
          a: "No. Hult Prize Nationals requires teams of 3–4 members. If your team has changed since your regional competition, please contact us at angel.hoagland@hult.edu to confirm eligibility.",
        },
        {
          q: "Our team roster changed — what do we do?",
          a: "Minor roster changes may be accommodated. Email us as soon as possible with the updated member details. All members must be currently enrolled students at the same institution.",
        },
      ],
    },
    {
      category: "Pitch & Judging",
      questions: [
        {
          q: "What is the judging criteria?",
          a: "Teams are evaluated on: (1) Problem clarity and scale, (2) Solution innovation and feasibility, (3) Business model and sustainability, (4) Team composition and execution capability, and (5) Social impact alignment with the Hult Prize theme.",
        },
        {
          q: "How long is each pitch?",
          a: "Each pitch is 4 minutes followed by 4 minutes of Q&A. Judges then have 2 minutes for scoring and 2 minutes for feedback, with a 3-minute transition between teams. The same format applies in both the Preliminary Round and Finals.",
        },
        {
          q: "Can we use slides during the pitch?",
          a: "Yes. Please submit your pitch deck via the Submissions page before the deadline. Ensure your deck is accessible via a shareable link (Google Slides, Canva, or PDF on Google Drive).",
        },
        {
          q: "Will we know our judge panel in advance?",
          a: "Judge assignments will not be shared in advance to ensure fairness. Judge bios will be available in the event program distributed at check-in.",
        },
      ],
    },
    {
      category: "Submissions & Deadlines",
      questions: [
        {
          q: "What do I need to submit before the event?",
          a: "You must submit (1) your pitch deck link and (2) your team details form. See the Submissions page for links and instructions.",
        },
        {
          q: "What is the submission deadline?",
          a: "All submissions are due by April 25, 2026 at 11:59 PM EST. Late submissions will not be accepted.",
        },
        {
          q: "Can I update my pitch deck after submitting?",
          a: "Yes. If you update your deck, submit the updated link through the same form before the deadline. We will use the most recently submitted version.",
        },
      ],
    },
    {
      category: "Logistics & Venue",
      questions: [
        {
          q: "Where is the event located?",
          a: "Hult International Business School — 1 Education St, Cambridge, MA 02141. The closest MBTA option is the Green Line (Lechmere and Science Park/West End), with Community College on the Orange Line also nearby.",
        },
        {
          q: "Is parking available at the venue?",
          a: "Limited street parking is available in the surrounding area. We strongly recommend public transit or ride-share. Green Line stations (Lechmere and Science Park/West End) are the closest rail options.",
        },
        {
          q: "Will meals be provided?",
          a: "Yes. On Day 1, a buffet lunch is provided and the evening networking reception includes appetizers and beverages. On Day 2, breakfast (coffee and pastries) is available from 8:00 AM in the 7th Floor Atrium.",
        },
        {
          q: "Is there a dress code?",
          a: "Business casual is recommended for participants during pitches. Comfortable clothing is fine for non-pitch sessions.",
        },
      ],
    },
    {
      category: "Travel & Accommodation",
      questions: [
        {
          q: "Does Hult Prize provide travel reimbursement?",
          a: "Travel support details will be communicated directly to confirmed participant teams via email. Check the Travel + Stay page for accommodation options.",
        },
        {
          q: "Are there recommended hotels near the venue?",
          a: "Yes — hotel recommendations and campus accommodation options are listed on the Travel + Stay page. Details are being finalized and will be posted soon.",
        },
      ],
    },
  ],

  // ── Sponsors ──────────────────────────────────────────────
  sponsors: {
    showSponsors: false,
    tiers: [
      {
        name: "Platinum",
        logos: [] as { name: string; logoUrl: string; websiteUrl: string }[],
      },
      {
        name: "Gold",
        logos: [] as { name: string; logoUrl: string; websiteUrl: string }[],
      },
      {
        name: "Community Partners",
        logos: [] as { name: string; logoUrl: string; websiteUrl: string }[],
      },
    ],
  },

  // ── Travel ────────────────────────────────────────────────
  travel: {
    hotelNote: "",
    campusNote: "",
    transitNote:
      "Closest transit is the MBTA Green Line (Lechmere and Science Park/West End) with Community College on the Orange Line also nearby.",
  },
};

export type ScheduleItem = {
  time: string;
  endTime: string;
  title: string;
  location: string;
  description: string;
  type: "logistics" | "ceremony" | "pitch" | "break" | "workshop" | "social";
};

export type FaqCategory = {
  category: string;
  questions: { q: string; a: string }[];
};
