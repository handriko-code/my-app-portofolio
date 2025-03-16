import React from 'react'
import '../globals.css';

// import MenuItem from '@/component/MenuItem';
const Portfolio: React.FC = () => {
    return (

      <section className="justify-center items-center text-white min-h-screen bg-gradient-to-r from-black to-slate-600">
            
            {/* Title - Portofolio */}
            <div>
            <h2 className="flex justify-center items-center text-orange-500 py-4 text-2xl tracking-widest font-bold text-orange">
              PORTFOLIO
            </h2>
            </div>
                        
            <div className='grid grid-cols-2 p-8 gap-6 min-h-fit'>
              {/* Role & Responsibilities Section */}
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20">
                <h2 className="text-2xl font-bold mb-4">Role & Responsibilities</h2>
                <ul className="text-justify text-white px-4 py-4 list-disc pl-6">
                  <p>✅ Built <strong>React.js</strong> front-end with a responsive UI and Redux for state management.</p>
                  <p>✅ Developed <strong>Node.js & Express.js</strong> back-end with <strong>MongoDB</strong> for data storage.</p>
                  <p className='text-left'>✅ Integrated <strong>JWT authentication</strong> and <strong>AWS deployment</strong> for security & scalability.</p>
                  <p>✅ Set up <strong>CI/CD pipeline</strong> for automated testing and deployment.</p>
                </ul>
              </div>

              {/* Results Section */}
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20">
                <h2 className="text-2xl font-bold mb-4">Results</h2>
                <ul className="text-justify text-white px-4 py-4 list-disc pl-6">
                  <p>✅<strong>35% increase in online sales</strong> within 3 months.</p>
                  <p>✅ Improved <strong>user experience & performance</strong> with optimized architecture.</p>
                  <p>✅ Reduced <strong>manual inventory tasks</strong> via real-time tracking.</p>
                </ul>
              </div>
            </div>
            
              {/* Tech Stack Section */}
              <div className=" bg-white/10 bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg w-full text-center mt-2">
                <h2 className="text-2xl font-bold">Tech Stack</h2>
                <div className='flex justify-center gap-6 py-4'>
           
             <div>
             <img
                src="/images/reactjs.png" // Sesuaikan path gambar
                alt="react-Image"
                width={100}
                height={100}
                className="rounded-lg shadow-lg"
              />
              <p>Rearct-js</p>
               </div>
               <div>
              <img
                src="/images/redux.png" // Sesuaikan path gambar
                alt="redux-Image"
                width={100}
                height={120}
                className="rounded-lg shadow-lg"
              />
              <p>Redux</p>
              </div>
              <div>
              <img
                src="/images/tailwindcss.png" // Sesuaikan path gambar
                alt="taiwind-Image"
                width={100}
                height={100}
                className="rounded-lg shadow-lg"
              />
              <p>Tailwind CSS</p>
              </div>
              <div>  
                <img
                src="/images/nodejs.png" // Sesuaikan path gambar
                alt="mode.js-Image"
                width={100}
                height={100}
                className="rounded-lg shadow-lg"
              />
              <p>Node.js</p>
              </div>
              <div>
                <img
                src="/images/mySQL.png"
                alt="mySQL-image"
                width={100}
                heigh={100}
                className="rounded-lg shadow-lg"
                />
              <p>MySQL</p>
              </div>
              <div>
                <img
                src="/images/mongoDB2.png"
                alt="mongoDB-image"
                width={100}
                heigh={100}
                className="rounded-lg shadow-lg"
                />
              <p>MongoDB</p>
              </div>
              </div>
                         

              </div>

              {/* Contact Section */}
              <div className=" bg-white/10 bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg w-full text-center mt-2">
                <h2 className="text-2xl font-bold">Contact</h2>
                <p>📩 <strong>Email:</strong> <a href="mailto:handriko.an@google.com" className="text-blue-400">handriko.an@google.com</a></p>
                <p>💼 <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/Handriko" className="text-blue-400">linkedin.com/in/handriko</a></p>
                <p>💻 <strong>GitHub:</strong> <a href="https://github.com/handriko-code" className="text-blue-400">github.com/handriko-code</a></p>
                <p>🌐 <strong>Portfolio:</strong> <a href="https://yourportfolio.com" className="text-blue-400">yourportfolio.com</a></p>
              </div>
        </section>


  );
};
        
export default Portfolio;