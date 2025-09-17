import { motion } from "motion/react";
import { EDUCATION, type Education } from "../constants/index";
import { memo } from "react";

interface EducationCardProps {
  education: Education;
  index: number;
}

const EducationCard = memo(({ education, index }: EducationCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className='bg-neutral-800/30 rounded-lg p-6 border border-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300 group'
    >
      <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4'>
        <div className='flex-1'>
          <h3 className='text-xl font-semibold text-white group-hover:text-purple-300 transition-colors mb-2'>
            {education.degree}
          </h3>
          <h4 className='text-lg text-purple-300 font-medium mb-2'>{education.field}</h4>
          <div className='flex flex-wrap items-center gap-2 text-sm text-neutral-400 mb-3'>
            <span>{education.school}</span>
            <span>•</span>
            <span>{education.location}</span>
          </div>
          <p className='text-sm text-neutral-500'>{education.period}</p>
          {education.gpa && (
            <div className='mt-2'>
              <span className='bg-purple-900/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30'>
                GPA: {education.gpa}
              </span>
            </div>
          )}
        </div>
      </div>

      {education.description && (
        <p className='mb-4 text-neutral-300 leading-relaxed'>{education.description}</p>
      )}

      {education.relevantCoursework && education.relevantCoursework.length > 0 && (
        <div className='mb-4'>
          <h5 className='text-sm font-semibold text-neutral-200 mb-3'>Relevant Coursework:</h5>
          <div className='flex flex-wrap gap-2'>
            {education.relevantCoursework.map((course, courseIndex) => (
              <span 
                key={courseIndex}
                className='px-3 py-1 bg-neutral-900/50 text-purple-300 rounded-full text-xs font-medium border border-neutral-700 hover:border-purple-500/50 transition-colors'
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.article>
  );
});

EducationCard.displayName = 'EducationCard';

const Education = memo(() => {
  return (
    <section className='pb-8 border-b border-neutral-900' aria-labelledby="education-heading">
      <motion.h1
        id="education-heading"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className='my-20 text-4xl text-center'
      >
        Education
      </motion.h1>

      <div className='max-w-4xl mx-auto px-4'>
        {EDUCATION.map((education, index) => (
          <EducationCard 
            key={education.id || index} 
            education={education} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
});
export default Education