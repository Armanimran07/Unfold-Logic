import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
export const metadata: Metadata = {
  title: "Software Solutions Agency",
  description:
    "End-to-end software solutions from simple websites to enterprise systems. Quality work on accelerated timelines. we build first you pay after.!",
  icons: {
    icon: "/favicon.ico",
    apple: "/pexels-fauxels-3184465.jpg",
    other: [
      {
        rel: "icon",
        url: "/pexels-fauxels-3184465.jpg",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/pexels-fauxels-3184465.jpg",
        sizes: "16x16",
      },
    ],
  },
  themeColor: "#0f172a",
  openGraph: {
    title: "Software Solutions Agency",
    description:
      "End-to-end software solutions from simple websites to enterprise systems.",
    url: "https://software-solutions-agency.vercel.app/",
    siteName: "Software Solutions Agency",
    images: [
      {
        url: "https://software-solutions-agency.vercel.app/pexels-fauxels-3184465.jpg",
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
    images: [
      "https://software-solutions-agency.vercel.app/pexels-fauxels-3184465.jpg",
    ],
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
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
