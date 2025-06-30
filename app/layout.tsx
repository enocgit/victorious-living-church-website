import type { Metadata } from "next";
import { Geist_Mono, Kumbh_Sans, Nunito } from "next/font/google";
import "./globals.css";
import "../styles/embla.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AOSProvider from "@/providers/aos-provider";
import { church } from "@/lib/content";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: church.title,
  description: church.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Vlcig" />
      </head>
      <body
        className={`${geistMono.variable} ${kumbhSans.variable} ${nunito.variable} flex min-h-screen flex-col antialiased`}
      >
        <AOSProvider />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
