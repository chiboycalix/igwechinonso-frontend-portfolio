import React from 'react'
import { motion } from 'framer-motion'
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";

type SectionHeaderProps = {
  titleText: React.ReactNode;
  paragraphText: React.ReactNode
}

const SectionHeader = ({ titleText, paragraphText }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mx-auto flex flex-col items-center justify-center"
    >
      <Title
        text={titleText}
        size='large'
        as="h2"
        className='text-center lg:text-left'
      />
      <Paragraph as="p" size='medium'
        text={paragraphText}
        className="text-center max-w-2xl mx-auto"
      />
    </motion.div>
  )
}

export default SectionHeader