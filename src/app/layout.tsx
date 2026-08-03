import type { Metadata } from "next";
import "./globals.css";
import "./hero-house.css";
import "./mobile-hero.css";

const SITE_URL = "https://primadidormire.eu";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Prima di Dormire — Storie per bambini",
  description:
    "Racconti brevi per bambini e per gli adulti che li ascoltano con loro. Una storia alla volta, per chiudere bene la giornata insieme.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Prima di Dormire",
    description:
      "Una storia alla volta, per chiudere bene la giornata insieme.",
    url: SITE_URL,
    siteName: "Prima di Dormire",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
