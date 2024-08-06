"use client"
import { notFound } from 'next/navigation';
import { projects } from '@/components/Projects';
import Title from '@/components/Title';
import Paragraph from '@/components/Paragraph';

const ProjectPage = ({ params }: { params: { title: string } }) => {
  const decodedTitle = decodeURIComponent(params.title);
  const project = projects.find(p => p.name === decodedTitle);

  if (!project) {
    notFound();
  }

  return (
    <div className="custom-wrapper mt-[5rem] mx-auto py-8">
      <Title as="h2" text={project.name} size='medium' />
      <Paragraph
        as="p"
        size='small'
        text={project.description}
        className='text-center md:text-left font-normal text-gray-600 mb-4'
      />
      <Title as="h2" text="Technologies Used:" size='small' />
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
export default ProjectPage; 