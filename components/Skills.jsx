import React from 'react'
import { DiCss3, DiHtml5, DiNodejs } from 'react-icons/di'
import { FaNodeJs, FaReact } from 'react-icons/fa'

const Skills = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Tailwind',
    'Redux',
    'Git',
    'API'
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-10">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          مهاراتي
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-4 text-center text-gray-700 hover:shadow-md transition"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;