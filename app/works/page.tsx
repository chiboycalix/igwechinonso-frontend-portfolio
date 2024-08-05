"use client"
import Tabs from '@/components/Tabs'
import WorksCTA from '@/components/WorksCTA'
import React from 'react';
import { Project, projects } from '@/components/Projects';
import AnimateIntoView from '@/components/AnimateIntoView';
import { useTabs } from '@/hooks/useTabs';

const tabs = [
  { id: 'website', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'apis', label: 'APIs' },
];


const desktopApps = projects.filter((project) => project.isDesktop);
const mobileApps = projects.filter((project) => !project.isDesktop)

const Works = () => {
  const { activeTab, handleTabClick } = useTabs(tabs[0].id);

  return (
    <div className='w-full'>
      <WorksCTA />
      <div className='custom-wrapper mt-[1rem]'>
        <Tabs tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
        <div className="mt-4 mb-10">
          {activeTab === 'website' &&
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
              {desktopApps.map((desktopApp, idx) => {
                return <AnimateIntoView key={idx} from='bottom' duration={0.3}><Project project={desktopApp} /></AnimateIntoView>
              })}
            </div>
          }
          {activeTab === 'mobile' && <div></div>}
          {activeTab === 'apis' && <div></div>}
        </div>

      </div>
    </div>
  )
}

export default Works