import { motion } from "motion/react";
import { PROJECTS, type Project } from "../constants/index";
import { useState, memo } from "react";
import ProjectModal from "./ProjectModal";

interface ProjectImageProps {
  src: string;
  alt: string;
  title: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectImage = memo(({ src, alt, title }: ProjectImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full lg:w-3/4">
      {!isLoaded && !hasError && (
        <div className="w-[150px] h-[150px] mb-6 rounded-2xl bg-neutral-800 animate-pulse" />
      )}
      <img
        width={200}
        height={200}
        className={`mb-6 rounded-2xl transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        src={src}
        alt={`${alt} - ${title} project`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
      {hasError && (
        <div className="w-[200px] h-[200px] mb-6 rounded-2xl bg-neutral-800 flex items-center justify-center">
          <span className="text-neutral-500 text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  );
});

ProjectImage.displayName = 'ProjectImage';

const ProjectCard = memo(({ project, index }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePreviewClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.article
      role="listitem"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className='bg-neutral-800/30 rounded-lg p-6 border border-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300 group'
    >
      <div className='flex flex-col lg:flex-row gap-6'>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
          className='lg:w-50'
        >
          <ProjectImage
            src={project.image}
            alt="Project screenshot"
            title={project.title}
          />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}  
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
          className='lg:w-2/3 flex flex-col'
        >
          <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4'>
            <div className='flex-1'>
              <h2 className='mb-2 font-semibold text-xl text-white group-hover:text-purple-300 transition-colors'>
                {project.title}
              </h2>
              {project.period && (
                <p className='text-sm text-neutral-500 mb-2'>{project.period}</p>
              )}
            </div>
            {project.teamSize && (
              <span className='bg-neutral-700 md:w-20 px-3 py-1 rounded-full text-xs text-neutral-300'>
                Team of {project.teamSize}
              </span>
            )}
          </div>

          <p className='mb-4 text-neutral-300 leading-relaxed'>{project.description}</p>

          {project.achievements && project.achievements.length > 0 && (
            <div className='mb-4'>
              <h3 className='text-sm font-semibold text-neutral-200 mb-2'>Key Features:</h3>
              <ul className='space-y-1'>
                {project.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className='text-sm text-neutral-400 flex items-start'>
                    <span className='text-purple-400 mr-2 mt-1'>•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Technologies used">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={`${tech}-${techIndex}`}
                className='px-3 py-1 text-sm font-medium text-purple-300 rounded-full bg-neutral-900/50 border border-neutral-700 hover:border-purple-500/50 transition-colors'
                role="listitem"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className='flex flex-wrap gap-3 mt-auto'>
            <button
              onClick={handlePreviewClick}
              className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-900 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-900'
              aria-label={`Preview ${project.title} gallery`}
            >
              Preview
            </button>
            {project.link && (
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-900 rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900'
                aria-label={`Visit ${project.title} live demo`}
              >
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center px-4 py-2 text-sm font-medium text-neutral-300 bg-neutral-700 rounded-lg hover:bg-neutral-600 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-neutral-900'
                aria-label={`View ${project.title} source code`}
              >
                Source Code
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.article>

    <ProjectModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      projectId={project.id}
      projectTitle={project.title}
    />
    </>
  );
});

ProjectCard.displayName = 'ProjectCard';

const Projects = memo(() => {
  return (
    <section className='pb-8 border-b border-neutral-900' aria-labelledby="projects-heading">
      <motion.h1
        id="projects-heading"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className='my-20 text-4xl text-center'
      >
        Projects
      </motion.h1>
      
      <div className='max-w-6xl mx-auto px-4'>
        <div role="list" aria-label="Project portfolio" className='space-y-8'>
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={project.id || index} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
