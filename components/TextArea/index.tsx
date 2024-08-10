"use client";
import * as React from "react";
import { cn } from "@/utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    const radius = 100;
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--primary-500),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input border-2 dark:border-0"
      >
        <textarea
          className={cn(
            `flex w-full border-none bg-gray-50 dark:bg-[#0F151B] text-black dark:text-gray-300 shadow-input rounded-md px-3 py-2 text-md file:border-0 file:bg-transparent 
          file:text-sm file:font-medium 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-primary-500
           disabled:cursor-not-allowed disabled:opacity-50
           group-hover/input:shadow-none transition duration-400
           `,
            className
          )}
          ref={ref}
          rows={5}
          {...props}
        ></textarea>

      </motion.div>
    );
  }
);
TextArea.displayName = "TextArea";

export { TextArea };
