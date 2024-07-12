import { cn } from '@/utils/cn';
import Image from 'next/image'
import React from 'react'

type ImageHoverProps = {
  src: any;
}

const ImageHover = ({ src }: ImageHoverProps) => {
  return (
    <div className={cn("mx-auto cursor-pointer")}>
      <div className="relative overflow-hidden rounded-2xl">
        <Image src={src} alt="blog image" className='rounded-2xl transform transition duration-500 hover:scale-110 w-full' />
      </div>
    </div>
  )
}

export default ImageHover