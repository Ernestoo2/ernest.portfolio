import { motion } from "framer-motion";
import { EDUCATION } from "../constants/index";

export const Education = () => {
  return (
    <div className='pb-4 border-b border-neutral-900'>
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className='my-20 text-4xl text-center'
      >
        Education
      </motion.h1>

      <div>
        {EDUCATION.map((edu, index) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            key={index}
            className='flex flex-wrap items-center justify-center mb-8'
          >
            <div className='w-full mx-7 max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{edu.title}</h6>
              <p className='mb-2 text-neutral-400'>{edu.description}</p>
              <p className='text-sm text-neutral-500'>{edu.school} ({edu.period})</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};