import Image from "next/image";

const BulbIlluminated = () => {
  return (
    <div className="w-[200px] dm:w-[300px] -bottom-12 -right-28 md:fixed mix-blend-color-dodge animate-pulse duration-75 hidden md:inline-block">
      <Image priority={false} src="/images/bulb.png" width={260} height={260} alt="Circle" className="w-full h-full" />
    </div>
  );
}
 
export default BulbIlluminated;