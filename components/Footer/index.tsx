"use client"
import React from 'react'
import LogoComponent from "@/components/Logo";
import { NavList } from '../Navbar';
import { usePathname } from "next/navigation";
import { useTheme } from 'next-themes';
import Paragraph from '../Paragraph';
import Image from 'next/image';
import { Github, Linkedin, Twitter } from '@/constants';
import Link from 'next/link';

const Footer = () => {
  const currentPath = usePathname();
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === "dark";

  return (
    <footer className='xl:px-[5rem] px-[1rem] py-3 max-w-full dark:bg-[#0F151B] bg-white'>
      <div className='max-w-[1280px] mx-auto'>
        <div className='w-full flex flex-col md:flex-row items-center justify-between'>
          <LogoComponent />
          <NavList isDarkMode={isDarkMode} currentPath={currentPath} isFooter/>
        </div>
        <div className='flex items-center justify-between md:flex-row flex-col'>
          <Paragraph
            as="p"
            size='medium'
            text="Crafting seamless digital journeys with top-notch frontend expertise."
            className='my-3 text-center md:text-left'
          />
          <div className='flex items-center justify-between gap-5'>
            <Link href="#">
              <Image src={Linkedin} alt="Linkedin" className='w-5'/>
            </Link>
            <Link href="#">
              <Image src={Twitter} alt="Twitter" className='w-5'/>
            </Link>
            <Link href="#">
              <Image src={Github} alt="Github" className='w-5'/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer