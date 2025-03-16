import React from 'react';
import Link from 'next/link';

const MenuItem: React.FC<{ title: string; address: string; className?: string }> = ({ title, address, className }) => {
  return (
    <Link 
      href={address} 
      className={`px-4 text-white uppercase hover:text-gray-300 transition duration-300 ${className}`}
    >
      {title}
    </Link>
  );
};

export default MenuItem;