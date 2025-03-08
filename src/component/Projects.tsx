import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants/index";

const Projects  = () => {
  return (
    <div className='pb-4 border-b border-neutral-900 '>
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className='my-20 text-4xl text-center'
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className='flex flex-wrap items-center justify-center mb-8'
            key={index}
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-1/4'
            >
              <img
                width={150}
                height={150}
                className='mb-6 rounded-2xl'
                src={project.image}
                alt='project-images'
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}  
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='w-full mx-7 max-w-xl lg:w-3/4'
            >
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className='px-2 py-1 mt-4 mr-2 text-sm font-medium text-purple-900 rounded bg-neutral-900'
                >
                  {tech}
                </span>
              ))}
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='block w-1/2 px-4 py-2 mt-4 text-center text-white bg-purple-900 rounded hover:bg-purple-400'
              >
                {project.title}
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
