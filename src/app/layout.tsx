import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import { GoogleTagManager } from '@next/third-parties/google';

import Navbar from "@/components/navbar";
import Header from "@/components/header";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Carlos Jave",
  description: "Carlos Javeのポートフォリオへようこそ。私はウェブ開発者、フロントエンドエンジニア、UI/UXデザイナーです。最新のプロジェクトとデザインをご覧ください。",
  keywords: "Carlos Jave, ウェブ開発, フロントエンド, UI/UXデザイン, ポートフォリオ"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-52KLGH2F"
            height="0"
            width="0"
            style={{display:'none',visibility:'hidden'}}
          ></iframe>
        </noscript>
        <Navbar />
        <Header />
        {children}
      </body>
      <GoogleAnalytics gaId="G-J89SXYHG3B" />
      <GoogleTagManager gtmId="GTM-52KLGH2F" />
    </html>
  );
}
