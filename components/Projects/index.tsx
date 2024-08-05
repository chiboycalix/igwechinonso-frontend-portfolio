"use client"
import React from 'react';
import Title from '@/components/Title';
import Image from 'next/image';
import { Plumbit, Approvam, SkillTribe, LinkLight, LinkDark, GithubDark, GithubLight } from '@/constants';
import Paragraph from '../Paragraph';
import Link from 'next/link';
import Button from '@/components/Button';
import { useTheme } from '@material-tailwind/react';

export const projects = [
  {
    id: 1,
    name: "Plumbit",
    src: Plumbit,
    isDesktop: true,
    description: "A Platform that Simplifies workflow and amplify Success",
    href: "https://plumbit.vercel.app",
    githubRepo: ""
  },
  {
    id: 2,
    name: "Approvam",
    src: Approvam,
    isDesktop: true,
    description: "A Platform that Simplifies workflow and amplify Success",
    href: "https://www.approvam.com/",
    githubRepo: ""
  },
  {
    id: 3,
    name: "SkillTribe",
    src: SkillTribe,
    isDesktop: true,
    description: "A Platform that Simplifies workflow and amplify Success",
    href: "https://script-tease.vercel.app/",
    githubRepo: ""
  },
  {
    id: 4,
    name: "Plumbit",
    src: Plumbit,
    isDesktop: true,
    description: "A Platform that Simplifies workflow and amplify Success",
    href: "https://plumbit.vercel.app",
    githubRepo: ""
  },
  {
    id: 5,
    name: "Approvam",
    src: Approvam,
    isDesktop: true,
    description: "A Platform that Simplifies workflow and amplify Success",
    href: "https://www.approvam.com/",
    githubRepo: ""
  },
  {
    id: 6,
    name: "SkillTribe",
    src: SkillTribe,
    isDesktop: true,
    description: "A Platform that Simplifies workflow and amplify Success",
    href: "https://script-tease.vercel.app/",
    githubRepo: ""
  }
];

type ProjectProps = {
  project: {
    id: number;
    name: string;
    src: any;
    isDesktop: boolean;
    description: string;
    href: string;
    githubRepo: string;
  }
}

export const Project = ({ project }: ProjectProps) => {
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === "dark";

  const { src, name, description, href, githubRepo } = project;
  return <div className='shadow-lg dark:bg-[#0f151b] bg-white rounded-lg border'>
    <Image
      src={src}
      alt={name}
      className='rounded-t-lg'
    />
    <div className='p-4 border-t border-gray-300'>
      <Paragraph
        as="p"
        size='medium'
        text={name}
        className='font-bold my-3'
      />
      <Paragraph
        as="p"
        size='medium'
        text={description}
        className='my-3'
      />
      <div className='flex items-center justify-between'>
        <Link href={githubRepo} target='_blank' className='px-3 py-[2px] rounded font-bold flex items-center cursor-pointer gap-1'>
          <Image src={isDarkMode ? GithubDark : GithubLight} alt={isDarkMode ? GithubDark : GithubLight} className='w-4' />
          <Paragraph
            as="p"
            size='small'
            text={"View Code"}
            className='hover:text-primary-500'
          />
        </Link>
        <Link href={href} target='_blank' className='px-3 py-[2px] rounded font-bold flex items-center gap-1 cursor-pointer'>
          <Image src={isDarkMode ? LinkDark : LinkLight} alt={isDarkMode ? LinkDark : LinkLight} className='' />
          <Paragraph
            as="p"
            size='small'
            text="Live Preview"
            className='hover:text-primary-500'
          />
        </Link>
      </div>
    </div>
  </div>
}
const Projects = () => {
  return (
    <div className='custom-wrapper my-[5rem]'>
      <Title text="My latest work" size='small' className='lg:w-[70%] w-full' as="h2" />
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-[1rem]'>
        {projects.map((project, idx) => {
          return <Project project={project} key={idx} />
        })}
      </div>
      <div className='mx-auto sm:max-w-[15%] w-full mt-[2rem]'>
        <Button caption='View more projects' className="font-bold text-sm" variant='bg-primary-500 hover:bg-primary-400 text-white' />
      </div>
    </div>
  )
}

export default Projects