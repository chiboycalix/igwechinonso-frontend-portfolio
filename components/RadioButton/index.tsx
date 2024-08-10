"use client";
import * as React from "react";
import { cn } from "@/utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

interface RadioOption {
  id: string;
  label: string;
  value: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  name: string;
  onChange: (value: string) => void;
  value: string;
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  name,
  onChange,
  value,
  className,
}) => {
  const radius = 100;
  const [hoveredId, setHoveredId] = React.useState<string | null>(null);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className={cn("flex flex-row items-center flex-wrap sm:flex-nowrap justify-between gap-2 w-full", className)}>
      {options.map((option) => (
        <motion.div
          key={option.id}
          style={{
            background: useMotionTemplate`
              radial-gradient(
                ${hoveredId === option.id ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
                var(--primary-900),
                transparent 80%
              )
            `,
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHoveredId(option.id)}
          onMouseLeave={() => setHoveredId(null)}
          className="p-[2px] rounded-lg transition duration-300 group/input border-2 w-full dark:border-0"
        >
          <label
            htmlFor={option.id}
            className={cn(
              "flex items-center space-x-3 bg-gray-50 rounded-md px-3 py-2 cursor-pointer",
              value === option.value ? "ring-2 ring-neutral-400" : ""
            )}
          >
            <input
              type="radio"
              id={option.id}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="form-radio h-5 w-5 text-primary-900 border-gray-300 focus:ring-primary-900 focus:ring-offset-0"
            />
            <span className="text-md text-black">{option.label}</span>
          </label>
        </motion.div>
      ))}
    </div>
  );
};

export { RadioGroup };