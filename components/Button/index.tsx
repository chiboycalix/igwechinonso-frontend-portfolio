import { cn } from '@/utils/cn';
import React from 'react'
import { motion } from 'framer-motion';

type ButtonProps = {
  caption: string | any;
  className?: any;
  variant?: string;
}
const Button = ({ caption, className, variant }: ButtonProps) => {
  return (
    <motion.button
      className={cn("w-full cursor-pointer bg-primary-500 hover:bg-primary-600 text-white font-bold text-sm px-[20px] py-[14px] rounded shadow-lg transition-all duration-300 font-sora", variant, className)}
      whileHover={{ scale: 1.05, boxShadow: "0 0 5px rgba(199, 158, 43, 1)" }}
      whileTap={{ scale: 0.95 }}
    >
      {caption}
    </motion.button>

  )
}

export default Button