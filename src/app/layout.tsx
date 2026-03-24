import type { Metadata } from "next";
import { Figtree, Unna } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const unna = Unna({
  variable: "--font-unna",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Michael McKay | Portfolio",
  description: "Building the Future of Climate & Commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${unna.variable}`}>
      <body
        className="antialiased font-body bg-surface text-on-surface"
      >
        {children}
      </body>
    </html>
  );
}
