// src/components/sections/Author.tsx
import React from "react";

const Author: React.FC = () => {
  return (
    <section id="author" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Your Instructor
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from an experienced English teacher with proven results
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <div className="lg:w-2/5 relative">
              <img
                src="https://picsum.photos/500?random=3"
                alt="Esdras - English Course Instructor"
                className="w-full rounded-2xl shadow-xl"
                loading="lazy"
              />
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Years Teaching</div>
              </div>
            </div>

            {/* Text */}
            <div className="lg:w-3/5">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Esdras</h3>
              <p className="text-gray-600 mb-6">
                With over a decade of experience teaching English to students from all over the world, 
                Esdras has developed a unique teaching methodology that combines traditional language 
                learning techniques with modern, interactive approaches.
              </p>
              <p className="text-gray-600 mb-6">
                His passion for language education and commitment to student success has helped thousands 
                of learners achieve their English language goals. Esdras believes that anyone can learn 
                English with the right guidance and practice.
              </p>

              {/* Info Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <i className="fas fa-graduation-cap text-primary text-xl mr-4"></i>
                  <div>
                    <h4 className="font-bold text-gray-900">Certified Teacher</h4>
                    <p className="text-gray-600 text-sm">CELTA Certified English Instructor</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-users text-primary text-xl mr-4"></i>
                  <div>
                    <h4 className="font-bold text-gray-900">500+ Students</h4>
                    <p className="text-gray-600 text-sm">Successfully taught worldwide</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-comments text-primary text-xl mr-4"></i>
                  <div>
                    <h4 className="font-bold text-gray-900">Bilingual</h4>
                    <p className="text-gray-600 text-sm">Fluent in English and Portuguese</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-award text-primary text-xl mr-4"></i>
                  <div>
                    <h4 className="font-bold text-gray-900">Award Winning</h4>
                    <p className="text-gray-600 text-sm">Recognized teaching methodology</p>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-gray-700">
                "My goal is to make English learning accessible, engaging, and effective for everyone. 
                With the right approach, language barriers can be overcome."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
