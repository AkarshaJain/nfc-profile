import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { profile } from "@/lib/profile";
import { absolutePublicUrl } from "@/lib/public-path";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

function baseUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  try {
    return new URL(raw);
  } catch {
    return new URL("http://localhost:3000");
  }
}

export const metadata: Metadata = {
  metadataBase: baseUrl(),
  title: {
    default: `${profile.fullName} — ${profile.headline}`,
    template: `%s | ${profile.fullName}`,
  },
  description: `${profile.bioLead} ${profile.valueProposition}`,
  keywords: [
    profile.fullName,
    "software engineer",
    "machine learning",
    "full-stack",
    "USC",
    "contact",
  ],
  authors: [{ name: profile.fullName, url: profile.linkedin }],
  openGraph: {
    title: `${profile.fullName} — ${profile.headline}`,
    description: profile.valueProposition,
    type: "website",
    locale: "en_US",
    siteName: profile.fullName,
    url: "./",
    images: [
      {
        url: absolutePublicUrl(profile.photoUrl),
        width: 512,
        height: 512,
        alt: profile.photoAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.fullName}`,
    description: profile.valueProposition,
    images: [absolutePublicUrl(profile.photoUrl)],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "./" },
  appleWebApp: {
    capable: true,
    title: profile.fullName,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${display.variable} min-h-dvh bg-ink-50 font-sans dark:bg-ink-950`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
