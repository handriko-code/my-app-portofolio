import React from 'react'

export default function Experience() {
  return (
        <section className="justify-center items-center text-white min-h-screen bg-gradient-to-r from-black to-slate-600">
            <div>
            <h2 className="flex justify-center items-center text-orange-500 py-4 text-2xl tracking-widest font-bold text-orange">
              EXPERIENCES
            </h2>
            </div>
            <div className='grid grid-cols-2 p-8 gap-6 min-h-fit'>
              {/* Junior Full-Stack Web Developer - Neo Bank */}
              <div className="justify-center items-center px-4 py-4  bg-white/10 bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg w-full">
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Junior Full-Stack Web Developer</h2>
                <h1 className="text-pretty text-orange-500">Neo Bank</h1>
                <h1 className="text-pretty text-orange-500">January 2023 – Present</h1>
                <ul className="list-disc pl-3 font-thin text-">
                  <li>Developed and maintained responsive web applications using React.js, Next.js, and Tailwind CSS for front-end development.</li>
                  <li>Designed and implemented scalable back-end services using Node.js, Express.js, and PostgreSQL.</li>
                  <li>Collaborated with UI/UX designers to enhance user experience and optimize performance.</li>
                  <li>Integrated secure authentication methods, including OAuth2 and JWT, to improve system security.</li>
                  <li>Conducted unit and integration testing using Jest and Cypress to ensure application reliability.</li>
                </ul>
              </div>
              {/* Junior Full-Stack Web Developer - Bank Jago */}
              <div className="justify-center items-center px-4 py-4 bg-white/10 bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg w-full">
              <h2 className="text-2xl font-bold text-orange-500 mb-4">Junior Full-Stack Web Developer</h2>
                <h1 className="text-pretty text-orange-500">Bank Jago</h1>
                <h1 className="text-pretty text-orange-500">July 2021 – December 2022</h1>
                <ul className="list-disc pl-3 font-thin text-">
                  <li>Developed and optimized key features for the banking platform using Vue.js and TypeScript.</li>
                  <li>Built RESTful APIs and microservices using Django and FastAPI to handle high-volume transactions.</li>
                  <li>Implemented CI/CD pipelines with GitHub Actions and Docker for automated deployments.</li>
                  <li>Maintained database operations and optimized queries in MySQL and MongoDB for better performance.</li>
                  <li>Worked closely with cross-functional teams to ensure seamless integration between front-end and back-end.</li>
                </ul>
              </div>
            </div>
          
            <div className='grid grid-cols-2 p-4 gap-6 min-h-fit'>
              {/* Junior Full-Stack Web Developer - Neo Bank */}
              <div className="justify-center items-center px-4 py-4 bg-white/10 bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg w-full">
              <h2 className="text-2xl font-bold text-orange-500 mb-4">Junior Full-Stack Web Developer</h2>
                <h1 className="text-pretty text-orange-500">Various Clients (FinTech, E-Commerce, and Small-Medium Businesses)</h1>
                <h1 className="text-pretty text-orange-500">2020 – 2021</h1>
                <ul className="list-disc pl-3 font-thin text-">
                  <li>Developed custom web solutions for startups, focusing on banking and financial applications.</li>
                  <li>Created e-commerce platforms using MERN (MongoDB, Express, React, Node.js) stack.</li>
                  <li>Built websites and applications for small and medium businesses (SMBs), enhancing their online presence and operational efficiency.</li>
                  <li>Implemented Stripe and Midtrans payment gateways for seamless online transactions.</li>
                  <li>Enhanced application security by applying role-based access control (RBAC) and data encryption.</li>
                  <li>Provided ongoing maintenance and performance optimizations for various projects.</li>
                </ul>
              </div>
              {/* Junior Full-Stack Web Developer - Bank Jago */}
              <div className="justify-center items-center px-4 py-4 bg-white/10 bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg w-full">
              <h2 className="text-2xl font-bold text-orange-500 mb-4">Junior Web Developer (Internship)</h2>
                <h1 className="text-pretty text-orange-500">Allo Bank</h1>
                <h1 className="text-pretty text-orange-500">2019 – 2020</h1>
                <ul className="list-disc pl-3 font-thin text-">
                  <li>Assisted in front-end development using HTML, CSS, JavaScript, and Bootstrap.</li>
                  <li>Supported back-end API development and database management in Node.js and MySQL.</li>
                  <li>Participated in Agile development cycles, including sprint planning and daily stand-ups.</li>
                  <li>Conducted bug fixes and performance enhancements on existing banking applications.</li>
                  <li>Gained experience in version control (Git/GitHub) and collaborative software development.</li>
                </ul>
              </div>
            </div>

        </section>




  );
}
