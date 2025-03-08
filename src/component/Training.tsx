import { motion } from "framer-motion";
import { TRAININGS } from "../constants/index";

export const Training = () => {
    return (
      <div className='pb-4 border-b border-neutral-900'>
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='my-20 text-4xl text-center'
        >
          Training / Courses
        </motion.h1>
  
        <div className="grid grid-cols-2 lg:grid-cols-3">
          {TRAININGS.map((training, index) => (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              key={index}
              className='flex flex-wrap items-center justify-center mb-8'
            >
              <div className='w-full mx-7 max-w-xl lg:w-3/4'>
                <h6 className='mb-2 font-semibold'>{training.course}</h6>
                <p className='mb-2 text-neutral-400'>{training.technology}</p>
                <p className='text-sm text-neutral-500'>{training.certification}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };
  