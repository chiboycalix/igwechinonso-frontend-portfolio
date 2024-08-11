"use client";
import React from "react";
import { Carousel } from "@/components/AppleCarousel";
import { AppleImage } from "@/constants"
import { motion } from 'framer-motion'
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import SectionHeader from "@/components/SectionHeader";

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: AppleImage,
    name: "Jane Doe",
    profession: "CEO, Tech Innovators",
    testimonial: "Working with this team has been an absolute game-changer for our business. Their expertise and dedication have significantly improved our digital presence and efficiency."
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: AppleImage,
    name: "Jane Doe",
    profession: "CEO, Tech Innovators",
    testimonial: "Working with this team has been an absolute game-changer for our business. Their expertise and dedication have significantly improved our digital presence and efficiency."
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: AppleImage,
    name: "Jane Doe",
    profession: "CEO, Tech Innovators",
    testimonial: "Working with this team has been an absolute game-changer for our business. Their expertise and dedication have significantly improved our digital presence and efficiency."
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: AppleImage,
    name: "Jane Doe",
    profession: "CEO, Tech Innovators",
    testimonial: "Working with this team has been an absolute game-changer for our business. Their expertise and dedication have significantly improved our digital presence and efficiency."
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: AppleImage,
    name: "Jane Doe",
    profession: "CEO, Tech Innovators",
    testimonial: "Working with this team has been an absolute game-changer for our business. Their expertise and dedication have significantly improved our digital presence and efficiency."
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: AppleImage,
    name: "Jane Doe",
    profession: "CEO, Tech Innovators",
    testimonial: "Working with this team has been an absolute game-changer for our business. Their expertise and dedication have significantly improved our digital presence and efficiency."
  },
];

export function Testimonials() {
  return (
    <div className="w-full h-full py-4">
      <SectionHeader
        titleText={<span>What They Say
          <motion.span
            className="text-primary-500 ml-2"
            initial={{ color: '#000' }}
            animate={{ color: '#c79e2b' }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          >
            About Us
          </motion.span>
        </span>}
        paragraphText="Discover genuine insights from satisfied clients who've experienced our transformative solutions, showcasing real-world impact and the trust we've built across diverse industries and projects." />
      <Carousel items={data} />
    </div>
  );
}