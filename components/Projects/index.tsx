import React from 'react';
import Title from '@/components/Title';
import Image from 'next/image';
import { ProjectOne, MobileIcon, DesktopIcon } from '@/constants';
import Paragraph from '../Paragraph';
import Link from 'next/link';
import Button from '@/components/Button';

const projects = [
  {
    id: 1,
    name: "Approvam",
    src: ProjectOne,
    isDesktop: true,
    description:"A Platform that Simplifies workflow and amplify Success"
  },
  {
    id: 2,
    name: "Approvam",
    src: ProjectOne,
    isDesktop: true,
    description:"A Platform that Simplifies workflow and amplify Success"
  },
  {
    id: 3,
    name: "Approvam",
    src: ProjectOne,
    isDesktop: true,
    description:"A Platform that Simplifies workflow and amplify Success"
  }
];

type ProjectProps = {
  project: {
    id: number;
    name: string;
    src: any;
    isDesktop: boolean;
    description: string;
  }
}

const Project = ({ project }: ProjectProps) => {
  const { isDesktop, src, name, description } = project
  return <div className='shadow-lg'>
    <Image
      src={src}
      alt={name}
      className=''
    />
    <div className='p-4'>
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
        <Link href="#" target='_blank' className='bg-primary-100 hover:bg-primary-200 px-3 py-[2px] rounded'>
          <Paragraph
            as="p"
            size='small'
            text="visit"
            className='text-primary-500 font-bold'
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
      <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mt-[1rem]'>
        {projects.map((project, idx) => {
          return <Project project={project} key={idx} />
        })}
      </div>
      <div className='mx-auto sm:max-w-[25%] w-full mt-[2rem]'>
        <Button caption='View more projects' className="font-bold rounded text-sm px-4 py-4" variant='bg-primary-100 hover:bg-primary-200 text-primary-500'/>
      </div>
    </div>
  )
}

export default Projects