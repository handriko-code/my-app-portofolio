"use client";
import React from 'react';

import { motion } from "framer-motion";

type TestimonialProps = {
  category?: string;
  name: string;
  feedback: string;
 
};

const TestimonialCard: React.FC<TestimonialProps> = ({ category, name, feedback }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 py-6  bg-white/10 bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-orange-500 mb-4">{category}</h2>
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <p className="text-lg italic text-gray-300 mt-2">{feedback}</p>
    </motion.div>
  );
};

export default TestimonialCard;