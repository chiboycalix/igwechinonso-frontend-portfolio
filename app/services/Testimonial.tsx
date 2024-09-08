"use client";
import React from "react";
import { Carousel } from "@/components/AppleCarousel";
import { AppleImage } from "@/constants"
import { motion } from 'framer-motion'
import Sebastiaan from "@/assets/sebastiaan.jpeg"
import SectionHeader from "@/components/SectionHeader";

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: Sebastiaan,
    name: "Sebastiaan Herman",
    profession: "Founder at Second Company",
    testimonial: "Over the past year, I've had the distinct pleasure of working alongside Chinonso, a colleague whose contributions have been invaluable. In the realm of software engineering, where meticulous attention to detail and a robust sense of responsibility are paramount, Chinonso stands out as a conscientious developer. This trait, rare and highly prized, manifests in his approach to every project. He consistently demonstrates a deep commitment to quality and efficiency, ensuring that each aspect of his work is executed with precision and care."
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: Sebastiaan,
    name: "Sebastiaan Herman",
    profession: "Founder at Second Company",
    testimonial: "Over the past year, I've had the distinct pleasure of working alongside Chinonso, a colleague whose contributions have been invaluable. In the realm of software engineering, where meticulous attention to detail and a robust sense of responsibility are paramount, Chinonso stands out as a conscientious developer. This trait, rare and highly prized, manifests in his approach to every project. He consistently demonstrates a deep commitment to quality and efficiency, ensuring that each aspect of his work is executed with precision and care."
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: Sebastiaan,
    name: "Sebastiaan Herman",
    profession: "Founder at Second Company",
    testimonial: "Over the past year, I've had the distinct pleasure of working alongside Chinonso, a colleague whose contributions have been invaluable. In the realm of software engineering, where meticulous attention to detail and a robust sense of responsibility are paramount, Chinonso stands out as a conscientious developer. This trait, rare and highly prized, manifests in his approach to every project. He consistently demonstrates a deep commitment to quality and efficiency, ensuring that each aspect of his work is executed with precision and care."
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: Sebastiaan,
    name: "Sebastiaan Herman",
    profession: "Founder at Second Company",
    testimonial: "Over the past year, I've had the distinct pleasure of working alongside Chinonso, a colleague whose contributions have been invaluable. In the realm of software engineering, where meticulous attention to detail and a robust sense of responsibility are paramount, Chinonso stands out as a conscientious developer. This trait, rare and highly prized, manifests in his approach to every project. He consistently demonstrates a deep commitment to quality and efficiency, ensuring that each aspect of his work is executed with precision and care."
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: Sebastiaan,
    name: "Sebastiaan Herman",
    profession: "Founder at Second Company",
    testimonial: "Over the past year, I've had the distinct pleasure of working alongside Chinonso, a colleague whose contributions have been invaluable. In the realm of software engineering, where meticulous attention to detail and a robust sense of responsibility are paramount, Chinonso stands out as a conscientious developer. This trait, rare and highly prized, manifests in his approach to every project. He consistently demonstrates a deep commitment to quality and efficiency, ensuring that each aspect of his work is executed with precision and care."
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