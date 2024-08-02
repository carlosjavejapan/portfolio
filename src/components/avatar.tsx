"use client"

import Image from "next/image";
import MotionTransition from "./transition-component";

const Avatar = () => {
  return (
    <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:fixed">
      <Image priority={false} src="/images/avatar-1.png" width={300} height={300} className="w-full h-full" alt="Avata1" />
    </MotionTransition>
  );
}
 
export default Avatar;