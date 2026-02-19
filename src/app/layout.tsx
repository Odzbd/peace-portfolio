import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Peace | Computer Science Portfolio",
  description: "Computer Science Portfolio of Peace, showcasing high-impact projects in AI, Finance, and Software Engineering.",
  keywords: ["Computer Science", "Portfolio", "Software Engineer", "AI", "LLM", "FinTech", "Next.js", "React"],
  authors: [{ name: "Peace" }],
  openGraph: {
    title: "Peace | Computer Science Portfolio",
    description: "Engineering high-impact solutions in AI, Finance, and Software Development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peace | Computer Science Portfolio",
    description: "Engineering high-impact solutions in AI, Finance, and Software Development.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
