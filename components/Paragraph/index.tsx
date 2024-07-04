import React from 'react'
import { asType } from '@material-tailwind/react/types/components/typography';
import { Typography } from "@/components/MaterialTailwind";
import { cn } from '@/utils/cn';

type ParagraphProps = {
  text: React.ReactNode;
  size: "large" | "medium" | "small";
  className?: string;
  as: asType
}

const Paragraph = ({ text, size, className, as }: ParagraphProps) => {
  const large = size === "large" && "text-lg leading-lg";
  const medium = size === "medium" && "text-base leading-base"
  const small = size === "small" && "text-sm leading-sm"
  return (
    <Typography as={as} className={cn(`dark:text-white text-black font-medium`, large, medium, small, className)}>{text}</Typography>
  )
}

export default Paragraph