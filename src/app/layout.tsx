import type {Metadata} from "next";
import {IBM_Plex_Sans} from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
 subsets: ["latin", "cyrillic"],
 weight: ["100", "200", "300", "400", "500", "600", "700"],
 variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
 title: "Trade Blade",
 description: "Trade Blade",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body className={`${ibmPlexSans.variable} `}>{children}</body>
  </html>
 );
}
