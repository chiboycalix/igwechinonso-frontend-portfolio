import React from 'react'
import Title from '@/components/Title';
import AnimateIntoView from '@/components/AnimateIntoView';
import Objects from '@/components/Objects';
import BoxReveal from '@/components/BoxRevealAnimation';

const WorksCTA = () => {
  return (
    <div className='custom-wrapper'>


      <div className='flex items-center justify-between flex-col lg:flex-row'>

        <div className='basis-[70%] text-center lg:text-left pt-[5rem]'>
          <BoxReveal boxColor={"#23af6c"} duration={0.5}>
            <div className='w-[80%]'>
              <Title
                text="Work that I have Completed"
                size='large'
                as="h2"
              />
            </div>
          </BoxReveal>


        </div>
        <div className='flex-1 pt-[0rem]'>
          <Objects />
        </div>
      </div>
    </div>
  )
}

export default WorksCTA