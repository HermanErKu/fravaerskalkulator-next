import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fraværskalkulator VGS",
  description: "Fraværskalkulator for elever i hele den Norske videregående skole. Laget av elever for elever.",
  openGraph: {
    title: "Fraværskalkulator VGS",
    description: "Fraværskalkulator for elever i hele den Norske videregående skole. Laget av elever for elever.",
    images: [
      {
        url: "/images/opengraph.png",
        width: 1280,
        height: 720,
        alt: "Fraværskalkulator Preview",
      },
    ],
    type: "website",
    locale: "no_NO",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
