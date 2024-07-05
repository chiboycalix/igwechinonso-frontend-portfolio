import React from 'react'
import Title from '@/components/Title';

const WorksCTA = () => {
  return (
    <div className='custom-wrapper mt-[5rem]'>
      <div className='flex items-center justify-between flex-col lg:flex-row'>
        <div className='basis-1/2 text-center lg:text-left'>
          <Title
            text="Skilled in Frontend Development, Enthusiastic About Building Seamless Digital Experiences."
            size='large'
            as="h2"
          />
        </div>
        <div className='flex-1'>

        </div>
      </div>
    </div>
  )
}

export default WorksCTA