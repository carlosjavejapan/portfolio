import Image from "next/image";

const CircleShape = () => {
  return (
    <div className="scale-110 w-full dm:w-[500px] top-0 left-0 absolute mix-blend-color-dodge animate-pulse duration-75">
      <Image priority={true} src="/images/circle-shape.png" width={600} height={600} alt="Circle" className="w-full h-full" />
    </div>
  );
}
 
export default CircleShape;