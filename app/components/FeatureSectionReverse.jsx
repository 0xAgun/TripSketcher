import React from "react";

// Feature Section with text left, image right
const FeatureSectionReverse = ({ title, description, image }) => {
  return (
    <section className="w-full bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 py-20 px-6 md:px-8">
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-xl text-left h-full">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900 leading-tight w-full">{title}</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-2 w-full">{description}</p>
        </div>
        {/* Image Card */}
        <div className="flex-1 flex justify-end">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-100 p-4 w-full max-w-md flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSectionReverse;
