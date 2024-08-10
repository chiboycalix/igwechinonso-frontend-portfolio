"use client"
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import Paragraph from '@/components/Paragraph';
import Title from '@/components/Title';
import { cn } from '@/lib/utils';
import React, { useReducer, useState } from 'react';
import { initialContactState, contactReducer } from "@/reducers/contactReducer";
import { TextArea } from '@/components/TextArea';
import { RadioGroup } from '@/components/RadioButton';
import Button from '@/components/Button';

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const Contact = () => {
  const [state, dispatch] = useReducer(contactReducer, initialContactState);
  const handleSubmit = () => { }

  const servicesOptions = [
    { id: 'frontend', label: 'Frontend', value: 'frontend' },
    { id: 'backend', label: 'Backend', value: 'backend' },
    { id: 'mobile', label: 'Mobile', value: 'mobile' },
    { id: 'fullstack', label: 'Full Stack', value: 'fullstack' },
  ];

  const contractDurationOptions = [
    { id: 'oneMonth', label: '1 Month', value: 'oneMonth' },
    { id: 'threeMonths', label: '3 Months', value: 'threeMonths' },
    { id: 'sixMonths', label: '6 Months', value: 'sixMonths' },
    { id: 'annualy', label: 'Annualy', value: 'annualy' },
  ]

  const { clientEmail, clientName, clientMessage, services, contractDuration, isSubmitting } = state;

  return (
    <div className='custom-wrapper sm:mt-[8rem] mt-[4rem]'>
      <div className='flex lg:flex-row flex-col justify-between gap-10'>
        <div className='basis-1/2'>
          <Title
            text={<span>Ready to Collaborate? <span className='text-primary-500'>Let&apos;s Transform Your Vision</span> into Stunning Digital Reality and Drive Meaningful User Engagement!</span>}
            size='large'
            as="h2"
            className='text-left'
          />
          <Paragraph
            className='mt-4'
            as="p"
            size='medium'
            text="Want to Bring Your Digital Dreams to Life? Let's Collaborate and Create Seamless, Stunning Experiences That Captivate Users and Drive Results. With Expertise in Frontend Development and a Passion for Innovation, I'm Here to Transform Your Vision into a Digital Masterpiece. Reach Out and Let's Start Building Something Extraordinary Together!" />
        </div>
        <div className='flex-1'>
          <form className="" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="services">Services</Label>
              <RadioGroup
                options={servicesOptions}
                name="services"
                value={services}
                onChange={(value) => dispatch({ type: 'SET_SERVICES', payload: value })}
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="contractDuration">Contract Duration</Label>
              <RadioGroup
                options={contractDurationOptions}
                name="contractDuration"
                value={contractDuration}
                onChange={(value) => dispatch({ type: 'SET_CONTRACT_DURATION', payload: value })}
              />
            </LabelInputContainer>


            <LabelInputContainer className="mb-4">
              <Label htmlFor="clientName">Your Name</Label>
              <Input
                id="clientName"
                placeholder="John Doe"
                type="text"
                value={clientName}
                onChange={(e) => dispatch({ type: 'SET_CLIENT_NAME', payload: e.target.value })}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Your Email</Label>
              <Input
                id="email"
                placeholder="sample@gmail.com"
                type="email"
                value={clientEmail}
                onChange={(e) => dispatch({ type: 'SET_CLIENT_EMAIL', payload: e.target.value })}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="clientMessage">Your Message</Label>
              <TextArea
                id="clientMessage"
                placeholder="Type your message here"
                value={clientMessage}
                onChange={(e) => dispatch({ type: 'SET_CLIENT_MESSAGE', payload: e.target.value })}
              />
            </LabelInputContainer>
            <Button
              className="bg-gradient-to-br relative group/btn from-primary-500 to-primary-500 block w-full text-white rounded-md font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--primary-800)_inset,0px_-1px_0px_0px_var(--primary-800)_inset]"
              caption={<span>{isSubmitting ? "Sending..." : (<span>Send &rarr;</span>)}<BottomGradient /></span>}
            />

          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};