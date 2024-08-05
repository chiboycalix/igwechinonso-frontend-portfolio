"use client"
import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import Title from '@/components/Title'

const useRandomDelay = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const Shape: React.FC<{ className: string }> = ({ className }) => {
  const delay = useRandomDelay(0, 0.5);
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: delay
      }}
    />
  );
};

const WorkWithUs: NextPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden p-4">
      <Shape className="absolute top-1/4 left-1/4 w-8 h-8 md:w-12 md:h-12 bg-red-400 rounded-full" />
      <Shape className="absolute top-3/4 left-1/3 w-10 h-10 md:w-16 md:h-16 bg-blue-400 rotate-45" />
      <Shape className="absolute top-1/2 right-1/4 w-12 h-12 md:w-20 md:h-20 bg-green-400 rounded-lg" />
      <Shape className="absolute bottom-1/4 left-1/2 w-8 h-8 md:w-14 md:h-14 bg-brown-400 rounded-full" />
      <Shape className="hidden md:block absolute top-1/3 right-1/3 w-10 h-10 bg-purple-400 rounded-full" />
      <Shape className="absolute bottom-1/3 left-1/4 w-16 h-16 md:w-24 md:h-24 bg-pink-400 rotate-12" />
      <Shape className="hidden md:block absolute top-10 right-10 w-16 h-16 bg-indigo-400 rounded-full" />
      <Shape className="absolute bottom-10 left-10 w-12 h-12 md:w-20 md:h-20 bg-teal-400 rotate-45" />
      <Shape className="hidden md:block absolute top-1/2 left-10 w-12 h-12 bg-orange-400 rounded-lg" />
      <Shape className="absolute bottom-1/4 right-1/4 w-10 h-10 md:w-16 md:h-16 bg-cyan-400 rounded-full" />

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className='flex flex-col items-center w-[80%] mx-auto'>
          <Title
            text="Interested in working with me?"
            size='large'
            as="h2"
            className='text-center'
          />
        </div>
        <motion.button
          className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Message me
        </motion.button>
      </motion.div>
    </div>
  );
};

export default WorkWithUs;