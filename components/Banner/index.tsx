"use client"
import React from 'react'
import Title from '@/components/Title';
import Paragraph from '@/components/Paragraph';
import Button from '@/components/Button';
import User from '@/components/User';
import AnimateIntoView from '@/components/AnimateIntoView';
import RotatingIntoView from '../RotateIntoView';
import Image from 'next/image';
import { Polygon } from '@/constants';


const bannerCardData = [
  {
    id: 1,
    title: "Years of Experience",
    value: "5+"
  },
  {
    id: 2,
    title: "Completed Projects",
    value: "6+"
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

const polygonRotation = {
  left: { initial: { rotate: 0 }, animate: { rotate: 0, } },
  right: { initial: { rotate: -50, x: -150, y: 50 }, animate: { rotate: 0, x: 0, y: 0 } },
  top: { initial: { rotate: 0 }, animate: { rotate: 0 } },
  bottom: { initial: { rotate: 0 }, animate: { rotate: 0 } },
};


const Banner = () => {
  return (
    <div className='custom-wrapper lg:mt-[8rem] mt-[4rem]'>
      <div className='flex lg:items-start items-center justify-between flex-col lg:flex-row gap-4'>
        <div className='basis-[50%]'>
          <AnimateIntoView from='left' duration={0.9}>
            <Title
              text={<span>Skilled in <span className='text-primary-500'>Frontend Development</span>, Enthusiastic About Building Seamless Digital Experiences.</span>}
              size='large'
              as="h2"
              className='text-left'
            />
            <AnimateIntoView from='left' duration={0.6}>
              <div className='flex flex-col xs:flex-row items-center justify-between bg-white dark:bg-[#0f151b] p-5 mx-auto lg:mx-0 rounded-md shadow-lg mt-[3rem] w-full'>
                {
                  bannerCardData.map((item, idx) => {
                    return <BannerCard item={item} key={idx} />
                  })
                }
              </div>
            </AnimateIntoView>
            <div className='flex items-start sm:flex-row flex-col justify-between mt-[2rem]'>
              <div className='md:w-[20%] sm:w-[30%] w-full'>
                <Button caption="Let's talk" className='bg-primary-500 text-white hover:bg-primary-400 text-sm font-black' />
              </div>
              <div className="hidden lg:inline-block">
                <RotatingIntoView from='right' duration={0.6} rotations={polygonRotation}>
                  <Image src={Polygon} alt="Polygon" />
                </RotatingIntoView>
              </div>
            </div>
          </AnimateIntoView>
        </div>
        <div className='flex-1 sm:-mt-[10rem] -mt-[3rem]'>
          <User />
        </div>
      </div >
    </div >
  )
}

export default Banner