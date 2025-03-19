import React from 'react'

/**
 * Komponen About
 * 
 * Menampilkan informasi tentang profil, keahlian, dan nilai inti seorang 
 * Full-Stack Web Developer. Dirancang dengan Tailwind CSS dalam layout grid.
 * 
 */



export default function About() {
  return (
    <section className="justify-center items-center text-white min-h-screen bg-gradient-to-r from-black to-slate-600">
      <div>
            <h2 className="flex justify-center items-center text-orange-500 py-4 text-2xl tracking-widest font-bold text-orange">
              ABOUT
            </h2>
      </div>
   
    <div className='grid grid-cols-3 p-4 gap-6 min-h-fit'>
      {/* Brief Bio */}
      <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20">
        <h2 className='text-2xl font-bold mb-4'>Brief Bio</h2>
          <p className='text-justify text-white px-4 py-4'>A passionate <strong className='text-orange-500'>Full-Stack Web Developer </strong>
            with a strong foundation in building scalable and efficient web applications. Started as a freelance developer, 
            working with <strong className='text-orange-500'>small and medium businesses,</strong> and later gained experience in <strong className='text-orange-500'>
            FinTech and digital banking</strong> at companies like <strong className='text-orange-500'>Neo Bank, Bank Jago, and Allo Bank.</strong>
            Specializes in developing high-performance, user-friendly applications using modern web technologies.
        </p>
      </div>
    
      {/* Core Skills */}
      <div className='text-center bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20'>
        <h2 className='text-2xl font-bold mb-4'>Core Skills</h2>
          <ul className="text-justify text-white px-4 py-4 list-disc pl-6">
                  <li><strong className='text-orange-500'>Front-End:</strong> React.js, Next.js, Vue.js, TypeScript, Tailwind CSS, Bootstrap</li>
                  <li><strong className='text-orange-500'>Back-End:</strong> Node.js (Express.js, NestJS), Python (Django, FastAPI), Ruby on Rails</li>
                  <li><strong className='text-orange-500'>Database:</strong> PostgreSQL, MySQL, MongoDB, Firebase</li>
                  <li><strong className='text-orange-500'>DevOps & Tools:</strong> Docker, Kubernetes, GitHub Actions, CI/CD, AWS, Vercel</li>
                  <li><strong className='text-orange-500'>Security & Authentication:</strong> JWT, OAuth2, RBAC, Data Encryption</li>
                  <li><strong className='text-orange-500'>Testing & Optimization:</strong> Jest, Cypress, Performance Tuning</li>
          </ul>    
      </div>
    
    {/* {Key Values} */}
      <div className='text-center bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20'>
        <h2 className='text-2xl font-bold mb-4'>Key Values</h2>
          <ul className="text-justify text-white px-4 py-4 list-disc pl-6">
                  <li><strong className='text-orange-500'>Timeliness & Reliability</strong> – Always meets deadlines and delivers high-quality work.</li>
                  <li><strong className='text-orange-500'>Attention to Detail</strong> – Ensures clean, maintainable, and efficient code.</li>
                  <li><strong className='text-orange-500'>Clear Communication</strong> – Collaborates effectively with teams and clients for seamless project execution.</li>
                  <li><strong className='text-orange-500'>Continuous Learning</strong> – Stays updated with the latest web technologies and industry trends.</li>
          </ul>    
      </div> 
   </div>   

</section>

  )
}

