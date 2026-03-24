import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hultprize-nationals-boston.com"),
  title: {
    default: "Hult Prize Nationals | Hult Boston 2026",
    template: "%s | Hult Prize Nationals Boston",
  },
  description:
    "Hult Prize Nationals at Hult Boston on May 1-2, 2026. The participant hub for schedule, submissions, FAQs, and travel information.",
  keywords: [
    "Hult Prize",
    "Nationals",
    "Boston",
    "2026",
    "social entrepreneurship",
    "pitch competition",
  ],
  openGraph: {
    title: "Hult Prize Nationals | Hult Boston 2026",
    description:
      "May 1-2, 2026 · 1 Education St, Cambridge, MA. Your participant hub for Hult Prize Nationals.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hult Prize Nationals | Hult Boston 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hult Prize Nationals | Hult Boston 2026",
    description: "May 1-2, 2026 · Cambridge, MA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
