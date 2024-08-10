"use client"
import React from 'react';
import Title from '@/components/Title';
import Image from 'next/image';
import { Plumbit, Approvam, SkillTribe, ApprovamDark, Taskify, SkillTribeStudentPortal, LinkLight, LinkDark, GithubDark, GithubLight } from '@/constants';
import Paragraph from '../Paragraph';
import Link from 'next/link';
import Button from '@/components/Button';
import { useTheme } from 'next-themes';
import AnimateIntoView from "@/components/AnimateIntoView";
import ImageHover from '@/components/ImageHover';

export const projects = [
  {
    id: 1,
    name: "Plumbit",
    src: Plumbit,
    srcDark: Plumbit,
    isDesktop: true,
    description: "A Platform that Simplifies workflow and amplify Success",
    href: "https://plumbit.vercel.app",
    githubRepo: "",
    colors: {
      badgeTextColor: "text-green-500",
      badgeBgColor: "bg-green-100"
    },
    technologies: ["Next.js", "Tailwind CSS", "MongoDB", "TypeScript", "Framer Motion"],
    concepts: [
      {
        id: 1,
        title: "Problem Found",
        description: "The problem I find in my life is that I want to read a book and I'm lazy to go buy the book I want, and the book I buy also takes up space in my house and sometimes I only read the book once. . I think this problem is not only me who is facing this problem, but maybe there are many people out there who are experiencing problems like me."
      },
      {
        id: 2,
        title: "Problem Solving",
        description: "And a solution is created where we can read many books online without having to buy a book, only need to subscribe to be able to read as many books, and BOBODO provides it all, not only reading books, you can also listen to interesting podcasts when you feel bored reading books."
      }
    ],
    whatImDoing: "My ability to navigate both front-end and back-end landscapes allows me to maintain a unified vision throughout the development process. In BOBODO, this integrated approach ensured that the user interface design harmonized seamlessly with the underlying server logic, resulting in a product that feels cohesive and user-friendly.",
    visuals: "By wielding front-end technologies like React, I create responsive and dynamic user interfaces that adapt to user interactions. In BOBODO, React components were leveraged to build an interactive dashboard that seamlessly communicated with the server to provide real-time analytics.",
    database: "Database design and management skills contribute to data integrity, optimized queries, and scalable solutions. In BOBODO, the database was tailored to support the dynamic needs of the application, providing a foundation for seamless scalability.",
    conclusion: "Collaborating closely with clients becomes more effective as I can comprehend and address concerns across the entire development spectrum. In BOBODO, this collaborative approach resulted in a product that not only met technical requirements but also aligned seamlessly with the client's vision."
  },
  {
    id: 2,
    name: "SkillTribe Student Portal",
    src: SkillTribeStudentPortal,
    srcDark: SkillTribeStudentPortal,
    isDesktop: true,
    description: "A Platform where students meets potential employers",
    href: "https://skilltribe-student-portal.vercel.app/",
    githubRepo: "",
    colors: {
      badgeTextColor: "text-blue-800",
      badgeBgColor: "bg-blue-100"
    },
    technologies: ["Next.js", "Tailwind CSS", "MongoDB", "TypeScript", "Framer Motion"],
    concepts: [
      {
        id: 1,
        title: "Problem Found",
        description: "The problem I find in my life is that I want to read a book and I'm lazy to go buy the book I want, and the book I buy also takes up space in my house and sometimes I only read the book once. . I think this problem is not only me who is facing this problem, but maybe there are many people out there who are experiencing problems like me."
      },
      {
        id: 2,
        title: "Problem Solving",
        description: "And a solution is created where we can read many books online without having to buy a book, only need to subscribe to be able to read as many books, and BOBODO provides it all, not only reading books, you can also listen to interesting podcasts when you feel bored reading books."
      }
    ],
  },
  {
    id: 3,
    name: "SkillTribe",
    src: SkillTribe,
    srcDark: SkillTribe,
    isDesktop: true,
    description: "A Platform that Simplifies workflow and amplify Success",
    href: "https://skill-tribe.vercel.app/",
    githubRepo: "",
    colors: {
      badgeTextColor: "text-green-500",
      badgeBgColor: "bg-green-100"
    },
    technologies: ["Next.js", "Tailwind CSS", "MongoDB", "TypeScript", "Framer Motion"],
  },
  {
    id: 4,
    name: "Approvam",
    src: Approvam,
    srcDark: ApprovamDark,
    isDesktop: true,
    description: "A Platform that Simplifies workflow and amplify Success",
    href: "https://www.approvam.com/",
    githubRepo: "",
    technologies: []
  },
  {
    id: 5,
    name: "Plumbit",
    src: Plumbit,
    srcDark: Plumbit,
    isDesktop: true,
    description: "A Platform that Simplifies workflow and amplify Success",
    href: "https://plumbit.vercel.app",
    githubRepo: "",
    colors: {
      badgeTextColor: "text-green-500",
      badgeBgColor: "bg-green-100"
    },
    technologies: ["Next.js", "Tailwind CSS", "MongoDB", "TypeScript", "Framer Motion"],
    concepts: [
      {
        id: 1,
        title: "Problem Found",
        description: "The problem I find in my life is that I want to read a book and I'm lazy to go buy the book I want, and the book I buy also takes up space in my house and sometimes I only read the book once. . I think this problem is not only me who is facing this problem, but maybe there are many people out there who are experiencing problems like me."
      },
      {
        id: 2,
        title: "Problem Solving",
        description: "And a solution is created where we can read many books online without having to buy a book, only need to subscribe to be able to read as many books, and BOBODO provides it all, not only reading books, you can also listen to interesting podcasts when you feel bored reading books."
      }
    ],
    whatImDoing: "My ability to navigate both front-end and back-end landscapes allows me to maintain a unified vision throughout the development process. In BOBODO, this integrated approach ensured that the user interface design harmonized seamlessly with the underlying server logic, resulting in a product that feels cohesive and user-friendly.",
    visuals: "By wielding front-end technologies like React, I create responsive and dynamic user interfaces that adapt to user interactions. In BOBODO, React components were leveraged to build an interactive dashboard that seamlessly communicated with the server to provide real-time analytics.",
    database: "Database design and management skills contribute to data integrity, optimized queries, and scalable solutions. In BOBODO, the database was tailored to support the dynamic needs of the application, providing a foundation for seamless scalability.",
    conclusion: "Collaborating closely with clients becomes more effective as I can comprehend and address concerns across the entire development spectrum. In BOBODO, this collaborative approach resulted in a product that not only met technical requirements but also aligned seamlessly with the client's vision."
  },

  {
    id: 6,
    name: "Taskify",
    src: Taskify,
    srcDark: Taskify,
    isDesktop: true,
    description: "An advanced task management dashboard",
    href: "https://skill-tribe.vercel.app/",
    githubRepo: "",
    colors: {
      badgeTextColor: "text-green-500",
      badgeBgColor: "bg-green-100"
    },
    technologies: ["Next.js", "Tailwind CSS", "MongoDB", "TypeScript", "Framer Motion"],
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
    srcDark: any;
  }
}

export const Project = ({ project }: ProjectProps) => {
  const { resolvedTheme, } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  const { src, name, srcDark, description, href, githubRepo } = project;
  return <Link href={`/works/${encodeURIComponent(project.name)}`}>

    <div className='shadow-lg dark:bg-[#0f151b] bg-white rounded-lg dark:border-gray-900 border'>
      <ImageHover
        src={isDarkMode ? srcDark : src}
        rounded="rounded-t-lg"
      />

      <div className='p-4 border-t border-gray-300 dark:border-none'>
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
  </Link>
}
const Projects = () => {
  return (
    <div className='custom-wrapper my-[5rem]'>
      <Title text="My latest work" size='small' className='lg:w-[70%] w-full' as="h2" />
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-[1rem]'>
        {projects.map((project, idx) => {
          return <AnimateIntoView from='bottom' duration={1} key={idx}>
            <Project project={project} />
          </AnimateIntoView>
        })}
      </div>
      <div className='mx-auto sm:max-w-[15%] w-full mt-[2rem]'>
        <Button caption='All projects' className="font-bold text-sm" variant='bg-primary-500 hover:bg-primary-400 text-white' />
      </div>
    </div>
  )
}

export default Projects