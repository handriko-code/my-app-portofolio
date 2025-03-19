import React from "react";
import Image from "next/image";

/**
 * Ekspor default komponen SkillCard.
 * 
 * SkillCard digunakan untuk menampilkan informasi tentang keterampilan tertentu, 
 * termasuk deskripsi dan gambar teknologi terkait.
 */


type Category = {
  title: string;
  images: string[];
};

type SkillProps = {
  title: string;
  description: string;
  categories: Category[];
};

const SkillCard: React.FC<SkillProps> = ({ title, description, categories }) => {
  return (
    <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20 p-6 transition-transform transform hover:scale-105 duration-300">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <p className="text-white text-justify py-2">{description}</p>

      {categories.map((category, index) => (
        <div key={index} className="py-4">
          <p className="text-lg font-semibold text-white">{category.title}</p>
          <div className="flex flex-wrap justify-center gap-4 py-2">
            {category.images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`${title}-Image-${i}`}
                width={80}
                height={80}
                className="rounded-lg shadow-lg object-cover"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;