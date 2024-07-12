import { Rectangle163, Polygon, Subtract } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Objects = () => {
  return (
    <div className='relative'>
      <div className='absolute top-[20px] left-[130px]'>
        <Image src={Polygon} alt='Polygon' className='w-[100px]' />
      </div>
      <div className='absolute -top-[100px] right-[50px]'>
        <Image src={Rectangle163} alt='Rectangle163' className='w-[100px]' />
      </div>
      <div className='absolute top-[20px] -right-[150px]'>
        <Image src={Subtract} alt='Subtract' className='w-[150px]' />
      </div>
    </div>
  )
}

export default Objects;