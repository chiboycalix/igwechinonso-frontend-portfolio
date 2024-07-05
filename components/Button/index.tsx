import { cn } from '@/utils/cn';
import React from 'react'

type ButtonProps = {
  caption: string;
  className?: any;
  variant: string;
}
const Button = ({ caption, className, variant }: ButtonProps) => {
  return (
    <button className={cn("w-full cursor-pointer", variant, className)}>{caption}</button>
  )
}

export default Button