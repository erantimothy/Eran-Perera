import type { Metadata } from "next";
import { JetBrains_Mono, Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Eran Timothy Perera | Software Engineer",
  description:
    "Portfolio of Eran Timothy Perera — software engineering student and developer specializing in full-stack systems, DevOps, and AI-integrated applications.",
  metadataBase: new URL("https://erantimothy.dev"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: "https://erantimothy.dev",
    title: "Eran Timothy Perera | Software Engineer",
    description:
      "Portfolio of Eran Timothy Perera — software engineering student and developer specializing in full-stack systems, DevOps, and AI-integrated applications.",
    siteName: "Eran Timothy Perera",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eran Timothy Perera | Software Engineer",
    description:
      "Portfolio of Eran Timothy Perera — software engineering student and developer specializing in full-stack systems, DevOps, and AI-integrated applications.",
  },
  alternates: {
    canonical: "https://erantimothy.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jetbrainsMono.variable} ${fraunces.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
