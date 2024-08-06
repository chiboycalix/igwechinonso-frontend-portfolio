"use client"
import React from 'react'
import Title from '@/components/Title';

const WorksCTA = () => {
  return (
    <div className='custom-wrapper'>
      <div className='flex items-center justify-between flex-col lg:flex-row'>
        <div className='lg:basis-[70%] basis-1 text-center lg:text-left pt-[5rem]'>
          <div className='w-full'>
            <Title
              text={<span><span className='text-primary-500'>Work</span> that I <br />have Completed</span>}
              size='large'
              as="h2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorksCTA