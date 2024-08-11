"use client"
import Paragraph from '@/components/Paragraph'
import Title from '@/components/Title'
import { ArrowIconImage, CodeIconImage } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import WorkWithUs from '@/components/WorkWithUs'
import ServicesSection from '@/components/ServicesSection';
import { Testimonials } from './Testimonial'
import SectionHeader from '@/components/SectionHeader'


const Services = () => {
  return (
    <div className='w-full mt-16 md:mt-24 lg:mt-32'>
      <div className='custom-wrapper'>
        <div className='flex flex-col lg:flex-row items-start lg:items-start justify-between gap-8 lg:gap-16'>
          <motion.div
            className='w-full lg:w-1/2'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='w-full'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Title
                  text={<span>Get <span className='text-primary-500'>satisfaction</span>, in solving the solution and achieving lasting results for your business challenges.</span>}
                  size='large'
                  as="h2"
                  className='text-center lg:text-left'
                />
              </motion.div>
              <motion.div
                className='flex items-center gap-2 mt-6 md:mt-8 lg:mt-10'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.div
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  transition={{ repeat: Infinity, duration: 0.7, repeatType: 'reverse' }}
                  className="flex-shrink-0"
                >
                  <Image src={ArrowIconImage} alt='' className='' />
                </motion.div>
                <Paragraph as="p" size='medium' className='w-full lg:w-[80%]' text="Faced with a complex data integration issue that threatened project timelines." />
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className='w-full lg:w-1/2 -mt-8'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Image src={CodeIconImage} alt='' className='w-full h-auto' />
          </motion.div>
        </div>
        <div className='mt-[5rem]'>
          <SectionHeader
            titleText={<span>Our
              <motion.span
                className="text-primary-500 ml-2"
                initial={{ color: '#000' }}
                animate={{ color: '#c79e2b' }}
                transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
              >
                Services
              </motion.span>
            </span>}
            paragraphText="We deliver innovative solutions tailored to your unique needs, combining cutting-edge technology with creative strategies to elevate your business in today's competitive digital landscape."
          />
          <ServicesSection />
        </div>

        <div>
          <Testimonials />
        </div>
      </div>
      <div className='w-full'>
        <WorkWithUs />
      </div>
    </div>
  )
}

export default Services