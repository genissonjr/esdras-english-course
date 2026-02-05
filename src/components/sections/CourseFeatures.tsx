// src/components/sections/CourseFeatures.tsx
import React from "react";

const features = [
  {
    id: 1,
    icon: "fa-comments",
    title: "Conversational Skills",
    description:
      "Master everyday conversations, idioms, and natural expressions used by native speakers.",
  },
  {
    id: 2,
    icon: "fa-file-alt",
    title: "Grammar Mastery",
    description:
      "Comprehensive grammar lessons with practical exercises and real-world applications.",
  },
  {
    id: 3,
    icon: "fa-headphones",
    title: "Listening Comprehension",
    description:
      "Develop your listening skills with authentic materials and various accents.",
  },
  {
    id: 4,
    icon: "fa-pen-fancy",
    title: "Writing Excellence",
    description:
      "Learn to write clearly and effectively for both professional and personal communication.",
  },
  {
    id: 5,
    icon: "fa-globe-americas",
    title: "Cultural Context",
    description:
      "Understand cultural nuances and context to communicate effectively in any situation.",
  },
  {
    id: 6,
    icon: "fa-bullhorn",
    title: "Pronunciation",
    description:
      "Perfect your pronunciation with guided exercises and feedback from native speakers.",
  },
];

const CourseFeatures: React.FC = () => {
  return (
    <section id="course" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What You'll Learn
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive curriculum covers everything you need to become fluent in English
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="course-card bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <i className={`fas ${feature.icon} text-primary text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;
