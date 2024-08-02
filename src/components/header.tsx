import Link from "next/link";
import MotionTransition from "./transition-component";
import { socialNetworks } from "../../data";

const Header = () => {
  return (
    <MotionTransition
      className="absolute z-40 inline-block w-full top-5 md:top-4"
      position="bottom"
    >
      <header>
        <div className="container justify-between max-w-6xl px-10 mx-auto md:flex">
          <Link href="/">
            <h1 className="my-3 text-4xl font-bold text-center md:text-left">
              Carlos
              <span className="font-extralight"> Jave</span>
              <span className="text-secondary font-extralight">_</span>
            </h1>
          </Link>
          <ul className="flex items-center justify-center gap-7">
            {socialNetworks.map((item) => (
              <li key={item.id}>
                <Link className="hover:text-secondary transition-all" href={item.src}>{item.logo}</Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </MotionTransition>
  );
}
 
export default Header;
