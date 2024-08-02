import Image from "next/image";

const CircleImage = () => {
  return (
    <div className="bottom-0 right-0 hidden md:inline-block md:fixed mix-blend-color-dodge">
      <Image priority={false} src="/images/bg-explosion.png" width={500} height={500} alt="Circle" className="w-full h-full" />
    </div>
  );
}
 
export default CircleImage;