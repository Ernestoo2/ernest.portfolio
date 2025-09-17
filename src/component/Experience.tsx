import { motion } from "motion/react";
import { EXPERIENCES, type Experience } from "../constants/index";
import { memo } from "react";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard = memo(({ experience, index }: ExperienceCardProps) => {
  const getTypeColor = (type: Experience['type']) => {
    switch (type) {
      case 'freelance':
        return 'bg-green-900/20 text-green-400 border-green-500/30';
      case 'internship':
        return 'bg-blue-900/20 text-blue-400 border-blue-500/30';
      case 'full-time':
        return 'bg-purple-900/20 text-purple-400 border-purple-500/30';
      case 'contract':
        return 'bg-orange-900/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-neutral-800 text-neutral-400 border-neutral-600';
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className='mb-12 bg-neutral-800/30 rounded-lg p-6 border border-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300'
    >
      <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4'>
        <div className='flex-1'>
          <div className='flex flex-wrap items-center gap-2 mb-2'>
            <h3 className='text-xl font-semibold text-white'>{experience.role}</h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(experience.type)}`}>
              {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
            </span>
          </div>
          <h4 className='text-lg text-purple-300 font-medium mb-1'>{experience.company}</h4>
          <div className='flex flex-wrap items-center gap-2 text-sm text-neutral-400'>
            <span>{experience.location}</span>
            <span>•</span>
            <span>{experience.period}</span>
          </div>
        </div>
      </div>

      <p className='mb-4 text-neutral-300 leading-relaxed'>{experience.description}</p>

      {experience.achievements && experience.achievements.length > 0 && (
        <div className='mb-4'>
          <h5 className='text-sm font-semibold text-neutral-200 mb-2'>Key Achievements:</h5>
          <ul className='space-y-1'>
            {experience.achievements.map((achievement, achIndex) => (
              <li key={achIndex} className='text-sm text-neutral-400 flex items-start'>
                <span className='text-purple-400 mr-2 mt-1'>•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className='flex flex-wrap gap-2'>
        {experience.technologies.map((tech, techIndex) => (
          <span 
            key={techIndex} 
            className='px-3 py-1 bg-neutral-900/50 text-purple-300 rounded-full text-xs font-medium border border-neutral-700 hover:border-purple-500/50 transition-colors'
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
});

ExperienceCard.displayName = 'ExperienceCard';

const Experience = memo(() => {
  return (
    <section className='border-b border-neutral-900 pb-8' aria-labelledby="experience-heading">
      <motion.h1 
        id="experience-heading"
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: 100 }}
        transition={{duration: 0.5, delay: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Experience
      </motion.h1>
      
      <div className='max-w-4xl mx-auto px-4'>
        {EXPERIENCES.map((experience, index) => (
          <ExperienceCard 
            key={experience.id || index} 
            experience={experience} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
});

Experience.displayName = 'Experience';

export default Experience;
