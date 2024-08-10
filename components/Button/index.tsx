import { cn } from '@/utils/cn';
import React from 'react'

type ButtonProps = {
  caption: string | any;
  className?: any;
  variant?: string;
}
const Button = ({ caption, className, variant }: ButtonProps) => {
  return (
    <button className={cn("w-full cursor-pointer px-[20px] py-[14px] rounded font-bold font-sora", variant, className)}>{caption}</button>
  )
}

export default Button