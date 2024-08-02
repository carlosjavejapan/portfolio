import { motion } from "framer-motion";

export const transitionVariantsPage = {
  initial: {
    x: "100%",
    width: "100%"
  },
  animate: {
    x: "0%",
    width: "0%"
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  }
}


// export const Transition = () => {
//   return (

//       <>
//         <motion.div
//           className="fixed top-0 bottom-0 right-full w-screen z-30 bg-[#2e2257]"
//           variants={transitionVariantsPage}
//           initial="initial"
//           animate="animate"
//           exit="exit"
//           transition={{delay: 0.2, duration: 0.6, ease: "easeInOut"}}
//         ></motion.div>
//         <motion.div
//           className="fixed top-0 bottom-0 right-full w-screen z-20 bg-[#c03833]"
//           variants={transitionVariantsPage}
//           initial="initial"
//           animate="animate"
//           exit="exit"
//           transition={{delay: 0.4, duration: 0.6, ease: "easeInOut"}}
//         ></motion.div>
//         <motion.div
//           className="fixed top-0 bottom-0 right-full w-screen z-10 bg-[#e48a35]"
//           variants={transitionVariantsPage}
//           initial="initial"
//           animate="animate"
//           exit="exit"
//           transition={{delay: 0.6, duration: 0.6, ease: "easeInOut"}}
//         ></motion.div>
//       </>

//   );
// }

export const fadeIn = (position: string) => {
  return {
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    },
    hidden: {
      y: position === 'bottom' ? -100 : 0,
      x: position === 'right' ? 100 : 0,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  }
}