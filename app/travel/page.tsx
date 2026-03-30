import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Travel + Stay",
  description:
    "Travel, transit, and first-time visitor guidance for Hult Prize Nationals at Hult Boston 2026.",
};

export default function TravelPage() {
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
      note: "Reliable business-travel setup with easy rideshare and transit access.",
    },
    {
      name: "Hampton Inn by Hilton Boston/Cambridge",
      walkTime: "10-14 min walk",
      location: "191 Monsignor O'Brien Hwy, Cambridge",
      website:
        "https://www.hilton.com/en/hotels/boscmhx-hampton-boston-cambridge/",
      note: "Strong value pick for teams balancing convenience and comfort.",
    },
    {
      name: "The Royal Sonesta Boston",
      walkTime: "12-15 min walk",
      location: "40 Edwin H Land Blvd, Cambridge",
      website: "https://www.sonesta.com/royal-sonesta/ma/cambridge/royal-sonesta-boston",
      note: "Premium riverfront option suitable for judges, guests, and faculty.",
    },
  ];

  return (
    <>
      <PageHero
        accent="Getting Here"
        title="Travel + Stay"
        subtitle="Everything you need to plan your trip to Cambridge, MA for Hult Prize Nationals."
      />

      <SectionWrapper>
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Campus Accommodation */}
          <div className="card">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h2 className="text-xl font-black text-hp-black">
                  Campus Accommodation
                </h2>
                <p className="text-sm text-hp-gray mt-0.5">
                  On-campus housing at Hult Boston
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-hp-border bg-gradient-to-br from-hp-off-white to-white p-6 sm:p-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-hp-gray">
                <div className="rounded-xl bg-white border border-hp-border p-4">
                  <p className="font-bold text-hp-black">Who this is for</p>
                  <p className="mt-2">
                    Teams looking for the shortest commute and simple day-of logistics.
                  </p>
                </div>
                <div className="rounded-xl bg-white border border-hp-border p-4">
                  <p className="font-bold text-hp-black">Why it is convenient</p>
                  <p className="mt-2">
                    On-campus stay keeps you close to check-in, rooms, and event support staff.
                  </p>
                </div>
              </div>
              <ul className="mt-5 space-y-2.5 text-sm text-hp-gray">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-heritage shrink-0" aria-hidden="true" />
                  Space is limited and assigned on availability.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-heritage shrink-0" aria-hidden="true" />
                  Shared-room and check-in details will be confirmed directly with registered teams.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-heritage shrink-0" aria-hidden="true" />
                  For availability requests, contact{" "}
                  <a className="text-heritage font-semibold hover:underline" href="mailto:hulthouse.frontdesk@hult.edu">
                    hulthouse.frontdesk@hult.edu
                  </a>
                  .
                </li>
              </ul>
            </div>
          </div>

          {/* Hotels */}
          <div className="card">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h2 className="text-xl font-black text-hp-black">Hotels</h2>
                <p className="text-sm text-hp-gray mt-0.5">
                  Hotels within about a 15-minute walk from campus
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-hp-border bg-hp-off-white/70 p-4 sm:p-5 mb-5">
              <p className="text-sm text-hp-gray leading-relaxed">
                Room rates are fluid and can change quickly based on demand, events, and booking timing.
                We strongly recommend booking in advance to secure better availability and pricing.
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
                    Visit hotel website &rarr;
                  </a>
                </article>
              ))}
            </div>
          </div>

          {/* Getting There — Transit */}
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
                    Open in Google Maps &rarr;
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
                    Give yourself 10-20 minutes from station exit to check-in desk depending on walking pace and weekend service.
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
                    Paid garages are accessible within a 10-minute walk. We
                    strongly recommend public transit over driving.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Airport info */}
          <div className="card gradient-midnight text-white border-0">
            <h2 className="text-lg font-black mb-5">Flying In?</h2>
            <div className="grid grid-cols-1 gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <p className="font-bold mb-1">Boston Logan (BOS)</p>
                <p className="text-white/60 font-light">
                  Primary airport for all participants. Approx.{" "}
                  <strong className="text-white">15-20 minutes</strong> by car to campus
                  in typical traffic.
                </p>
              </div>
            </div>
            <p className="text-xs text-white/40 mt-5">
              * Travel times are estimates and may vary with traffic.
            </p>
          </div>

          {/* Boston guide */}
          <div className="card">
            <h2 className="text-xl font-black text-hp-black mb-2">
              First time in Boston? Here are easy options
            </h2>
            <p className="text-sm text-hp-gray mb-6">
              Built from current public pricing and local recommendations. Costs are approximate per person.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-hp-gray">
              {[
                {
                  title: "Freedom Trail (self-guided or guided)",
                  desc: "Quick way to see central Boston history in one route.",
                  cost: "Free to walk, guided tours usually $17-$20.",
                  href: "https://www.thefreedomtrail.org/",
                },
                {
                  title: "New England Aquarium",
                  desc: "Good indoor option for teams with limited time.",
                  cost: "Adult admission is usually around $40.",
                  href: "https://www.neaq.org/visit/tickets/buy-tickets-online/",
                },
                {
                  title: "Boston Tea Party Ships & Museum",
                  desc: "Interactive and easy to pair with a Seaport visit.",
                  cost: "General admission is usually around $35.",
                  href: "https://www.bostonteapartyship.com/",
                },
                {
                  title: "Museum of Science",
                  desc: "Hands-on exhibits and easy public transit access.",
                  cost: "Most general tickets are usually in the $30-$35 range.",
                  href: "https://www.mos.org/",
                },
                {
                  title: "Fenway Park Tour",
                  desc: "Great if your team wants a classic Boston stop.",
                  cost: "Tours often start around $25-$35.",
                  href: "https://www.mlb.com/redsox/ballpark/tours",
                },
                {
                  title: "Charles River Esplanade + Boston Common",
                  desc: "Best low-cost option for walks, photos, or reset time.",
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
                  <p className="mt-2 text-heritage font-semibold text-xs">Open link &rarr;</p>
                </a>
              ))}
            </div>
          </div>

          {/* Food guide */}
          <div className="card">
            <h2 className="text-xl font-black text-hp-black mb-2">Where to eat near campus</h2>
            <p className="text-sm text-hp-gray mb-6">
              Mix of quick, moderate, and nicer team-dinner spots. Spend ranges are typical pre-tax, pre-tip.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-hp-gray">
              {[
                {
                  title: "Amba Cambridge",
                  cuisine: "East Mediterranean",
                  spend: "$18-$30 pp",
                  note: "Fast-casual and ideal for quick team meals.",
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
                  cuisine: "Vietnamese (quick bite)",
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
                  <p className="mt-2 text-heritage font-semibold text-xs">Open link &rarr;</p>
                </a>
              ))}
            </div>
          </div>

        </div>
      </SectionWrapper>
    </>
  );
}
