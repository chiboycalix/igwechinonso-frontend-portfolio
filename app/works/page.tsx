import Tabs from '@/components/Tabs'
import WorksCTA from '@/components/WorksCTA'
import React from 'react';
import { Project, projects } from '@/components/Projects';

const desktopApps = projects.filter((project) => project.isDesktop);
const mobileApps = projects.filter((project) => !project.isDesktop)

const tabs = [
  {
    title: "Website",
    value: "website",
    content: (
      <div className="w-full bg-primary-500 p-5 rounded-2xl min-h-screen">
        <div className='grid grid-cols-3 gap-10'>
          {desktopApps.map((desktopApp, idx) => {
            return <Project project={desktopApp} key={idx} />
          })}
        </div>
      </div>
    ),
  },
  {
    title: "Mobile Apps",
    value: "Mobile Apps",
    content: (
      <div className="w-full bg-primary-500 p-5 rounded-2xl min-h-screen">
        <div className='grid grid-cols-3 gap-10'>
          {mobileApps.map((mobileApp, idx) => {
            return <Project project={mobileApp} key={idx} />
          })}
        </div>
        {mobileApps.length === 0 && <div>No App</div>}
      </div>
    ),
  },
  {
    title: "APIs",
    value: "apis",
    content: (
      <div className="w-full bg-primary-500 p-5 rounded-2xl min-h-screen">
      </div>
    ),
  },
];

const Works = () => {
  return (
    <div className='w-full'>
      <WorksCTA />
      <div className='custom-wrapper mt-[1rem]'>
        <Tabs tabs={tabs} activeTabClassName='font-bold' />
      </div>
    </div>
  )
}

export default Works