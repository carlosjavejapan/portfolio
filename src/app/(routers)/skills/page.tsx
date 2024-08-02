import AvatarSkills from "@/components/avatar-skills";
import CircleIlluminated from "@/components/circle-illuminated";
import SliderSkills from "@/components/slider-skills";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import Link from "next/link";

const Skills = () => {
  
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <CircleIlluminated />
        <AvatarSkills />
        <div className="relative z-10 grid md:tems-center gap-2 md:place-items-center h-[calc(100vh-240px)] max-w-full md:gap-6 mx-auto md:grid-cols-2 md:px-0">
          <div className="md:max-w-[450px] pt-10 md:py-0">
            <h2 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
              Mis{" "}
              <span className="font-bold text-secondary">Skill</span>
            </h2>
            <p className="mt-5 md:mt-0 mb-3 text-base text-light-gray">私はユーザビリティとデザインを大切にするWebデザイナーで、使いやすいUI/UXデザインを作成します。ReactやTypeScriptでモダンなウェブアプリを開発し、HTML、CSS、JavaScriptで高品質なフロントエンドを実装し、レスポンシブデザインにもこだわります。これから、リーダーシップ、マネジメント、ディレクション、WEBマーケティングを学んで、さらに成長したいと考えています。</p>
            <Link
              href="/contact-me"
              className="w-fit block transition-all px-2 py-2 font-extralight text-sm bg-indigo-500 text-light-gray rounded-md shadow-sm hover:bg-indigo-700"
            >
              Contact Me
            </Link>
          </div>
          <SliderSkills />
        </div>
      </ContainerPage>
    </>
  );
}
 
export default Skills;
