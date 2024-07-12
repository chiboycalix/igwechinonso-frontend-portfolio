import React from 'react'
import Title from '@/components/Title';
import AnimateIntoView from '@/components/AnimateIntoView';
import Objects from '@/components/Objects';

const WorksCTA = () => {
  return (
    <div className='custom-wrapper'>
      <div className='flex items-center justify-between flex-col lg:flex-row'>
        <div className='basis-[70%] text-center lg:text-left pt-[5rem]'>
          <div className='w-[80%]'>
            <AnimateIntoView from='left' duration={0.6}>
              <Title
                text="Work that I have Completed"
                size='large'
                as="h2"
                className='2xl:text-[64px] 2xl:leading-[79px]'
              />
            </AnimateIntoView>
          </div>
        </div>
        <div className='flex-1 pt-[0rem]'>
          <Objects />
        </div>
      </div>
    </div>
  )
}

export default WorksCTA