import Image from "next/image";

const CircleIlluminated = () => {
  return (
    <div className="w-[200px] dm:w-[300px] bottom-0 -right-8 md:fixed mix-blend-color-dodge animate-pulse duration-75 hidden md:inline-block">
      <Image priority={false} src="/images/circles.png" width={260} height={260} alt="Circle" className="w-full h-full" />
    </div>
  );
}
 
export default CircleIlluminated;