import Tabs  from '@/components/Tabs'
import WorksCTA from '@/components/WorksCTA'
import Image from 'next/image';
import React from 'react';
import { Plumbit } from '@/constants';

const DummyContent = () => {
  return (
    <Image
      src={Plumbit}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const tabs = [
  {
    title: "Product",
    value: "product",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-primary-300">
        <p>Product Tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Services",
    value: "services",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-primary-300">
        <p>Services tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Playground",
    value: "playground",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-primary-300">
        <p>Playground tab</p>
        <DummyContent />
      </div>
    ),
  },
];

const Works = () => {
  return (
    <div className='w-full'>
      <WorksCTA />
      <div className='custom-wrapper mt-[1rem]'>
       <Tabs tabs={tabs} activeTabClassName='font-bold'/>
      </div>
    </div>
  )
}

export default Works