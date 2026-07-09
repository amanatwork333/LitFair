import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/links";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f5f5f0",
};

export const metadata: Metadata = {
  title: `${siteConfig.name} | Links`,
  description: siteConfig.bio,
  keywords: ["links", "linktree", "registration", "events"],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} | Links`,
    description: siteConfig.bio,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Links`,
    description: siteConfig.bio,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
