"use client"

import { usePathname } from 'next/navigation';
import { transitionVariantsPage } from "../../utils/motion-transitions";
import { AnimatePresence, motion } from "framer-motion";

const TransitionPage = () => {
  const router = usePathname();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div key={router} className="h-full">
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen z-30 bg-[#2e2257]"
          variants={transitionVariantsPage}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{delay: 0.2, duration: 0.6, ease: "easeInOut"}}
        ></motion.div>
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen z-20 bg-[#F13024]/10"
          variants={transitionVariantsPage}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{delay: 0.4, duration: 0.6, ease: "easeInOut"}}
        ></motion.div>
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen z-10 bg-[#000000]/60"
          variants={transitionVariantsPage}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{delay: 0.6, duration: 0.6, ease: "easeInOut"}}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
 
export default TransitionPage;