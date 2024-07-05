import React from 'react'
import Title from '@/components/Title';
import Paragraph from '@/components/Paragraph';
import Button from '../Button';


const bannerCardData = [
  {
    id: 1,
    title: "Years of Experience",
    value: "4+"
  },
  {
    id: 2,
    title: "Completed Projects",
    value: "10+"
  },
  {
    id: 3,
    title: "Ongoing Projects",
    value: "2+"
  }
];

type BannerCardProps = {
  item: {
    id: number
    title: string;
    value: string;
  }
}

const BannerCard = ({ item }: BannerCardProps) => {
  const { title, value } = item;
  return <div className='text-center'>
    <Title
      text={value}
      size='medium'
      as="h2"
      className='text-primary-500'
    />
    <Paragraph
      as="p"
      size='small'
      text={title}
      className='font-normal'
    />
  </div>
}

const Banner = () => {
  return (
    <div className='custom-wrapper mt-[5rem]'>
      <div className='flex items-center justify-between flex-col lg:flex-row'>
        <div className='basis-1/2 text-center lg:text-left'>
          <Title
            text="Skilled in Frontend Development, Enthusiastic About Building Seamless Digital Experiences."
            size='large'
            as="h2"
          />
          <div className='flex flex-col xs:flex-row items-center justify-between bg-white dark:bg-[#0f151b] p-5 mx-auto lg:mx-0 rounded-md shadow-lg mt-[3rem] w-full'>
            {
              bannerCardData.map((item, idx) => {
                return <BannerCard item={item} key={idx} />
              })
            }
          </div>
          <div className='md:w-[20%] sm:w-[30%] w-full mt-[3rem]'>
            <Button caption="Let's talk" className='bg-primary-500 text-white hover:bg-primary-400' />
          </div>
        </div>
        <div className='flex-1'>

        </div>
      </div>
    </div>
  )
}

export default Banner