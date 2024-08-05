"use client"
import React from 'react'
import { useTheme } from 'next-themes';
import Paragraph from '../Paragraph';
import Image from 'next/image';
import { LinkedinLight, LinkedinDark, XDark, XLight, GithubDark, GithubLight, CopyrightDark, CopyrightLight } from '@/constants';
import Link from 'next/link';

const Footer = () => {
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === "dark";

  return (
    <footer className='xl:px-[5rem] px-[1rem] py-3 max-w-full dark:bg-[#0F151B] bg-white'>
      <div className='max-w-[1280px] mx-auto'>
        <div className='flex items-center justify-between md:flex-row flex-col'>
          <div className='flex items-center justify-center'>
            <Image src={isDarkMode ? CopyrightDark : CopyrightLight} alt="Github" className='w-6' />
            <Paragraph
              as="p"
              size='small'
              text="2024 IGWE ABRAHAM CHINONSO"
              className='my-3 text-center md:text-left font-normal'
            /></div>
          <div className='flex items-center justify-between gap-5'>
            <Link href="#">
              <Image src={isDarkMode ? GithubDark : GithubLight} alt="Github" className='w-6' />
            </Link>
            <Link href="#">
              <Image src={isDarkMode ? LinkedinDark : LinkedinLight} alt="Linkedin" className='w-6' />
            </Link>
            <Link href="#">
              <Image src={isDarkMode ? XDark : XLight} alt="Twitter" className='w-6' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer