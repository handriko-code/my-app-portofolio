"use client";
import React from 'react'
import { motion } from "framer-motion";
import TestimonialCard from "./testimonialCard";

const testimonials = [
  {
    name: "Sarah J., E-commerce Owner",
    feedback:
    "Our online sales skyrocketed after the website redesign! The user-friendly layout and fast load times made a huge difference. Highly recommend!",
  },
  {
    name: "Michael T., Startup Founder",
    feedback:
    "The team built an intuitive, scalable, and visually appealing platform that exceeded our expectations. Their attention to detail and problem-solving skills are top-notch!",
  },
  {
    name: "James R., CEO of Tech Solutions",
    feedback:
    "From concept to execution, Handriko handled everything seamlessly. The custom functionalities they added have streamlined our internal processes.",
  },
  {
    name: "David K., UX Designer",
    feedback:
    "The development team perfectly implemented our designs, ensuring pixel-perfect precision and smooth interactivity. Great collaboration!",
  },
  {
    name: "Sophia H., Project Manager",
    feedback:
    "Handriko meet deadlines without compromising quality. Communication and transparency throughout the project were excellent!",
  },
  {
    name: "Olivia P., Backend Developer",
    feedback:
    "Handriko write clean, efficient code and always consider scalability. Working together has been a pleasure!",
  },
];

const Experience: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-white min-h-screen bg-gradient-to-r from-black to-slate-600 p-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-orange-500 text-3xl font-bold tracking-widest py-6"
      >
        TESTIMONIALS
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Experience;