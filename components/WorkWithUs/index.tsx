"use client"
import React from 'react';
import type { NextPage } from 'next';
import { motion, useAnimation } from 'framer-motion';
import Title from '@/components/Title'
import Paragraph from '../Paragraph';

const getRandomDelay = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};


const Shape: React.FC<{ className: string }> = ({ className }) => {
  const controls = useAnimation();
  const [delay] = React.useState(() => getRandomDelay(0, 0.5));
  const [repeatDelay] = React.useState(() => getRandomDelay(5, 10));

  React.useEffect(() => {
    controls.start({
      opacity: [0, 1],
      scale: [0, 1],
      rotate: [0, 360],
      transition: {
        duration: 1,
        delay,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay
      }
    });
  }, [controls, delay, repeatDelay]);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0 }}
      animate={controls}
    />
  );
};

const WorkWithUs: NextPage = () => {
  return (
    <div className="custom-wrapper relative min-h-[400px] mb-[5rem] flex items-center justify-center overflow-hidden bg-gradient-to-br ">
      <div className="absolute inset-0 overflow-hidden">
        <Shape className="absolute top-1/4 left-1/4 w-8 h-8 md:w-12 md:h-12 bg-red-400 rounded-full blur-sm" />
        <Shape className="absolute top-3/4 left-1/3 w-10 h-10 md:w-16 md:h-16 bg-blue-400 rotate-45 blur-sm" />
        <Shape className="hidden md:block absolute top-1/2 right-1/4 w-12 h-12 md:w-20 md:h-20 bg-green-400 rounded-lg blur-sm" />
        <Shape className="absolute bottom-1/4 left-1/2 w-8 h-8 md:w-14 md:h-14 bg-yellow-400 rounded-full blur-sm" />
        <Shape className="hidden md:block absolute top-1/3 right-1/3 w-10 h-10 bg-purple-400 rounded-full blur-sm" />
        <Shape className="hidden md:block absolute bottom-1/3 left-1/4 w-16 h-16 md:w-24 md:h-24 bg-pink-400 rotate-12 blur-sm" />
        <Shape className="hidden md:block absolute top-10 right-10 w-16 h-16 bg-indigo-400 rounded-full blur-sm" />
        <Shape className="absolute bottom-10 left-10 w-12 h-12 md:w-20 md:h-20 bg-teal-400 rotate-45 blur-sm" />
        <Shape className="hidden md:block absolute top-1/2 left-10 w-12 h-12 bg-orange-400 rounded-lg blur-sm" />
        <Shape className="absolute bottom-1/4 right-1/4 w-10 h-10 md:w-16 md:h-16 bg-cyan-400 rounded-full blur-sm" />
      </div>

      <motion.div
        className="relative z-10 text-center bg-white dark:bg-[#0F151B] p-8 rounded-2xl shadow-2xl backdrop-blur-md bg-opacity-80 dark:bg-opacity-80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className='flex flex-col items-center w-full mx-auto'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Title
            text={
              <>
                Interested in <motion.span
                  className="text-primary-500"
                  animate={{
                    color: ['#c79e2b', '#3B82F6', '#c79e2b']
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  working
                </motion.span> with me?
              </>
            }
            size='large'
            as="h2"
            className='text-center mb-6'
          />
          <Paragraph as="p" size='medium' text="Let's collaborate and bring your ideas to life. Whether it's a website, app, or digital experience, I'm here to help you succeed." className="mb-8 max-w-md" />
        </motion.div>
        <motion.button
          className="bg-primary-500 hover:bg-primary-600 text-white font-bold text-sm px-[20px] py-[14px] rounded shadow-lg transition-all duration-300 font-sora"
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          Let&apos;s Connect
        </motion.button>
      </motion.div>
    </div>
  );
};

export default WorkWithUs;