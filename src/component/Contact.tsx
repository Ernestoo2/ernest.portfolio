import { motion } from "motion/react";
import { CONTACT } from "../constants/index";
import { memo } from "react";

const Contact = memo(() => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${CONTACT.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${CONTACT.phone}`;
  };

  const handleLinkedInClick = () => {
    window.open(CONTACT.linkedin, '_blank', 'noopener,noreferrer');
  };

  const handleGitHubClick = () => {
    window.open(CONTACT.github, '_blank', 'noopener,noreferrer');
  };

  const handlePortfolioClick = () => {
    window.open(CONTACT.portfolio, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className='border-b border-neutral-900 pb-20' aria-labelledby="contact-heading">
      <motion.h1
        id="contact-heading"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='my-10 text-center text-4xl'
      >
        Get in touch
      </motion.h1>
      
      <div className='max-w-4xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className='space-y-6'
          >
            <h2 className='text-2xl font-semibold text-white mb-6'>Contact Information</h2>
            
            <div className='space-y-4'>
              <motion.button
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                onClick={handlePhoneClick}
                className='w-full flex items-center space-x-3 p-4 bg-neutral-800/50 rounded-lg hover:bg-neutral-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900'
                aria-label={`Call ${CONTACT.phone}`}
              >
                <span className='text-blue-400 text-xl'>📞</span>
                <span className='text-neutral-300'>{CONTACT.phone}</span>
              </motion.button>
              
              <motion.button
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onClick={handleEmailClick}
                className='w-full flex items-center space-x-3 p-4 bg-neutral-800/50 rounded-lg hover:bg-neutral-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900'
                aria-label={`Send email to ${CONTACT.email}`}
              >
                <span className='text-blue-400 text-xl'>✉️</span>
                <span className='text-neutral-300'>{CONTACT.email}</span>
              </motion.button>
            </div>

            <motion.address
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='not-italic p-4 bg-neutral-800/50 rounded-lg'
            >
              <span className='text-neutral-400 text-sm'>📍 Address:</span>
              <p className='text-neutral-300 mt-1'>{CONTACT.address}</p>
            </motion.address>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='space-y-6'
          >
            <h2 className='text-2xl font-semibold text-white mb-6'>Connect With Me</h2>
            
            <div className='space-y-4'>
              <motion.button
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                onClick={handleLinkedInClick}
                className='w-full flex items-center space-x-3 p-4 bg-neutral-800/50 rounded-lg hover:bg-neutral-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900'
                aria-label='Visit LinkedIn profile'
              >
                <span className='text-blue-400 text-xl'>💼</span>
                <span className='text-neutral-300'>LinkedIn Profile</span>
              </motion.button>
              
              <motion.button
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                onClick={handleGitHubClick}
                className='w-full flex items-center space-x-3 p-4 bg-neutral-800/50 rounded-lg hover:bg-neutral-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900'
                aria-label='Visit GitHub profile'
              >
                <span className='text-blue-400 text-xl'>💻</span>
                <span className='text-neutral-300'>GitHub Profile</span>
              </motion.button>
              
              <motion.button
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                onClick={handlePortfolioClick}
                className='w-full flex items-center space-x-3 p-4 bg-neutral-800/50 rounded-lg hover:bg-neutral-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900'
                aria-label='Visit portfolio website'
              >
                <span className='text-blue-400 text-xl'>🌐</span>
                <span className='text-neutral-300'>Portfolio Website</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
});

Contact.displayName = 'Contact';

export default Contact
