"use client"

import AboutContent from "@/components/about-content";
import AvatarAbout from "@/components/avatar-about";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";

const AboutMe = () => {

  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <AvatarAbout />
        <div className="flex flex-col items-center justify-center py-10 md:py-0 md:px-6">
          <h2 className="text-2xl leading-tight text-left md:text-center md:text-3xl">
            Welcome to my
            <span className="font-bold text-secondary"> Portfolio</span>
          </h2>
          <AboutContent />
        </div>
      </ContainerPage>
    </>
  );
}
 
export default AboutMe;
