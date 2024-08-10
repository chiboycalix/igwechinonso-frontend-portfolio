"use client"
import React from 'react'
import Title from '@/components/Title'
import Image from 'next/image';
import {
  Webpack,
  ReactJs,
  Docker,
  TypeScript,
  Mongodb,
  Vscode,
  Javascript,
  Tailwind,
  NodeJs,
  Redux,
  GithubDark,
  GithubLight,
  NextJsDark,
  NextJsLight
} from '@/constants';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import Paragraph from '../Paragraph';

interface ToolProps {
  src: string;
  alt: string;
  name: string;
}

const Tool: React.FC<ToolProps> = ({ src, alt, name }) => (
  <motion.div
    className="flex flex-col items-center p-4 bg-white dark:bg-[#0F151B] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      className="w-16 h-16 mb-4 relative"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <Image src={src} alt={alt} layout="fill" className="object-contain" />
    </motion.div>
    <p className="text-center font-medium text-gray-700 dark:text-gray-300">{name}</p>
  </motion.div>
);

const Tools: React.FC = () => {
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === "dark";

  const tools = [
    { src: ReactJs, alt: "ReactJs", name: "React" },
    { src: TypeScript, alt: "TypeScript", name: "TypeScript" },
    { src: isDarkMode ? NextJsDark : NextJsLight, alt: "NextJs", name: "Next.js" },
    { src: NodeJs, alt: "NodeJs", name: "Node.js" },
    { src: Tailwind, alt: "Tailwind", name: "Tailwind CSS" },
    { src: Redux, alt: "Redux", name: "Redux" },
    { src: Webpack, alt: "Webpack", name: "Webpack" },
    { src: Docker, alt: "Docker", name: "Docker" },
    { src: isDarkMode ? GithubDark : GithubLight, alt: "Github", name: "GitHub" },
    { src: Javascript, alt: "Javascript", name: "JavaScript" },
    { src: Vscode, alt: "Vscode", name: "VS Code" },
    { src: Mongodb, alt: "Mongodb", name: "MongoDB" },
  ];

  return (
    <motion.section
      className="py-2 my-[5rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="custom-wrapper">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <Title
            text={
              <span>
                My <motion.span
                  className="text-primary-500"
                  initial={{ color: '#000' }}
                  animate={{ color: '#c79e2b' }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                >
                  Toolkit
                </motion.span>
              </span>
            }
            as="h2"
            size='large'
            className="text-center mb-4"
          />
          <Paragraph as="p" size='medium' text="These are the technologies and tools I use to bring ideas to life. Each one plays a crucial role in my development process." className="text-center max-w-2xl mx-auto" />


        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <Tool {...tool} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Tools;