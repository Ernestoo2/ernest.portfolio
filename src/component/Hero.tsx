import profilepic from "../assets/ErnestProfile.jpg";
import { motion } from "framer-motion";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { HERO_CONTENT } from "../constants/index";
import { IconWrapper } from "./IcontWrapper";

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full flex flex-col lg:flex-row '>
          <div className='flex w-full lg:w-1/2 flex-col items-center lg:items-start'>
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='pb-14 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'
            >
              Eze Ernest
            </motion.h1>

            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'
            >
              Full Stack developer
            </motion.span>

            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className='my-2 max-w-xl py-6 font-light tracking-tighter'
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Added Icons with IconWrapper */}
            <div className="flex gap-4 mt-6">
              <IconWrapper
                icon={FaReact}
                className="text-6xl text-cyan-400"
                variants={{
                  initial: { y: -10 },
                  animate: { y: [10, -10], transition: { duration: 2, repeat: Infinity } }
                }}
              />
              <IconWrapper
                icon={FaNodeJs}
                className="text-6xl text-green-500"
                variants={{
                  initial: { x: -10 },
                  animate: { x: [10, -10], transition: { duration: 2, repeat: Infinity } }
                }}
              />
            </div>
          </div>

          <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className='rounded-2xl '
                src={profilepic}
                alt='Profile Image'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
