import type { Metadata } from "next";
import { Geist_Mono, Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--app-font-sans",
  subsets: ["latin", "vietnamese"],
});

const geistMono = Geist_Mono({
  variable: "--app-font-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--app-font-display",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Vin Tech",
  description: "Vin Tech - Your Ultimate Car Accessory Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
