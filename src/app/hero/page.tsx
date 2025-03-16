// import React from 'react'
// import '../globals.css';
// import MenuItem from '@/component/MenuItem';


// const Hero: React.FC = () => {
//     return (

//       <section className="relative flex justify-center items-center min-h-screen bg-gradient-to-r from-black to-slate-600">
//         {/* Grid Container */}
//         <div className="grid grid-cols-1 md:grid-cols-2 items-center py-20 px-6 w-full max-w-screen-xl mx-auto gap-12 
//           bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20">
       
//         {/* Left Content - center */}
//         <div className="flex flex-col justify-center items-center md:text-left">
//           <h1 className="text-5xl tracking-widest font-mono font-bold uppercase mb-20 text-orange-300">Handriko</h1>
//           <h2 className="text-3xl font-semibold text-gray-300">
//             Junior Full-Stack Web Developer
//           </h2>
//           <p className="mt-4 text-3xl font-light italic max-w-md text-gray-400">
//             "Building scalable and high-performance web solutions for your business needs..."
//           </p>
  
//           {/* Call to Action */}
//           <div className="mt-6">
//             <MenuItem
//               title="View Portfolio"
//               address="/portofolio"
//               className="inline-block px-6 py-2 bg-amber-500 hover:bg-blue-600 text-black font-medium rounded-lg shadow-md transition"
//             />
//           </div>
//         </div>
  
//         {/* Right Image */}
//         <div className="flex justify-center">
//           <img
//             src="/images/bali.png" // Sesuaikan path gambar
//             alt="Handriko-Image"
//             width={600}
//             height={300}
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//        </div>
//       </section>
//     );
//   };
  
//   export default Hero;

import React from "react";
import Image from "next/image";
import MenuItem from "@/component/MenuItem";

const Hero: React.FC = () => {
  return (
    <section className="relative flex justify-center items-center min-h-screen bg-gradient-to-r from-black px-8 py-10">
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full max-w-6xl bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20 p-8 md:p-12">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-5xl md:text-6xl tracking-widest font-mono font-bold uppercase text-orange-300">
            Handriko
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mt-4">
            Junior Full-Stack Web Developer
          </h2>

          <p className="mt-4 text-lg md:text-xl font-light italic text-gray-400 max-w-md">
            "Building scalable and high-performance web solutions for your business needs..."
          </p>

          {/* Call to Action */}
          <div className="mt-6">
            <MenuItem
              title="View Portfolio"
              address="/portfolio"
              className="inline-block px-6 py-2 bg-amber-500 hover:bg-blue-600 text-black font-medium rounded-lg shadow-md transition"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/images/Han.png"
            alt="Handriko-Image"
            width={400}
            height={300}
            className="rounded-lg shadow-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;