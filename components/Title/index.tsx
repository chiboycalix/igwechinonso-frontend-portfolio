import React from 'react'
import { asType } from '@material-tailwind/react/types/components/typography';
import { Typography } from "@/components/MaterialTailwind";
import { cn } from '@/utils/cn';

type TitleProps = {
  text: React.ReactNode;
  size: "large" | "medium" | "small";
  as: asType;
  className?: string;
}

const Title = ({ text, size, as, className }: TitleProps) => {
  const large = size === "large" && `4xl:text-5xl 4xl:leading-4xl 
                                     3xl:text-4xl 3xl:leading-3xl  
                                     2xl:text-2xl 2xl:leading-2xl
                                     xl:text-xl xl:leading-xl
                                     text-lg leading-lg`;
  const medium = size === "medium" && `3xl:text-4xl 3xl:leading-3xl  
                                       2xl:text-2xl 2xl:leading-2xl
                                       xl:text-xl xl:leading-xl
                                       text-lg leading-lg`;
  const small = size === "small" && `2xl:text-2xl 2xl:leading-2xl
                                       xl:text-xl xl:leading-xl
                                       text-lg leading-lg`;
  return (
    <Typography as={as} className={cn(`font-black`, large, medium, small, className)}>
      {text}
    </Typography>
  )
}

export default Title