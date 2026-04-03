import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import TravelPhotoAccent from "@/components/TravelPhotoAccent";
import RecommenderAvatar from "@/components/RecommenderAvatar";
import { getGalleryUrls, pickAccentUrls } from "@/lib/gallery";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Travel + Stay",
  description:
    "Travel, accommodation, and transportation guidance for Hult Prize Nationals at Hult Boston 2026.",
};

type CuratedTag =
  | "Dining"
  | "Culture"
  | "Café"
  | "Outing"
  | "Neighborhoods"
  | "Dessert";
type TagColor = "heritage" | "purple" | "sky" | "hp-orange";

const studentLifeCurated = [
  {
    slug: "kristina",
    name: "Kristina Shimkus",
    role: "Senior Director of Student Life",
    initials: "K",
    imageSrc: "/student-life/kristina.png",
    picks: [
      {
        tag: "Dining" as CuratedTag,
        tagColor: "heritage" as TagColor,
        title: "Union Oyster House",
        meta: "Boston, MA · America’s oldest restaurant",
        body:
          "A restaurant dating back to pre-Revolutionary days, serving chowder, lobster rolls, and other New England seafood in a historic setting. A must-see in Boston for teams who want seafood and a landmark meal in one stop.",
        href: "https://www.unionoysterhouse.com/",
        linkLabel: "Visit Union Oyster House",
      },
      {
        tag: "Culture" as CuratedTag,
        tagColor: "purple" as TagColor,
        title: "Isabella Stewart Gardner Museum",
        meta: "Fenway · Venetian-style palace & courtyard",
        body:
          "Housed in a beautiful 15th-century Venetian-style palace around an interior courtyard, with an eclectic art collection. Perfect for a focused one- to two-hour visit.",
        href: "https://www.gardnermuseum.org/",
        linkLabel: "Plan a museum visit",
      },
    ],
  },
  {
    slug: "angel",
    name: "Angel Hoagland",
    role: "Head of Student Life PG",
    initials: "AH",
    imageSrc: "/student-life/angel.png",
    picks: [
      {
        tag: "Dining" as CuratedTag,
        tagColor: "heritage" as TagColor,
        title: "Kala Thai",
        meta: "Downtown Boston · Kala Thai Cookery",
        body:
          "Chef-led Thai cooking in a cozy, sit-down setting (think curries, noodles, and wok dishes built around fresh herbs and heat you can dial up or down). It’s a strong pick when your group wants fragrant, comforting plates after walking the North End or downtown.",
        href: "https://www.kalathaiboston.com/",
        linkLabel: "Kala Thai Cookery",
      },
      {
        tag: "Dining" as CuratedTag,
        tagColor: "heritage" as TagColor,
        title: "Happy Lamb Hot Pot",
        meta: "Cambridge, MA · AYCE hot pot on Mass Ave",
        body:
          "Mongolian-style hot pot: choose your broth, then cook thin-sliced meats, noodles, and vegetables right at the table. Angel’s tip: look for the weekday all-you-can-eat special—she’s seen it around $20 on weekdays (pricing and rules can change, so worth confirming before you go). Central Square–friendly for groups who want a long, interactive meal.",
        href:
          "https://www.google.com/maps/search/?api=1&query=Happy+Lamb+Hot+Pot+485+Massachusetts+Ave+Cambridge+MA",
        linkLabel: "Open in Maps",
      },
      {
        tag: "Dessert" as CuratedTag,
        tagColor: "hp-orange" as TagColor,
        title: "Helados Juli's Frozen Dessert",
        meta: "Colombian-inspired ice cream & paletas",
        body:
          "A family-owned ice cream shop known for colorful paletas, tropical fruit flavors, and over-the-top frozen treats—perfect when you want something cold, sweet, and a little festive after a day in the city. Several Boston-area locations; check hours for the one that fits your route.",
        href: "https://www.heladosjulisinc.com/",
        linkLabel: "Helados Juli's",
      },
    ],
  },
  {
    slug: "rachel",
    name: "Rachel Rowe",
    role: "Head of Student Life UG",
    initials: "R",
    imageSrc: "/student-life/rachel.png",
    picks: [
      {
        tag: "Dining" as CuratedTag,
        tagColor: "heritage" as TagColor,
        title: "Passage to India",
        meta: "Cambridge, MA · Near Kendall Square",
        body:
          "I would be remiss if I didn’t say Passage to India—I frequent it more than any other spot. Delicious food, kind service, nice ambiance, and a convenient location for campus and the innovation district.",
        href: "https://passageindia.com/",
        linkLabel: "Visit Passage to India",
      },
    ],
  },
  {
    slug: "emilie",
    name: "Emilie Bader",
    role: "Student Life Coordinator",
    initials: "E",
    imageSrc: "/student-life/emilie.png",
    picks: [
      {
        tag: "Dining" as CuratedTag,
        tagColor: "heritage" as TagColor,
        title: "Warren Tavern",
        meta: "Charlestown · ~20 min walk from Hult",
        body:
          "If you have time for a bit of a walk, visiting Warren Tavern is an absolute must. Only about twenty minutes from Hult’s campus, this historic tavern, built in 1780, is cozy and charming with a great menu of New England fare and pub offerings.",
        href: "https://www.warrentavern.com/",
        linkLabel: "Warren Tavern",
      },
      {
        tag: "Café" as CuratedTag,
        tagColor: "sky" as TagColor,
        title: "Cafe Beatrice",
        meta: "Cambridge · Quick bite or coffee",
        body:
          "For a quick bite or coffee, look no further than Cafe Beatrice. I often stop by during my lunch break. Great coffee, and the Earl Grey cookie is to die for.",
        href: "https://www.thelexingtoncx.com/cafebeatrice",
        linkLabel: "Cafe Beatrice",
      },
      {
        tag: "Outing" as CuratedTag,
        tagColor: "heritage" as TagColor,
        title: "Faneuil Hall, Quincy Market & the North End",
        meta: "Downtown Boston · Team outing",
        body:
          "For an outing with your team, walk around Faneuil Hall and Quincy Market. There is always something happening here—street performers, food stalls, and shopping. Not far away is Boston’s North End, our Little Italy: settled in the 1630s, rich in history, and today full of Italian restaurants and bakeries. A cannoli at Mike’s Pastry is a personal favorite—bring cash.",
        href: "https://www.faneuilhallmarketplace.com/",
        linkLabel: "Faneuil Hall Marketplace",
      },
    ],
  },
  {
    slug: "aviral",
    name: "Aviral Narang",
    role: "Student Life Intern",
    initials: "A",
    imageSrc: "/student-life/aviral.png",
    picks: [
      {
        tag: "Dining" as CuratedTag,
        tagColor: "heritage" as TagColor,
        title: "Aatma at Widowmaker Brewing",
        meta: "Brighton · Indian (short cab ride)",
        body:
          "For some of the best Indian food in town: Aatma at Widowmaker. It’s a cab ride from campus but worth it—go early if you want a good seat.",
        href: "https://www.aatmacurryhouse.com/",
        linkLabel: "Aatma at Widowmaker",
      },
      {
        tag: "Dining" as CuratedTag,
        tagColor: "heritage" as TagColor,
        title: "Pinocchio’s Pizza & Subs",
        meta: "Harvard Square · A Harvard staple",
        body:
          "Iconic Harvard Square spot—historic and a must if you visit Harvard. Get a slice of Buffalo Chicken and Honey Garlic Chicken.",
        href: "https://www.pinocchiospizza.com/",
        linkLabel: "Pinocchio’s",
      },
      {
        tag: "Dining" as CuratedTag,
        tagColor: "heritage" as TagColor,
        title: "Sumiao Hunan Kitchen",
        meta: "Cambridge · Michelin-recommended Hunan",
        body:
          "Michelin-recommended Hunan cuisine—probably the best Hunan food in town in a polished setting.",
        href: "https://www.sumiaohunan.com/",
        linkLabel: "Sumiao Hunan Kitchen",
      },
      {
        tag: "Dining" as CuratedTag,
        tagColor: "hp-orange" as TagColor,
        title: "L.A. Burdick Handmade Chocolates",
        meta: "Treat yourself",
        body:
          "Whatever happens, try L.A. Burdick Chocolates. It’s a sweet treat you will thank yourself for.",
        href: "https://www.burdickchocolate.com/",
        linkLabel: "L.A. Burdick",
      },
      {
        tag: "Neighborhoods" as CuratedTag,
        tagColor: "sky" as TagColor,
        title: "Walkable neighborhoods",
        meta: "Explore on foot",
        body:
          "North End, Newbury Street, Downtown Crossing, Harvard Square, and Quincy Market are all great places to walk, shop, and take in the city.",
        href: "https://www.boston.gov/visiting-boston",
        linkLabel: "City of Boston visitor tips",
      },
    ],
  },
];

const tagColorClass: Record<TagColor, string> = {
  heritage: "text-heritage",
  purple: "text-purple",
  sky: "text-sky",
  "hp-orange": "text-hp-orange",
};

export default function TravelPage() {
  const travelAccentPhotos = pickAccentUrls(getGalleryUrls(), 3, 47);

  const nearbyHotels = [
    {
      name: "Holiday Inn Express & Suites Boston - Cambridge",
      walkTime: "5-8 min walk",
      location: "250 Monsignor O'Brien Hwy, Cambridge",
      website:
        "https://www.ihg.com/holidayinnexpress/hotels/us/en/cambridge/cbggi/hoteldetail",
      note: "Closest mainstream option for teams prioritizing quick campus access.",
    },
    {
      name: "Fairfield Inn & Suites Boston Cambridge",
      walkTime: "6-10 min walk",
      location: "215 Monsignor O'Brien Hwy, Cambridge",
      website:
        "https://www.marriott.com/en-us/hotels/bosfc-fairfield-inn-and-suites-boston-cambridge/overview/",
      note: "Reliable business-travel option with convenient rideshare and transit access.",
    },
    {
      name: "Hampton Inn by Hilton Boston/Cambridge",
      walkTime: "10-14 min walk",
      location: "191 Monsignor O'Brien Hwy, Cambridge",
      website:
        "https://www.hilton.com/en/hotels/boscmhx-hampton-boston-cambridge/",
      note: "Value-focused option for teams balancing convenience and comfort.",
    },
    {
      name: "The Royal Sonesta Boston",
      walkTime: "12-15 min walk",
      location: "40 Edwin H Land Blvd, Cambridge",
      website: "https://www.sonesta.com/royal-sonesta/ma/cambridge/royal-sonesta-boston",
      note: "Premium riverfront option suitable for judges, guests, and faculty members.",
    },
  ];

  return (
    <>
      <PageHero
        accent="Getting Here"
        title="Travel + Stay"
        subtitle="Travel planning information for participants attending Hult Prize Nationals in Cambridge, MA."
      />

      <SectionWrapper>
        <div className="max-w-3xl mx-auto space-y-10">
          <TravelPhotoAccent urls={travelAccentPhotos} />

          {/* Campus accommodation: Hult House */}
          <div className="card">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h2 className="text-xl font-black text-hp-black">
                  Hult House: On-Campus Housing
                </h2>
                <p className="text-sm text-hp-gray mt-0.5">
                  Hult Prize US Nationals, East Coast · Hult House Residency Request Form
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-hp-border bg-gradient-to-br from-hp-off-white to-white p-6 sm:p-7 space-y-6">
              <div className="rounded-xl border border-heritage/20 bg-heritage/5 px-4 py-3 text-sm text-hp-gray leading-relaxed">
                <strong className="text-hp-black">Hult House only:</strong> For questions
                about on-campus residency at Hult House (not off-campus hotels or general
                travel), contact{" "}
                <strong className="text-hp-black">Amanda Russell</strong>, Associate
                Director of Residential Life, at{" "}
                <a
                  className="text-heritage font-semibold hover:underline"
                  href={`mailto:${siteConfig.travel.hultHouseResidentialLifeEmail}`}
                >
                  {siteConfig.travel.hultHouseResidentialLifeEmail}
                </a>
                .
              </div>

              <p className="text-sm text-hp-gray leading-relaxed">
                Participants interested in residing at Hult House, the on-campus
                residence hall in Cambridge, Massachusetts, may request housing by
                completing the form below.{" "}
                <strong className="text-hp-black">A minimum two-night stay</strong> is
                required. After submission, availability is reviewed and you will receive
                an invoice.{" "}
                <strong className="text-hp-black">All room charges are due prior to arrival.</strong>
              </p>

              <CTAButton
                label="Open Hult House Residency Request Form"
                href={siteConfig.travel.hultHouseResidencyFormUrl}
                variant="primary"
                external
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-hp-gray">
                <div className="rounded-xl bg-white border border-hp-border p-4">
                  <p className="font-bold text-hp-black">Arrival and departure</p>
                  <p className="mt-2">
                    <strong className="text-hp-black">Earliest arrival:</strong> April 30, 2026
                  </p>
                  <p className="mt-1">
                    <strong className="text-hp-black">Latest departure:</strong> Sunday, May 3, 2026
                  </p>
                  <p className="mt-2 text-xs text-hp-gray">
                    Dates are selected on the form. Minimum stay applies.
                  </p>
                </div>
                <div className="rounded-xl bg-white border border-hp-border p-4">
                  <p className="font-bold text-hp-black">Hult House contact</p>
                  <p className="mt-2">
                    <strong className="text-hp-black">Amanda Russell</strong> (Hult House
                    only), Associate Director of Residential Life:{" "}
                    <a
                      className="text-heritage font-semibold hover:underline"
                      href={`mailto:${siteConfig.travel.hultHouseResidentialLifeEmail}`}
                    >
                      {siteConfig.travel.hultHouseResidentialLifeEmail}
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <p className="font-bold text-hp-black text-sm mb-3">
                  The form collects (among other items)
                </p>
                <ul className="space-y-2 text-sm text-hp-gray">
                  {[
                    "Legal name and institutional email address",
                    "Billing address and phone number",
                    "Institutional affiliation",
                    "Desired arrival and departure dates",
                    "Ranking of housing style preferences (apartments include a kitchenette; dormitories do not)",
                    "Optional mutual roommate request",
                    "Acknowledgement of availability, payment, age (18+ on arrival), and key-card access terms",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full bg-heritage shrink-0"
                        aria-hidden="true"
                      />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-hp-gray border-t border-hp-border pt-4">
                Housing is subject to availability and is confirmed pending availability.
                Units are issued only after payment is completed in full. Housing is
                available only to individuals who are 18 years or older on the day of
                arrival. Electronic key-card access ends at 12:00 PM (noon) on the selected
                departure day.
              </p>
            </div>
          </div>

          {/* Hotels */}
          <div className="card">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h2 className="text-xl font-black text-hp-black">Hotels</h2>
                <p className="text-sm text-hp-gray mt-0.5">
                  Hotels located within approximately a 15-minute walk from campus
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-hp-border bg-hp-off-white/70 p-4 sm:p-5 mb-5">
              <p className="text-sm text-hp-gray leading-relaxed">
                Room rates may vary based on demand, local events, and booking timing.
                We recommend booking early to secure stronger availability and pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {nearbyHotels.map((hotel) => (
                <article
                  key={hotel.name}
                  className="group rounded-2xl border border-hp-border bg-white p-5 hover:border-heritage/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-black text-hp-black group-hover:text-heritage transition-colors">
                      {hotel.name}
                    </h3>
                    <span className="rounded-full bg-hp-off-white px-3 py-1 text-xs font-semibold text-hp-black whitespace-nowrap">
                      {hotel.walkTime}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-hp-gray">{hotel.location}</p>
                  <p className="mt-2 text-sm text-hp-gray">{hotel.note}</p>
                  <a
                    href={hotel.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center text-sm font-semibold text-heritage hover:underline"
                  >
                    Visit hotel website
                  </a>
                </article>
              ))}
            </div>
          </div>

          {/* Getting to the venue: transit */}
          <div className="card">
            <h2 className="text-xl font-black text-hp-black mb-6">
              Getting to the Venue
            </h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-heritage/10 rounded-xl flex items-center justify-center text-heritage shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-hp-black">Venue Address</p>
                  <p className="text-sm text-hp-gray mt-1">
                    {siteConfig.location}
                    <br />
                    {siteConfig.address}
                  </p>
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-heritage font-semibold hover:underline mt-2 inline-block"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* MBTA */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-sky/10 rounded-xl flex items-center justify-center text-sky shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-hp-black">Public Transit (Recommended)</p>
                  <p className="text-sm text-hp-gray mt-1">
                    The closest stations are{" "}
                    <strong className="text-hp-black">Lechmere</strong> and{" "}
                    <strong className="text-hp-black">Science Park/West End</strong> on the Green Line.
                    <br />
                    If you are on the Orange Line,{" "}
                    <strong className="text-hp-black">Community College</strong> is the closest option.
                    <br />
                    Please allow 10-20 minutes from station exit to the check-in desk, depending on walking pace and weekend service.
                  </p>
                </div>
              </div>

              {/* Rideshare */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-purple/10 rounded-xl flex items-center justify-center text-purple shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-hp-black">Ride-share &amp; Taxis</p>
                  <p className="text-sm text-hp-gray mt-1">
                    Uber, Lyft, and taxis are widely available in the Cambridge /
                    Boston area. Drop-off is available at the main entrance on
                    Education St.
                  </p>
                </div>
              </div>

              {/* Parking */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-hp-off-white rounded-xl flex items-center justify-center text-hp-gray shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-hp-black">Parking</p>
                  <p className="text-sm text-hp-gray mt-1">
                    Limited metered street parking is available in the area.
                    Paid garages are accessible within a 10-minute walk. Public
                    transit is recommended whenever possible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Airport info */}
          <div className="card gradient-midnight text-white border-0">
            <h2 className="text-lg font-black mb-5">Arriving by Air</h2>
            <div className="grid grid-cols-1 gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <p className="font-bold mb-1">Boston Logan (BOS)</p>
                <p className="text-white/60 font-light">
                  Primary airport for participants. Approximately{" "}
                  <strong className="text-white">15-20 minutes</strong> by car to campus
                  in typical traffic.
                </p>
              </div>
            </div>
            <p className="text-xs text-white/40 mt-5">
              * Travel times are estimates and may vary based on traffic conditions.
            </p>
          </div>

          {/* Student Life curated picks */}
          <div className="card border-l-4 border-l-heritage">
            <p className="section-label">Hult Boston Student Life</p>
            <h2 className="text-xl font-black text-hp-black mt-1 mb-3">
              Curated Boston experiences
            </h2>
            <p className="text-sm text-hp-gray leading-relaxed mb-5 max-w-3xl">
              The picks below come from the{" "}
              <strong className="text-hp-black">Student Life team at Hult Boston</strong>—people
              who live and work alongside students every day. Each card is paired with the teammate
              who suggested it, so you can see the city through their eyes between sessions.
            </p>

            <div className="rounded-2xl border border-heritage/25 bg-gradient-to-br from-heritage/[0.07] to-transparent px-5 py-4 sm:px-6 sm:py-5 mb-8">
              <p className="text-xs font-bold uppercase tracking-wider text-heritage mb-1.5">
                First time in Boston?
              </p>
              <p className="text-base sm:text-lg font-black text-hp-black leading-snug">
                Visiting Boston for the first time? Here&apos;s what you can do.
              </p>
              <p className="text-sm text-hp-gray mt-2 leading-relaxed max-w-2xl">
                Pick one walkable neighborhood, one sit-down meal, and one only-in-Boston moment—then
                borrow from the Student Life picks below for the rest. Each suggestion is labeled with
                who recommended it, so you can follow a thread or mix and match.
              </p>
            </div>

            <div className="space-y-10">
              {studentLifeCurated.map((person) => (
                <section
                  key={person.slug}
                  className="rounded-2xl border border-hp-border bg-white/80 overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 sm:p-6 border-b border-hp-border bg-hp-off-white/80">
                    <RecommenderAvatar
                      src={person.imageSrc}
                      alt={`${person.name} — ${person.role} · Hult Boston`}
                      initials={person.initials}
                      size={72}
                    />
                    <div>
                      <h3 className="text-lg font-black text-hp-black leading-snug">
                        <span className="text-hp-black">{person.name}</span>
                        <span className="text-hp-gray font-normal text-sm sm:text-base">
                          {" — "}
                          {person.role} · Hult Boston
                        </span>
                      </h3>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 space-y-6">
                    {person.picks.map((pick) => (
                      <article
                        key={`${person.slug}-${pick.title}`}
                        className="rounded-2xl border border-hp-border bg-hp-off-white/50 p-5 sm:p-6"
                      >
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            className={`text-xs font-bold uppercase tracking-wider ${tagColorClass[pick.tagColor]}`}
                          >
                            {pick.tag}
                          </span>
                        </div>
                        <h4 className="text-lg font-black text-hp-black">{pick.title}</h4>
                        <p className="text-xs text-hp-gray mt-0.5 mb-3">{pick.meta}</p>
                        <p className="text-sm text-hp-gray leading-relaxed">{pick.body}</p>
                        <a
                          href={pick.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4 text-sm font-bold text-heritage hover:underline"
                        >
                          {pick.linkLabel}
                        </a>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          {/* Boston guide */}
          <div className="card">
            <h2 className="text-xl font-black text-hp-black mb-2">
              Boston visitor recommendations
            </h2>
            <p className="text-sm text-hp-gray mb-6">
              Based on current public pricing and local recommendations. Costs are approximate per person.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-hp-gray">
              {[
                {
                  title: "Freedom Trail (self-guided or guided)",
                  desc: "Efficient way to explore central Boston history in a single route.",
                  cost: "Free to walk, guided tours usually $17-$20.",
                  href: "https://www.thefreedomtrail.org/",
                },
                {
                  title: "New England Aquarium",
                  desc: "Suitable indoor option for teams with limited time.",
                  cost: "Adult admission is usually around $40.",
                  href: "https://www.neaq.org/visit/tickets/buy-tickets-online/",
                },
                {
                  title: "Boston Tea Party Ships & Museum",
                  desc: "Interactive experience that pairs well with a Seaport visit.",
                  cost: "General admission is usually around $35.",
                  href: "https://www.bostonteapartyship.com/",
                },
                {
                  title: "Museum of Science",
                  desc: "Hands-on exhibits with convenient public transit access.",
                  cost: "Most general tickets are usually in the $30-$35 range.",
                  href: "https://www.mos.org/",
                },
                {
                  title: "Fenway Park Tour",
                  desc: "Recommended for teams seeking a classic Boston experience.",
                  cost: "Tours often start around $25-$35.",
                  href: "https://www.mlb.com/redsox/ballpark/tours",
                },
                {
                  title: "Charles River Esplanade + Boston Common",
                  desc: "Low-cost option for walks, photos, or downtime.",
                  cost: "Free.",
                  href: "https://www.esplanadeassociation.org/",
                },
              ].map((spot) => (
                <a
                  key={spot.title}
                  href={spot.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-hp-border p-4 hover:border-heritage/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <p className="font-bold text-hp-black group-hover:text-heritage transition-colors">{spot.title}</p>
                  <p className="mt-1">{spot.desc}</p>
                  <p className="mt-1">
                    <strong className="text-hp-black">Typical cost:</strong> {spot.cost}
                  </p>
                  <p className="mt-2 text-heritage font-semibold text-xs">Open link</p>
                </a>
              ))}
            </div>
          </div>

          {/* Food guide */}
          <div className="card">
            <h2 className="text-xl font-black text-hp-black mb-2">Where to eat near campus</h2>
            <p className="text-sm text-hp-gray mb-6">
              A range of casual and full-service options for team meals. Spend ranges are typical pre-tax, pre-tip estimates.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-hp-gray">
              {[
                {
                  title: "Amba Cambridge",
                  cuisine: "East Mediterranean",
                  spend: "$18-$30 pp",
                  note: "Fast-casual format suitable for efficient team meals.",
                  href: "https://www.ambacambridge.com/",
                },
                {
                  title: "Pagu",
                  cuisine: "Japanese + Spanish fusion",
                  spend: "$30-$55 pp",
                  note: "Solid mid-range dinner with shareable plates.",
                  href: "https://guide.michelin.com/us/en/massachusetts/cambridge_2914793/restaurant/pagu",
                },
                {
                  title: "Little Donkey",
                  cuisine: "Global small plates",
                  spend: "$35-$60 pp",
                  note: "Great variety for mixed dietary needs.",
                  href: "https://www.littledonkeybos.com/",
                },
                {
                  title: "Oleana",
                  cuisine: "Eastern Mediterranean",
                  spend: "$60-$95 pp",
                  note: "Higher-end team dinner option; reserve early.",
                  href: "https://guide.michelin.com/en/massachusetts/cambridge_2914793/restaurant/oleana",
                },
                {
                  title: "Giacomo's Boston",
                  cuisine: "Italian",
                  spend: "$25-$45 pp",
                  note: "Popular for casual pasta and seafood dinners.",
                  href: "https://www.giacomosboston.com/",
                },
                {
                  title: "Banh Mi Ok",
                  cuisine: "Vietnamese (casual)",
                  spend: "$10-$18 pp",
                  note: "Good budget lunch option near transit routes.",
                  href: "https://www.yelp.com/biz/banh-mi-ok-boston",
                },
                {
                  title: "Tatte Bakery & Cafe",
                  cuisine: "Cafe / bakery",
                  spend: "$12-$25 pp",
                  note: "Reliable breakfast and coffee meeting spot.",
                  href: "https://tattebakery.com/",
                },
                {
                  title: "The Helmand",
                  cuisine: "Afghan",
                  spend: "$28-$50 pp",
                  note: "Distinct cuisine choice for a full team dinner.",
                  href: "https://www.helmandrestaurant.com/",
                },
              ].map((place) => (
                <a
                  key={place.title}
                  href={place.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-hp-border p-4 hover:border-heritage/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <p className="font-bold text-hp-black group-hover:text-heritage transition-colors">{place.title}</p>
                  <p className="mt-1"><strong className="text-hp-black">Cuisine:</strong> {place.cuisine}</p>
                  <p className="mt-1"><strong className="text-hp-black">Typical spend:</strong> {place.spend}</p>
                  <p className="mt-1">{place.note}</p>
                  <p className="mt-2 text-heritage font-semibold text-xs">Open link</p>
                </a>
              ))}
            </div>
          </div>

        </div>
      </SectionWrapper>
    </>
  );
}
