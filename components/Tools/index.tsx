"use client"
import React from 'react'
import Title from '@/components/Title'
import Image from 'next/image';
import {
  Webpack,
  Github,

  ReactJs,
  Docker,
  TypeScript,
  Mongodb,
  Golang,
  Vscode,
  Javascript,
  Framer,
  Tailwind,
  NextJs,
  NodeJs,
  Redux,
  GithubDark,
  GithubLight,
  NextJsDark,
  NextJsLight
} from '@/constants';
import { useTheme } from 'next-themes';

const ColumnOne = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return <div className='flex flex-col'>
    <div className='px-4 py-8 flex justify-center items-center dark:bg-[#0F151B] rounded-xl dark:border-none border-2 border-gray-300'>
      <Image src={ReactJs} alt="ReactJs" className='w-2/3' />
    </div>
    <div className='grid grid-cols-2 gap-5 mt-[1rem]'>
      <div className='dark:bg-[#0F151B] rounded-xl flex justify-center items-center dark:border-none border-2 border-gray-300'>
        <Image src={Docker} alt="Docker" />
      </div>
      <div className='dark:bg-[#0F151B] rounded-xl flex justify-center items-center dark:border-none border-2 border-gray-300'>
        <Image src={isDarkMode ? GithubDark : GithubLight} alt="Github" className='w-1/2' />
      </div>
    </div>
  </div>
}

const ColumnTwo = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return <div className='flex flex-col'>
    <div className='grid grid-cols-2 gap-5 mb-[1rem]'>
      <div className='dark:bg-[#0F151B] rounded-xl flex justify-center items-center dark:border-none border-2 border-gray-300'>
        <Image src={TypeScript} alt="TypeScript" className='w-full h-full' />
      </div>
      <div className='dark:bg-[#0F151B] rounded-xl flex justify-center items-center dark:border-none border-2 border-gray-300'>
        <Image src={isDarkMode ? NextJsDark : NextJsLight} alt="NextJs" className='w-1/2' />
      </div>
    </div>
    <div className='px-4 py-8 flex justify-center items-center dark:bg-[#0F151B] rounded-xl dark:border-none border-2 border-gray-300'>
      <Image src={Webpack} alt="Webpack" className='w-2/3' />
    </div>
  </div>
}

const ColumnThree = () => {
  return <div className='flex flex-col'>
    <div className='px-4 py-8 flex justify-center items-center dark:bg-[#0F151B] rounded-xl dark:border-none border-2 border-gray-300'>
      <Image src={Redux} alt="Redux" className='w-2/3' />
    </div>
    <div className='grid grid-cols-2 gap-5 mt-[1rem]'>
      <div className='dark:bg-[#0F151B] rounded-xl flex justify-center items-center dark:border-none border-2 border-gray-300'>
        <Image src={Javascript} alt="Javascript" className='rounded-xl' />
      </div>
      <div className='dark:bg-[#0F151B] rounded-xl flex justify-center items-center dark:border-none border-2 border-gray-300'>
        <Image src={Vscode} alt="Vscode" className='w-1/2' />
      </div>
    </div>
  </div>
}

const ColumnFour = () => {
  return <div className='flex flex-col'>
    <div className='grid grid-cols-2 gap-5 mb-[1rem]'>
      <div className='dark:bg-[#0F151B] rounded-xl flex justify-center items-center dark:border-none border-2 border-gray-300'>
        <Image src={Tailwind} alt="Tailwind" />
      </div>
      <div className='dark:bg-[#0F151B] rounded-xl flex justify-center items-center dark:border-none border-2 border-gray-300'>
        <Image src={Mongodb} alt="Mongodb" className='w-1/2' />
      </div>
    </div>
    <div className='px-4 py-8 flex justify-center items-center dark:bg-[#0F151B] rounded-xl dark:border-none border-2 border-gray-300'>
      <Image src={NodeJs} alt="NodeJs" className='w-2/3' />
    </div>
  </div>
}


const Tools = () => {
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === "dark";
  return (
    <div className='custom-wrapper lg:mt-[7rem] py-[2rem]'>
      <Title text="The tools I use" as="h2" size='medium' className='text-center lg:text-left' />
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 mt-[1rem]'>
        <ColumnOne isDarkMode={isDarkMode} />
        <ColumnTwo isDarkMode={isDarkMode} />
        <ColumnThree />
        <ColumnFour />
      </div>
    </div>
  )
}

export default Tools