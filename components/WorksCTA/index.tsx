"use client"
import React from 'react'
import Title from '@/components/Title';
import Objects from '@/components/Objects';
import BoxReveal from '@/components/BoxRevealAnimation';
import { SCREEN_SIZES } from '@/constants';
import useWindowSize from '@/hooks/useWindowSize';

const WorksCTA = () => {
  const { width } = useWindowSize()
  return (
    <div className='custom-wrapper'>
      <div className='flex items-center justify-between flex-col lg:flex-row'>
        <div className='lg:basis-[70%] basis-1 text-center lg:text-left pt-[5rem]'>
          <BoxReveal boxColor={"#23af6c"} duration={0.5}>
            <div className='w-full'>
              <Title
                text={<span>Work that I <br />have Completed</span>}
                size='large'
                as="h2"
              />
            </div>
          </BoxReveal>
        </div>
      </div>
    </div>
  )
}

export default WorksCTA