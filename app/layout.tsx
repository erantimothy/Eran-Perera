import type { Metadata } from "next";
import { JetBrains_Mono, Fraunces, DM_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
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

const title = "Eran Timothy Perera | Software Engineer";
const description =
  "Portfolio of Eran Timothy Perera — software engineering student and developer specializing in full-stack systems, DevOps, and AI-integrated applications.";
const url = "https://erantimothy.dev";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(url),
  keywords: [
    "Eran Timothy Perera",
    "software engineer",
    "full-stack developer",
    "Next.js",
    "TypeScript",
    "Spring Boot",
    "DevOps",
    "Sri Lanka",
    "portfolio",
  ],
  authors: [{ name: "Eran Timothy Perera", url }],
  creator: "Eran Timothy Perera",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: "Eran Timothy Perera",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@erantimothy",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <SpeedInsights />
      </body>
    </html>
  );
}
