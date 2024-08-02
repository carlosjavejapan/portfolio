import Image from "next/image";
import MotionTransition from "./transition-component";

const AvatarSkills = () => {
  return (
    <MotionTransition position="bottom" className="bottom-0 z-0 left-0 hidden md:inline-block md:fixed">
      <Image priority={false} src="/images/services.png" width={300} height={300} className="w-[350px] h-full" alt="Avatar Skill" />
    </MotionTransition>
  );
}
 
export default AvatarSkills;