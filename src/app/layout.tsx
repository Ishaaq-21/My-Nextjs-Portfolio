import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/organism/Header/Header";
import Footer from "@/components/organism/Footer/Footer";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
});
export const metadata: Metadata = {
  title: "Isaaq Portfolio",
  description:
    "Creative frontend developer passionate about building smart, responsive, and user-focused web experiences. Specializing in React, TypeScript, Next.js, and modern web technologies.",
  keywords: [
    "Frontend Developer",
    "Software Engineer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Web Development",
    "JavaScript",
    "Tailwind CSS",
    "Responsive Design",
    "UI/UX",
    "Isaaq Hk",
    "Portfolio",
  ],
  authors: [{ name: "Isaaq Hk" }],
  creator: "Isaaq Hk",
  publisher: "Isaaq Hk",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://isaaq-hk.is-a.dev/",
    siteName: "Isaaq Hk Portfolio",
    title: "Isaaq Portfolio",
    description:
      "Creative frontend developer passionate about building smart, responsive, and user-focused web experiences.",
    images: [
      {
        url: "/MyPic.png",
        width: 1200,
        height: 630,
        alt: "Isaaq Hk - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaaq Hk - Frontend Developer & Software Engineer",
    description:
      "Creative frontend developer passionate about building smart, responsive, and user-focused web experiences.",
    images: ["/MyPic.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://isaaq-hk.is-a.dev/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />

        <meta name="theme-color" content="#f59e0b" />
      </head>
      <body className={`${jetbrainsMono.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
