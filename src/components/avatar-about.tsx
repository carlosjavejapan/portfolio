"use client"

import Image from "next/image";
import MotionTransition from "./transition-component";

const AvatarAbout = () => {
  return (
    <MotionTransition position="bottom" className="bottom-0 hidden md:inline-block md:fixed -right-48">
      <Image
          src="/images/carlos-jave.png"
          priority
          width="350"
          height="350"
          alt="Introduction Pic"
          className="md:mt-auto"
        />
    </MotionTransition>
  );
}
 
export default AvatarAbout;