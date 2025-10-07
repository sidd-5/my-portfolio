'use client';
import React from 'react';
import { motion } from 'framer-motion';

// --- ICON SVGs ---
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .267.18.577.688.482A10.003 10.003 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
    </svg>
);

// --- YOUR CONTACT DATA ---
const contactDetails = [
  {
    name: 'Email',
    value: 'siddhchavan1@gmail.com',
    href: 'mailto:siddhchavan1@gmail.com',
    icon: MailIcon,
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/siddhesh-chavan',
    href: 'https://www.linkedin.com/in/siddhesh-chavan-514771301/',
    icon: LinkedInIcon,
  },
  {
    name: 'GitHub',
    value: 'github.com/siddhesh-chavan',
    href: 'https://github.com/sidd-5/',
    icon: GitHubIcon,
  },
];

export default function Contact() {
  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const contactCardVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const contactCardHover = {
    scale: 1.02,
    y: -5,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    borderColor: "rgb(147, 197, 253)", // blue-200
    backgroundColor: "rgb(239, 246, 255)", // blue-50
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  };

  const iconContainerVariants = {
    rest: { 
      backgroundColor: "rgb(219, 234, 254)", // blue-100
      color: "rgb(37, 99, 235)" // blue-600
    },
    hover: { 
      backgroundColor: "rgb(37, 99, 235)", // blue-600
      color: "rgb(255, 255, 255)", // white
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    rest: { rotate: 0 },
    hover: { 
      rotate: [0, -10, 10, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    rest: {},
    hover: {
      x: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="bg-slate-50 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Let's Connect
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Have a project in mind or just want to say hello? I'd love to hear from you. Here's how you can reach me.
          </p>
        </motion.div>

        {/* Contact Details List */}
        <div className="mt-16 max-w-xl mx-auto">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {contactDetails.map((item, index) => (
              <motion.a 
                key={item.name}
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center p-4 rounded-lg bg-white border border-gray-200 shadow-sm transition-all duration-300 cursor-pointer"
                variants={contactCardVariants}
                whileHover="hover"
                initial="rest"
                animate="rest"
                custom={index}
                whileInView={contactCardHover}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center transition-colors"
                  variants={iconContainerVariants}
                  whileHover="hover"
                >
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <item.icon />
                  </motion.div>
                </motion.div>
                
                <motion.div
                  className="ml-4"
                  variants={textVariants}
                  whileHover="hover"
                >
                  <motion.p
                    className="text-lg font-semibold text-slate-900"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {item.name}
                  </motion.p>
                  <motion.p
                    className="text-md text-blue-600 group-hover:underline"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {item.value}
                  </motion.p>
                </motion.div>

                {/* Ripple effect on click */}
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileTap={{ scale: 1.05, opacity: 0.1 }}
                  transition={{ duration: 0.2 }}
                  style={{ backgroundColor: 'rgb(37, 99, 235)' }}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
