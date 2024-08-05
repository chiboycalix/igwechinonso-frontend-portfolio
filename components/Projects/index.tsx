import React from 'react';
import Title from '@/components/Title';
import Image from 'next/image';
import { Plumbit, MobileIcon, DesktopIcon, Approvam, SkillTease } from '@/constants';
import Paragraph from '../Paragraph';
import Link from 'next/link';
import Button from '@/components/Button';

export const projects = [
  {
    id: 1,
    name: "Plumbit",
    src: Plumbit,
    isDesktop: false,
    description: "A Platform that Simplifies workflow and amplify Success",
    href: "https://plumbit.vercel.app"
  },
  {
    id: 2,
    name: "Approvam",
    src: Approvam,
    isDesktop: true,
    description: "A Platform that Simplifies workflow and amplify Success",
    href: "https://www.approvam.com/"
  },
  {
    id: 3,
    name: "SkillTease",
    src: SkillTease,
    isDesktop: true,
    description: "A Platform that Simplifies workflow and amplify Success",
    href: "https://script-tease.vercel.app/"
  },
  {
    id: 4,
    name: "Plumbit",
    src: Plumbit,
    isDesktop: true,
    description: "A Platform that Simplifies workflow and amplify Success",
    href: "https://plumbit.vercel.app"
  },
  {
    id: 5,
    name: "Approvam",
    src: Approvam,
    isDesktop: true,
    description: "A Platform that Simplifies workflow and amplify Success",
    href: "https://www.approvam.com/"
  },
  {
    id: 6,
    name: "SkillTease",
    src: SkillTease,
    isDesktop: true,
    description: "A Platform that Simplifies workflow and amplify Success",
    href: "https://script-tease.vercel.app/"
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
  }
}

export const Project = ({ project }: ProjectProps) => {
  const { isDesktop, src, name, description, href } = project;
  return <div className='shadow-lg dark:bg-[#0f151b] bg-white rounded-lg'>
    <Image
      src={src}
      alt={name}
      className='rounded-t-lg'
    />
    <div className='p-4 border-t border-gray-300'>
      <Image
        src={isDesktop ? DesktopIcon : MobileIcon}
        alt={isDesktop ? "DesktopIcon" : "MobileIcon"}
        className='w-6'
      />
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
        <Paragraph
          as="p"
          size='small'
          text={isDesktop ? "Desktop App" : "Mobile App"}
          className=''
        />
        <Link href={href} target='_blank' className='bg-primary-500 hover:bg-primary-400 px-3 py-[2px] rounded font-bold'>
          <Paragraph
            as="p"
            size='small'
            text="visit"
            className='text-white'
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
      <div className='grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-10 mt-[1rem]'>
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