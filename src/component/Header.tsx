import React from 'react';
import 'tailwindcss';
import MenuItem from './MenuItem';
import '../app/globals.css';

const Header: React.FC = () => {
  const menuItems = [
    { title: 'Home', address: '/' },
    { title: 'About', address: '/about' },
    { title: 'Contact', address: '/contact' },
    { title: 'Skill', address: '/skill' },
    { title: 'Portfolio', address: '/portfolio' },
    { title: 'Experience', address: '/experience' },
    { title: 'Testimonials', address: '/testimonials' }
  ];

  return (
    <header className="flex justify-center items-center bg-gray-900 w-full py-4 px-6 shadow-lg">
      {/* Menu di Kiri */}
      <nav className="flex space-x-4">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            title={item.title}
            address={item.address}
            className="text-white hover:text-gray-300 transition duration-300 px-4"
          />
        ))}
      </nav>

      {/* Logo & Title di Tengah */}
      <div className="flex flex-col px-6 items-center space-y-2">
        <img
          src="/images/squigly-line.png" // Sesuaikan path gambar
          alt="squigly-line-Image"
          width={100}
          height={50}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Button & Search di Kanan */}
      <div className="flex items-center px-4 space-x-4">
        <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 w-48 text-black placeholder-gray-400 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition duration-300 rounded-r-lg">
            🔍
          </button>
        </div>
        <button className="text-white font-medium px-6 py-2 rounded-lg bg-transparent border border-white hover:bg-gray-700 transition duration-300">
          Log-in
        </button>
        <button className="text-white font-medium px-6 py-2 rounded-lg bg-transparent border border-white hover:bg-gray-700 transition duration-300">
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;