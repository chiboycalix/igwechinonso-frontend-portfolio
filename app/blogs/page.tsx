import Paragraph from '@/components/Paragraph'
import Title from '@/components/Title'
import { BlogOne, Second, Third, Fourth, Fifth, Sixth, Seventh } from '@/constants'
import React from 'react'
import Date from '@/components/Date'
import ImageHover from '@/components/ImageHover'

type BlogProps = {
  blog: {
    id: number;
    title: string;
    src: string | any;
    date: string;
  }
}
const blogs = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectectur",
    src: Second,
    date: "02 / 04 / 2022"
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectectur",
    src: Third,
    date: "02 / 04 / 2022"
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectectur",
    src: Fourth,
    date: "02 / 04 / 2022"
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectectur",
    src: Fifth,
    date: "02 / 04 / 2022"
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet consectectur",
    src: Sixth,
    date: "02 / 04 / 2022"
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit amet consectectur",
    src: Seventh,
    date: "02 / 04 / 2022"
  }
];
const Blog = ({ blog }: BlogProps) => {
  return <div>
    <ImageHover src={blog.src} />

    <Paragraph
      as="p"
      size='large'
      text={blog.title}
      className='text-left font-bold hover:text-primary-500 cursor-pointer'
    />
    <Date hasIcon date={blog.date} className='text-secondary' />
  </div>
}
const Blogs = () => {
  return (
    <div className='custom-wrapper mt-[8rem] py-[2rem]'>
      <div className='w-full flex items-center justify-between gap-[2rem]'>
        <div className='basis-[50%]'>
          <ImageHover src={BlogOne} />
        </div>

        <div className='flex-1'>
          <div className='w-[70%]'>
            <Title
              text="Lorem ipsum dolor sit amet, sectetur adipiscing elit"
              size='large'
              as="h2"
              className='hover:text-primary-500 cursor-pointer 2xl:leading-[60px]'
            />
          </div>
          <div className='w-[60%] my-[2rem]'>
            <Paragraph
              as="p"
              size='small'
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              className='text-left text-secondary hover:text-primary-500 cursor-pointer'
            />
          </div>
          <div>
            <Date hasIcon date='01 / 04 / 2022' className='text-secondary' />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-x-8 gap-y-16 mt-[5rem]'>
        {blogs.map((blog) => {
          return <Blog key={blog.id} blog={blog} />
        })}
      </div>
    </div>
  )
}

export default Blogs