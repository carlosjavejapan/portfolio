import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

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
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
