import React from 'react';
import SkillCard from "./skillCard";


const skills = [
  {
    title: 'Front-End Skills',
    description: 'Front-end development focuses on user interfaces (UI), user experience (UX), and interactivity of web applications.',
    categories: [
      {
        title: 'Core Web Technologies',
        images: ['/images/html.png','/images/tailwindcss.png', '/images/javascript.png', '/images/reactjs.png'],
      },
    ],
  },
  {
    title: 'Back-End Skills',
    description: 'Back-end development deals with server-side logic, databases, APIs, and business logic of web applications.',
    categories: [
      {
        title: 'Programming Languages & Frameworks',
        images: ['/images/nodejs.png', '/images/django.png'],
      },
    ],
  },
  {
    title: 'DevOps & Development Tools',
    description: 'DevOps skills involve automation, infrastructure management, and CI/CD for streamlining the development lifecycle.',
    categories: [
      {
        title: 'Tools used in development',
        images: ['/images/git.png', '/images/aws.png'],
      },
    
    ],
  },
];

export default function Skill() {
  return (
    <section className='justify-center items-center text-white min-h-screen bg-gradient-to-r from-black to-slate-600'>
      <h2 className='flex justify-center items-center text-orange-500 py-6 text-2xl tracking-widest font-bold text-orange'>SKILLS</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-full'>
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
}
