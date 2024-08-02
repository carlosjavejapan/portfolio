"use client"

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import CoverParticle from "./cover-particle";
import CircleShape from "./circle-shape";

const Introduction = () => {

  return (
    <div className="z-20 w-full md:h-screen bg-darkBG/50">
        <CoverParticle />
      <div className="relative z-20 grid items-center gap-2 place-items-center h-full p-6 py-32 md:py-0 md:grid-cols-2">
        <div className="relative">
          <div className="relative border border-transparent p-2 rounded-[50%] inline-block overflow-hidden w-full md:w-[400px] md:h-[400px]">
            <Image
              src="/images/carlos-jave.png"
              priority={true}
              width="500"
              height="500"
              alt="Introduction Pic"
              className="md:mt-auto"
            />
          </div>
          <CircleShape />

        </div>
        <div className="flex flex-col justify-center max-w-lg md:mr-auto">
          <h2 className="mb-5 text-xl md:text-2xl leading-tight text-center md:text-left">
            ポートフォリオへようこそ、私は
            <TypeAnimation
              sequence={[
                "カルロス ハベです",
                2000,
                "クリエイティブなフロントエンドエンジニア",
                2000,
                "ユーザー中心のUI/UXデザイナー",
                2000,
                "インタラクティブなWebデザイナー",
                2000,
                "デザインとテクノロジーの融合者",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block font-bold text-secondary"
            />
          </h2>
          <p className="mx-auto mb-2 text-sm md:mx-0 md:mb-8">
            私はフロントエンドエンジニアであり、UI/UXデザイナーです。ウェブデザイナーとしてキャリアをスタートしました。ポートフォリオには、最新技術を使ったプロジェクトやデザインが含まれています。
          </p>
          <div className="flex items-center justify-center gap-2 md:justify-start md:gap-4">
            <Link
              href="/portfolio"
              className="w-fit transition-all px-4 py-2 font-extralight text-sm bg-indigo-500 text-light-gray rounded-md shadow-sm hover:bg-indigo-700"
            >
              My Works
            </Link>
            <Link
              href="/contact-me"
              className="w-fit transition-all px-4 py-2 font-extralight text-sm bg-indigo-500 text-light-gray rounded-md shadow-sm hover:bg-indigo-700"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Introduction;