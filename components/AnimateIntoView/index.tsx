"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Direction = {
  Left: "left",
  Right: "right",
  Top: "top",
  Bottom: "bottom",
}

type AnimateIntoViewProps = {
  children: React.ReactNode;
  from: "left" | "right" | "top" | "bottom";
  duration: number;
  threshold?: number;
}

const AnimateIntoView = ({ children, from, duration, threshold = 0.1 }: AnimateIntoViewProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, x: 0, y: 0 },
    hidden: (() => {
      switch (from) {
        case Direction.Left:
          return { opacity: 0, x: -50, y: 0 };
        case Direction.Right:
          return { opacity: 0, x: 50, y: 0 };
        case Direction.Top:
          return { opacity: 0, x: 0, y: -50 };
        case Direction.Bottom:
          return { opacity: 0, x: 0, y: 50 };
        default:
          return { opacity: 0, x: 0, y: 0 };
      }
    })(),
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      transition={{ duration }}
      variants={variants}
    // style={{ display: 'contents' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateIntoView;
