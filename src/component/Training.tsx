import { motion } from "motion/react";
import { TRAININGS, type Training } from "../constants/index";
import { memo } from "react";

interface TrainingCardProps {
  training: Training;
  index: number;
}

const TrainingCard = memo(({ training, index }: TrainingCardProps) => {
  const getCategoryColor = (category: Training['category']) => {
    switch (category) {
      case 'frontend':
        return 'bg-blue-900/20 text-blue-400 border-blue-500/30';
      case 'backend':
        return 'bg-green-900/20 text-green-400 border-green-500/30';
      case 'fullstack':
        return 'bg-purple-900/20 text-purple-400 border-purple-500/30';
      case 'ai-ml':
        return 'bg-orange-900/20 text-orange-400 border-orange-500/30';
      case 'engineering':
        return 'bg-red-900/20 text-red-400 border-red-500/30';
      case 'programming':
        return 'bg-cyan-900/20 text-cyan-400 border-cyan-500/30';
      case 'professional':
        return 'bg-yellow-900/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-neutral-800 text-neutral-400 border-neutral-600';
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className='bg-neutral-800/50 rounded-lg p-6 hover:bg-neutral-800/70 transition-all duration-300 border border-neutral-700/50 hover:border-neutral-600/50 group'
    >
      <div className='flex flex-col h-full'>
        <div className='flex items-start justify-between mb-3'>
          <h3 className='font-semibold text-lg text-white group-hover:text-purple-300 transition-colors flex-1'>
            {training.course}
          </h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ml-2 ${getCategoryColor(training.category)}`}>
            {training.category.charAt(0).toUpperCase() + training.category.slice(1)}
          </span>
        </div>
        
        <p className='mb-3 text-neutral-300 text-sm leading-relaxed'>{training.technology}</p>
        
        <div className='border-t border-neutral-700 pt-3 mt-auto'>
          <p className='text-sm text-neutral-400 mb-2 font-medium'>{training.certification}</p>
          
          <div className='flex justify-between items-center text-xs text-neutral-500'>
            <span className='flex items-center'>
              <span className='w-2 h-2 bg-purple-400 rounded-full mr-2'></span>
              {training.issuer}
            </span>
            <span className='bg-neutral-700 px-2 py-1 rounded'>
              {training.year}
            </span>
          </div>
          
          {training.url && (
            <a 
              href={training.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className='inline-block mt-2 text-xs text-purple-400 hover:text-purple-300 transition-colors'
            >
              View Certificate →
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
});

TrainingCard.displayName = 'TrainingCard';

const Training = memo(() => {
  return (
    <section className='pb-8 border-b border-neutral-900' aria-labelledby="training-heading">
      <motion.h1
        id="training-heading"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className='my-20 text-4xl text-center'
      >
        Training / Courses
      </motion.h1>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRAININGS.map((training, index) => (
            <TrainingCard 
              key={training.id || index} 
              training={training} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
});

Training.displayName = 'Training';
  
  export default Training;