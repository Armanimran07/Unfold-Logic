import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
export const metadata: Metadata = {
  title: "Software Solutions Agency",
  description:
    "End-to-end software solutions from simple websites to enterprise systems.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
      },
    ],
  },
  themeColor: "#0f172a",
  openGraph: {
    title: "Software Solutions Agency",
    description:
      "End-to-end software solutions from simple websites to enterprise systems.",
    url: "https://sofware-solutions.vercel.app/",
    siteName: "Software Solutions Agency",
    images: [
      {
        url: "https://sofware-solutions.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Software Solutions Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Solutions Agency",
    description:
      "End-to-end software solutions from simple websites to enterprise systems.",
    images: ["https://sofware-solutions.vercel.app/og-image.png"],
    creator: "@your_twitter_handle",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: false,
    noimageindex: false,
    nosnippet: false,
  },
  alternates: {
    canonical: "https://sofware-solutions.vercel.app/",
    types: {
      "application/rss+xml": "/feed.xml",
      "application/atom+xml": "/feed.atom",
    },
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
