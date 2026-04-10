import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SpendSync — Free Expense Tracker & Bill Splitting App with UPI | India",
  description:
    "Track personal expenses, split group bills, and settle via UPI in one tap — all free. SpendSync is India's all-in-one expense tracker and bill splitter. No app store needed.",
  keywords:
    "expense tracker India, personal finance tracker, split bills with friends, bill splitting app UPI, group expense manager, splitwise alternative India, free expense tracker app",
  openGraph: {
    title: "SpendSync — Free Expense Tracker & Bill Splitter for India",
    description:
      "Track your personal expenses and split group bills with UPI settle — all in one free app. No Play Store needed. Built for Indians.",
    url: "https://spendsync.in",
    type: "website",
    images: [{ url: "https://app.spendsync.in/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpendSync — Split bills smarter with UPI",
    description:
      "India's free group expense splitter with UPI settle & personal finance tracking.",
    images: ["https://app.spendsync.in/og-image.png"],
  },
  alternates: {
    canonical: "https://spendsync.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
