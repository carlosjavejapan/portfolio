"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";

import { itemsNavbar } from "../../data";
import MotionTransition from "./transition-component";

const Navbar = () => {
  const pathname = usePathname() || "/";
  const activeIndex = itemsNavbar.findIndex(item => item.link === pathname);
  const [indicatorProps, setIndicatorProps] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const navElement = navRef.current;
    if (navElement) {
      const items = itemRefs.current;
      const activeItem = items[activeIndex];

      if (activeItem) {
        setIndicatorProps({
          left: activeItem.offsetLeft,
          width: activeItem.offsetWidth,
        });
      }
    }
  }, [activeIndex]);

  return (
    <MotionTransition
      className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-6"
      position="right"
    >
      <nav>
        <ul
          ref={navRef}
          className="relative flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-black/60 background-blur-sm md:rounded-full md:border md:border-white/30"
        >
          {itemsNavbar.map((item, index) => (
            <li
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              key={item.id}
              className="z-10 transition duration-150 rounded-full cursor-pointer hover:bg-secondary"
            >
              <Link
                className="relative block px-2 py-2 group"
                href={item.link}
                data-tooltip-id={`tooltip-${item.id}`}
                data-tooltip-content={item.title}
              >
                {item.icon}
                <Tooltip
                  id={`tooltip-${item.id}`}
                  place="top"
                  style={{
                    backgroundColor: "#fff",
                    fontSize: "11px",
                    color: "#333",
                    padding: "2px 5px",
                    boxShadow:
                      "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px",
                  }}
                />
              </Link>
            </li>
          ))}
          <motion.div
            className="absolute bottom-0 top-0 m-auto h-[41px] rounded-full bg-secondary"
            initial={false}
            style={{ width: indicatorProps.width, left: indicatorProps.left }}
            animate={{ left: indicatorProps.left }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </ul>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;
