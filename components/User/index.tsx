import { Layer, Polygon, Rectangle, Rectangle163, Subtract } from '@/constants'
import Image from 'next/image'
import React from 'react'
import AnimateIntoView from '@/components/AnimateIntoView';
import RotatingIntoView from '@/components/RotateIntoView';

const User = () => {
  const rectangle163Rotation = {
    left: { initial: { rotate: 0 }, animate: { rotate: 0, } },
    right: { initial: { rotate: 50, x: 150, y: 50 }, animate: { rotate: 0, x: 0, y: 0 } },
    top: { initial: { rotate: 0 }, animate: { rotate: 0 } },
    bottom: { initial: { rotate: 0 }, animate: { rotate: 0 } },
  };
  const rectangleRotation = {
    left: { initial: { rotate: 0 }, animate: { rotate: 0, } },
    right: { initial: { rotate: 50, x: 150, y: -50 }, animate: { rotate: 0, x: 0, y: 0 } },
    top: { initial: { rotate: 0 }, animate: { rotate: 0 } },
    bottom: { initial: { rotate: 0 }, animate: { rotate: 0 } },
  };

  const subtractRotation = {
    left: { initial: { rotate: 0 }, animate: { rotate: 0, } },
    right: { initial: { rotate: 50, x: 10, y: 50 }, animate: { rotate: 0, x: 0, y: 0 } },
    top: { initial: { rotate: 0 }, animate: { rotate: 0 } },
    bottom: { initial: { rotate: 0 }, animate: { rotate: 0 } },
  };

  return (
    <div className='relative w-full h-screen mx-auto text-center'>
      <div className='absolute top-0 left-0'>
        <RotatingIntoView from='right' duration={0.6} rotations={subtractRotation}>
          <Image src={Subtract} alt='Subtract' />
        </RotatingIntoView>
      </div>
      <AnimateIntoView from='bottom' duration={0.6}>
        <div className='w-[400px] h-[400px] rounded-full bg-hue-700 absolute top-[200px] left-[100px] overflow-bottom-hidden'>
          <Image src={Layer} alt="layer" className='absolute -top-[185px] h-[585px] rounded-b-full' />
        </div>
      </AnimateIntoView>
      <div className='absolute top-[100px] right-0'>
        <RotatingIntoView from='right' duration={0.6} rotations={rectangleRotation}>
          <Image src={Rectangle} alt="Rectangle" />
        </RotatingIntoView>
      </div>
      <div className='absolute z-50 right-[80px] top-[500px]'>
        <RotatingIntoView from='right' duration={0.6} rotations={rectangle163Rotation}>
          <Image src={Rectangle163} alt="Rectangle163" />
        </RotatingIntoView>
      </div>

    </div>
  )
}

export default User