"use client";
import { motion } from 'framer-motion';

type RotatingIntoViewProps = {
  children: React.ReactNode;
  from: "left" | "right" | "top" | "bottom";
  duration: number;
  rotations: {
    left: { initial: { rotate: number }, animate: { rotate: number } },
    right: { initial: { rotate: number, x: number; y: number }, animate: { rotate: number, x: number, y: number } },
    top: { initial: { rotate: number }, animate: { rotate: number } },
    bottom: { initial: { rotate: number }, animate: { rotate: number } },
  }
}
const RotatingIntoView = ({ from = 'left', duration = 1, children, rotations }: RotatingIntoViewProps) => {

  const rotation = rotations[from] || rotations.left;

  return (
    <motion.div
      initial={rotation.initial}
      animate={rotation.animate}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

export default RotatingIntoView;
