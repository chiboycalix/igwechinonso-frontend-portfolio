import React from 'react'
import Title from '@/components/Title'
import Button from '@/components/Button'

const WorkWithUs = () => {
  return (
    <div className='custom-wrapper my-[5rem]'>
      <div className='flex flex-col items-center md:w-[30%] w-[70%] mx-auto'>
        <Title
          text="Interested in working with us?"
          size='large'
          as="h2"
          className='text-center'
        />
      </div>
      <div className='mx-auto md:max-w-[15%] w-[50%] mt-[2rem]'>
        <Button caption="Let's talk" className="font-bold rounded text-sm" variant='bg-primary-100 hover:bg-primary-200 text-primary-500'/>
      </div>
    </div>
  )
}

export default WorkWithUs