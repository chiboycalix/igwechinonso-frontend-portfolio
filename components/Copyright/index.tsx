import React from 'react'
import Paragraph from '../Paragraph'

const Copyright = () => {
  return (
    <footer className='xl:px-[5rem] px-[1rem] py-3 max-w-full dark:bg-[#0F151B] bg-white border-t'>
      <div className='max-w-[1280px] mx-auto'>
        <Paragraph
          as="p"
          size='small'
          text={<span><span className='w-10'>©</span>All Right Reserved</span>}
          className='text-center'
        />
      </div>
    </footer>
  )
}

export default Copyright