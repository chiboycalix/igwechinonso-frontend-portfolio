import { cn } from '@/utils/cn';
import Image from 'next/image'
import React from 'react'

type ImageHoverProps = {
  src: any;
  className?: any;
  rounded?: any;
}

const ImageHover = ({ src, rounded, className }: ImageHoverProps) => {
  return (
    <div className={cn("mx-auto cursor-pointer")}>
      <div className={cn("relative overflow-hidden", rounded)}>
        <Image src={src} alt={src} className={cn('transform transition duration-500 hover:scale-110 w-full', className, rounded)} />
      </div>
    </div>
  )
}

export default ImageHover