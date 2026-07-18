import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chemverse.in"),

  title: {
    default: "ChemVerse | Learn Chemistry Smarter",
    template: "%s | ChemVerse",
  },

  description:
    "ChemVerse is a modern Chemistry learning platform for CBSE Classes 9–12 with Notes, MCQs, PYQs, Chapter Tests, Worksheets and more.",

  keywords: [
    "Chemistry",
    "CBSE",
    "Class 9 Chemistry",
    "Class 10 Chemistry",
    "Class 11 Chemistry",
    "Class 12 Chemistry",
    "ChemVerse",
    "NCERT",
    "MCQs",
    "Notes",
    "Chapter Tests",
    "JEE",
    "NEET",
  ],

  authors: [
    {
      name: "ChemVerse",
    },
  ],

  creator: "ChemVerse",

  applicationName: "ChemVerse",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "ChemVerse",
    title: "ChemVerse | Learn Chemistry Smarter",
    description:
      "Complete Chemistry learning platform for CBSE students with Notes, MCQs, PYQs and Tests.",
  },

  twitter: {
    card: "summary_large_image",
    title: "ChemVerse",
    description:
      "Chemistry learning platform for CBSE Classes 9–12.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}