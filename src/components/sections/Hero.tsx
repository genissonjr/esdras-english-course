// src/components/sections/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="bg-[#2563eb] py-16 md:py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="font-semibold text-sm text-white">
              100% Online Course
            </span>
          </div>

          {/* Title */}
          {/*<h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Master English with the Esdras Method
          </h1>*/}

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-lg">
            Master English with the Esdras Method
          </h1>
           
          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-8 text-white/90 text-shadow-lg">
            A comprehensive online English course designed to take you from beginner to fluent speaker in just 6 months.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#enroll"
              className="bg-white/20 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <i className="fas fa-shopping-cart"></i>
              Enroll Now - R$ 1.000,00
            </a>
            <a
              href="#course"
              className="bg-white/20 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <i className="fas fa-play-circle"></i>
              Course Preview
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
