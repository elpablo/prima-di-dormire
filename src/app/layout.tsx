import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://primadidormire.eu"),
  title: "Prima di Dormire — Storie per bambini",
  description:
    "Racconti brevi per bambini e per gli adulti che li ascoltano con loro. Una storia alla volta, per chiudere bene la giornata insieme.",
  openGraph: {
    title: "Prima di Dormire",
    description:
      "Una storia alla volta, per chiudere bene la giornata insieme.",
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
