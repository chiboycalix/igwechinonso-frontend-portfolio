"use client"
import { notFound } from 'next/navigation';
import { projects } from '@/components/Projects';
import Title from '@/components/Title';
import Paragraph from '@/components/Paragraph';
import WorkWithUs from '@/components/WorkWithUs';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const ProjectPage = ({ params }: { params: { title: string } }) => {
  const decodedTitle = decodeURIComponent(params.title);
  const project = projects.find(p => p.name === decodedTitle);

  if (!project) {
    notFound();
  }

  return (
    <div className="mt-[5rem] mx-auto py-8">
      <div className='custom-wrapper'>
        <div className='w-full'>
          <div>
            <Title as="h2" text={project.name} size='medium' className={cn("", project.colors?.badgeTextColor)} />
            <Paragraph
              as="p"
              size='small'
              text={project.description}
              className='text-center md:text-left font-normal text-gray-500 dark:text-gray-400 mb-4'
            />
          </div>
          <div className='dark:border-gray-900 border'>
            <Image src={project.src} alt={project.name} />
          </div>
        </div>
        <div className='mt-[2rem]'>
          <Title as="h2" text="Technologies Used:" size='small' />
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className={cn(` text-primary-800 px-2 py-1 rounded font-medium font-sora`, project.colors?.badgeBgColor, project.colors?.badgeTextColor)}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className='mt-[5rem]'>
          <Title as="h2" text="Concept" size='medium' className={""} />
          <div className='bg-white dark:bg-[#0f151b] rounded-lg p-8'>
            {
              project.concepts?.map((concept) => {
                return <div key={concept.id} className='mb-4'>
                  <Paragraph as="p" text={concept.title} size='medium' className='font-bold' />
                  <Paragraph as="p" text={concept.description} size='small' className='text-gray-500 dark:text-gray-400' />
                </div>
              })
            }
          </div>
        </div>
      </div>
      <div className='w-full'>
        <WorkWithUs />
      </div>
    </div>
  );
}
export default ProjectPage; 