'use client';
import React from 'react';
import { motion } from 'framer-motion';

// --- YOUR PROJECTS DATA ---
const projectsData = [
  {
    title: 'Kshan Restaurant',
    description: 'A modern, responsive restaurant website offering digital menu browsing, table reservations, and an immersive user interface for customers.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://kshan-restaurant.vercel.app', 
    githubUrl: '', 
    status: 'Private Project' // Case 1: Private Code, Public Website
  },
  {
    title: 'Doctor Appointment Booking',
    description: 'A complete solution for booking doctor appointments online. Features include appointment scheduling, and appointment management.',
    techStack: ['Next.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://doctor-website-eta.vercel.app/',
    githubUrl: 'https://github.com/sidd-5/doctor-website',
    status: 'Public' // Case 2: Public Code, Public Website
  },
  {
    title: 'Internal ERP System',
    description: 'A comprehensive Enterprise Resource Planning system designed for internal business operations, inventory tracking, and employee management.',
    techStack: ['Next.js', 'PostgreSQL', 'Docker', 'AWS'],
    liveUrl: '', // No URL provided
    githubUrl: '', // No Code provided
    status: 'Confidential' // Case 3: Private Code, Private Website (New Category)
  },
  {
    title: 'Ralph Lauren Clone',
    description: 'Created a Ralph Lauren e-commerce website clone with fully responsive design and shopping cart functionality.',
    techStack: ['React', 'Express', 'Tailwind CSS'],
    liveUrl: 'https://ralph-lauren-theta.vercel.app/',
    githubUrl: 'https://github.com/sidd-5/Ralph_Lauren',
    status: 'Public'
  },
  {
    title: 'Petfit - Pet Care Services',
    description: 'A platform offering a range of pet care services, including grooming, boarding, and veterinary care.',
    techStack: ['Next.js', 'Framer Motion'],
    liveUrl: '',
    githubUrl: '',
    status: 'In Development' // Case 4: No Links yet because it's incomplete
  },
  {
    title: 'Hostel Management System',
    description: 'A web application for managing hostel operations, including room allocation, billing, and user management.',
    techStack: ['React', 'Next.js'],
    liveUrl: '',
    githubUrl: '',
    status: 'Confidential' // Fully Private
  }
];

// --- ICON SVGs ---
const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .267.18.577.688.482A10.003 10.003 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
    </svg>
);

const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
    </svg>
);

// --- HELPER FUNCTIONS ---
const isValidUrl = (url) => {
  return url && url !== '' && url !== '#' && !url.includes('localhost');
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Public':
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    case 'Private Project':
      return 'bg-rose-50 text-rose-700 border-rose-200';
    case 'Confidential': // New color for Confidential
      return 'bg-purple-50 text-purple-700 border-purple-200';
    case 'In Development':
      return 'bg-amber-50 text-amber-700 border-amber-200';
    default:
      return 'bg-slate-50 text-slate-700 border-slate-200';
  }
};

export default function Projects() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="bg-slate-50 py-20 sm:py-24">
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
            My Projects
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Here are some of the projects I&apos;ve worked on, showcasing my skills in full-stack development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
              custom={index}
              {...hoverVariants}
            >
              <div className="flex-grow">
                <motion.div
                  className="flex items-start justify-between"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                  {project.status && (
                    <motion.span
                      className={`ml-2 inline-block text-xs font-semibold px-2.5 py-1 rounded-full border whitespace-nowrap ${getStatusColor(project.status)}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      {project.status}
                    </motion.span>
                  )}
                </motion.div>
                  
                <motion.p
                  className="mt-3 text-slate-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>
                
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm font-medium text-slate-700 mb-2">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="inline-block bg-blue-50 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.7 + techIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="mt-6 pt-4 border-t border-gray-200 flex items-center gap-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.8 }}
                viewport={{ once: true }}
              >
                {/* Live Demo Logic */}
                {isValidUrl(project.liveUrl) ? (
                  <motion.a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-x-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <LinkIcon />
                    Live Demo
                  </motion.a>
                ) : project.status === 'Confidential' ? (
                  // New "Private Access" State for Confidential Projects
                  <span className="inline-flex items-center gap-x-2 text-sm font-medium text-purple-700/70 cursor-not-allowed">
                    <LockIcon />
                    Private Access
                  </span>
                ) : (
                  // Default "No Demo" for others (e.g., In Development)
                  <span className="inline-flex items-center gap-x-2 text-sm font-medium text-gray-400 cursor-not-allowed">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    No Demo
                  </span>
                )}

                {/* GitHub Logic */}
                {isValidUrl(project.githubUrl) ? (
                  <motion.a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-x-2 text-sm font-semibold text-slate-600 hover:text-slate-800 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GitHubIcon />
                    Source Code
                  </motion.a>
                ) : (
                  <span className="inline-flex items-center gap-x-2 text-sm font-medium text-gray-400 cursor-not-allowed">
                    <LockIcon />
                    Private Code
                  </span>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
