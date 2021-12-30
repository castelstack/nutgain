import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const rightVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 500 },
};
const dark = {
  visible: {
    opacity: 1,
    background: "rgba(4, 14, 24, 1)",
    color: "#fff",
    borderRadius: '10px',
    transition: {
      duration: 1,
      delay: 1,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
  hidden: {
    opacity: 1,
    background: "#fff",
    color: "black",
    transition: {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
  exit: {
    opacity: 1,
    background: "#fff",
    color: "black",
    transition: {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};
const leftVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -500 },
};
const bottomVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0.5 },
};



export const Dark = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      variants={dark}
      // exit={exit}
      // className="bg-dark-800"
    >
      {children}
    </motion.div>
  );
};
export const ScrollInRight = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      variants={rightVariants}
      className='square'
    >
      {children}
    </motion.div>
  );
};

export const ScrollInLeft = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      variants={leftVariants}
      className='square'
    >
      {children}
    </motion.div>
  );
};

export const ScrollBottom = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      variants={bottomVariants}
      className='square'
    >
      {children}
    </motion.div>
  );
};
