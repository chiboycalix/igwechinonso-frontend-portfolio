
import React from "react";
import { motion } from "framer-motion";
import Button from "../Button";
import Paragraph from "../Paragraph";
import Title from "../Title";

const services = [
  {
    id: 1,
    title: "Frontend",
    roles: [
      { id: 1, name: "Responsive Web Design" },
      { id: 2, name: "User-Centric Design" },
      { id: 3, name: "Visual Design Expertise" }
    ],
    description: "Create interfaces that not only meet functional requirements but also satisfy users with intuitive and engaging experiences."
  },
  {
    id: 2,
    title: "Backend",
    roles: [
      { id: 1, name: "API Development" },
      { id: 2, name: "Database Management" },
      { id: 3, name: "Server-side Logic" }
    ],
    description: "Build robust and scalable server-side solutions that power your applications with efficiency, reliability, and cutting-edge performance optimization techniques."
  },
  {
    id: 3,
    title: "Full Stack",
    roles: [
      { id: 1, name: "End-to-End Development" },
      { id: 2, name: "System Architecture" },
      { id: 3, name: "Performance Optimization" }
    ],
    description: "Deliver comprehensive solutions that seamlessly integrate front-end and back-end technologies for optimal performance and user experience."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white dark:bg-[#0F151B] rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.id * 0.2 }}
            >
              <div className="p-6">
                <Paragraph size="large" className="font-black mb-4" as="h2" text={service.title} />
                <ul className="mb-4">
                  {service.roles.map((role) => (
                    <li key={role.id} className="flex items-center mb-2">
                      <svg className="w-4 h-4 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <Paragraph text={role.name} as="li" size="medium" />
                    </li>
                  ))}
                </ul>
                <Paragraph className="text-gray-600" as="p" text={service.description} size="small" />
              </div>
              <div className="bg-gray-100 dark:bg-[#0F151B] border-t border-gray-200 dark:border-gray-900 px-6 py-4">
                <Button className="" caption="Learn more" outline />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;