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
import { motion, AnimatePresence } from 'framer-motion';
import { sendEmail } from '../actions/sendMail';
import Modal from '@/components/Modal';
import Image from 'next/image';
import { MessageIcon } from '@/constants';

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={cn("flex flex-col space-y-2 w-full", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const Contact = () => {
  const [state, dispatch] = useReducer(contactReducer, initialContactState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const servicesOptions = [
    { id: 'frontend', label: 'Frontend', value: 'frontend' },
    { id: 'backend', label: 'Backend', value: 'backend' },
    { id: 'mobile', label: 'Mobile', value: 'mobile' },
    { id: 'fullstack', label: 'Full Stack', value: 'fullstack' },
  ];

  const contractDurationOptions = [
    { id: 'oneMonth', label: '1 Month', value: '1 Month' },
    { id: 'threeMonths', label: '3 Months', value: '3 Months' },
    { id: 'sixMonths', label: '6 Months', value: '6 Months' },
    { id: 'annualy', label: 'Annualy', value: 'Annualy' },
  ]

  const { clientEmail, clientName, clientMessage, services, contractDuration, isSubmitting } = state;


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      dispatch({ type: "SET_IS_SUBMITTING", payload: true })
      const data = await sendEmail({ email: "igwechinonso77@gmail.com", services, message: clientMessage, name: clientName, duration: contractDuration });
      if (data?.success) {
        setIsModalOpen(true)
      }
    } catch (error) {
      console.log({ error })
    } finally {
      dispatch({ type: "SET_IS_SUBMITTING", payload: false });
    }
  }

  return (
    <motion.div
      className='custom-wrapper sm:mt-[8rem] mt-[4rem]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex lg:flex-row flex-col justify-between gap-10'>
        <motion.div
          className='basis-1/2'
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Title
            text={<span>Ready to Collaborate? <motion.span
              className='text-primary-500'
              initial={{ color: '#000' }}
              animate={{ color: '#c79e2b' }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            >Let&apos;s Transform Your Vision</motion.span> into Stunning Digital Reality and Drive Meaningful User Engagement!</span>}
            size='large'
            as="h2"
            className='text-left'
          />
          <Paragraph
            className='mt-4'
            as="p"
            size='medium'
            text="Want to Bring Your Digital Dreams to Life? Let's Collaborate and Create Seamless, Stunning Experiences That Captivate Users and Drive Results. With Expertise in Frontend Development and a Passion for Innovation, I'm Here to Transform Your Vision into a Digital Masterpiece. Reach Out and Let's Start Building Something Extraordinary Together!"
          />
        </motion.div>
        <motion.div
          className='flex-1'
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <form className="" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="services">Required Services</Label>
              <RadioGroup
                options={servicesOptions}
                name="services"
                value={services}
                onChange={(value) => dispatch({ type: 'SET_SERVICES', payload: value })}
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-8">
              <Label htmlFor="contractDuration">Contract Duration</Label>
              <RadioGroup
                options={contractDurationOptions}
                name="contractDuration"
                value={contractDuration}
                onChange={(value) => dispatch({ type: 'SET_CONTRACT_DURATION', payload: value })}
              />
            </LabelInputContainer>

            <div className='flex flex-col md:flex-row items-center gap-4 mb-8'>
              <LabelInputContainer className="">
                <Label htmlFor="clientName">Name</Label>
                <Input
                  id="clientName"
                  placeholder="John Doe"
                  type="text"
                  value={clientName}
                  onChange={(e) => dispatch({ type: 'SET_CLIENT_NAME', payload: e.target.value })}
                />
              </LabelInputContainer>

            </div>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="clientMessage">Message</Label>
              <TextArea
                id="clientMessage"
                placeholder="Type your message here"
                value={clientMessage}
                onChange={(e) => dispatch({ type: 'SET_CLIENT_MESSAGE', payload: e.target.value })}
                rows={10}
              />
            </LabelInputContainer>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  className="bg-gradient-to-br relative group/btn from-primary-500 to-primary-500 block w-full text-white rounded-md font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--primary-800)_inset,0px_-1px_0px_0px_var(--primary-800)_inset]"
                  caption={
                    <motion.span
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isSubmitting ? "Sending..." : (<span>Send &rarr;</span>)}
                      <BottomGradient />
                    </motion.span>
                  }
                />
              </motion.div>
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className='flex flex-col items-center justify-center'>
          <Image src={MessageIcon} alt='MessageIcon' className='w-32' />
          <Title as="h2" text="Request sent" size='medium' />
          <Paragraph as="p" size='small' className='text-center' text="Thank you for entrusting us. Please wait, we will reply to your request via email" />
        </div>
      </Modal>
    </motion.div>
  )
}

export default Contact;

const BottomGradient = () => {
  return (
    <>
      <motion.span
        className="block mt-4 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-primay-900 to-transparent"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="blur-sm block absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-primary-900 to-transparent"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />
    </>
  );
};