import React from 'react';
import Title from '@/components/Title';
import Paragraph from '@/components/Paragraph';
import { CodeBracketIcon } from '@heroicons/react/16/solid';
import { cn } from '@/utils/cn';
import AnimateIntoView from '../AnimateIntoView';

const services = [
  {
    id: "01",
    name: "Front-End",
    bgColor: "bg-[#EC7878]",
    description:
      "Development of dynamic and responsive web applications using Next.js, React, Tailwind CSS, and TypeScript, creating seamless user interfaces with server-side rendering capabilities, efficient component-based architecture, utility-first styling, and type-safe programming to enhance user interaction and overall performance",
  },
  {
    id: "02",
    name: "Back-End",
    bgColor: "bg-[#7882EC]",
    description:
      "Development of server-side logic and infrastructure using Node.js, TypeScript, Express, and Go (Golang). This versatile stack enables efficient data processing, robust API creation, and seamless server-client communication, while supporting scalable, high-performance systems that handle complex business logic and ensure data integrity.",
  },
  {
    id: "03",
    name: "Full Stack",
    bgColor: "bg-[#F898EE]",
    description:
      "Full-stack development of web applications, combining Next.js, React, and Tailwind CSS for responsive frontends with Node.js, Express, and Go for robust backend systems. Utilizing TypeScript throughout to ensure type safety and enhance development efficiency, creating seamless, high-performance applications from user interface to server infrastructure.",
  },
];

type ServiceProps = {
  service: {
    id: string;
    name: string;
    description: string;
    bgColor: any;
  }
}

const Service = ({ service }: ServiceProps) => {
  return <div className={cn(`bg-white dark:bg-[#0F151B] shadow-lg rounded-lg p-8 transform transition-transform duration-300 hover:scale-110`)}>
    <div className='flex justify-between mb-[1rem]'>
      <div className={cn(`w-[80px] h-[80px] flex items-center justify-center rounded-full`, service.bgColor)}>
        <CodeBracketIcon className={cn('w-6')} />
      </div>
      <div>
        <Paragraph text={service.id} size='medium' as="p" className='font-black' />
      </div>
    </div>
    <Paragraph size='large' text={service.name} as="p" className='font-black' />
    <Paragraph size='medium' as="p" text={service.description} />
  </div>
}

const Services = () => {
  return (
    <div className='custom-wrapper'>
      <div className='flex lg:flex-row flex-col items-center justify-between gap-10'>
        <div className='basis-1/2 text-center lg:text-left'>
          <Title text={<span>Professional <span className='text-primary-500'>Services</span> Offered</span>} size='small' className='lg:w-[70%] w-full' as="h2" />
        </div>
        <div className='flex-1 text-center lg:text-left'>
          <Paragraph
            text="As a skilled Frontend Engineer, my goal is to create compelling and seamless digital experiences. Discover the array of services I offer to enhance your digital presence."
            size='medium'
            as="p"
          />
        </div>
      </div>
      <div className='mt-[4rem]'>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-10'>
          {services.map((service, idx) => {
            return <AnimateIntoView key={idx} from="bottom" threshold={0.8} duration={idx === 0 ? 0.4 : idx === 1 ? 0.6 : 0.8}>
              <Service service={service} />
            </AnimateIntoView>
          })}
        </div>
      </div>
    </div>
  )
}

export default Services;