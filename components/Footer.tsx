import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-midnight text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 bg-white rounded-xl px-3 py-2">
              <Image
                src="/hult-logo-first-replacement-transparent.png"
                alt="Hult International Business School"
                width={240}
                height={138}
                className="h-6 sm:h-7 w-auto object-contain"
              />
              <span className="h-7 sm:h-8 w-px bg-hp-border mx-1" aria-hidden="true" />
              <Image
                src="/hult-prize-logo-tight.png"
                alt="Hult Prize"
                width={300}
                height={108}
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              {siteConfig.dates}
              <br />
              {siteConfig.location}
              <br />
              {siteConfig.address}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-heritage mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-heritage mb-4">
              Contact
            </h3>
            <p className="text-sm text-white/60 mb-3">
              Questions? Email us at:
            </p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-sm text-white font-semibold hover:text-heritage transition-colors"
            >
              {siteConfig.contactEmail}
            </a>
            <div className="mt-6 flex gap-4">
              <span className="text-xs text-white/40">
                #hultprize #hpnationals26
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Hult Prize Foundation. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Hult Prize Boston Nationals 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
