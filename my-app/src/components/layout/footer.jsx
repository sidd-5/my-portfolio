"use client";
import React from 'react';
import { motion } from 'framer-motion';

// --- ICON COMPONENTS ---
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .267.18.577.688.482A10.003 10.003 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

export default function Footer() {
  // Smooth scroll function optimized for Next.js
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Social media configuration - Update with your actual URLs
  const socialLinks = [
    {
      name: 'Email',
      icon: MailIcon,
      href: 'mailto:siddhesh.chavan@example.com', // Replace with your email
      label: 'Send email',
      external: true
    },
    {
      name: 'LinkedIn',
      icon: LinkedInIcon,
      href: 'https://www.linkedin.com/in/siddhesh-chavan', // Replace with your LinkedIn
      label: 'Visit LinkedIn profile',
      external: true
    },
    {
      name: 'GitHub',
      icon: GitHubIcon,
      href: 'https://github.com/siddhesh-chavan', // Replace with your GitHub
      label: 'Visit GitHub profile',
      external: true
    },
    // {
    //   name: 'Twitter',
    //   icon: TwitterIcon,
    //   href: 'https://twitter.com/siddhesh_chavan', // Replace with your Twitter
    //   label: 'Visit Twitter profile',
    //   external: true
    // }
  ];

  // Navigation configuration
  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  // Technology stack
  const technologies = [
    'React & Next.js',
    'Node.js & Express',
    'MongoDB',
    'Tailwind CSS'
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const brandVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const socialItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const socialHover = {
    scale: 1.1,
    y: -2,
    backgroundColor: "rgb(239, 246, 255)", // blue-50
    borderColor: "rgb(147, 197, 253)", // blue-200
    color: "rgb(37, 99, 235)", // blue-600
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.08
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const navItemHover = {
    x: 5,
    color: "rgb(37, 99, 235)", // blue-600
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  };

  const copyrightVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        
        {/* Main Footer Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          
          {/* Brand & Social Section */}
          <motion.div 
            className="lg:col-span-2"
            variants={brandVariants}
          >
            <motion.h3
              className="text-lg font-bold text-slate-900 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Siddhesh Chavan
            </motion.h3>
            <motion.p
              className="text-slate-600 mb-6 max-w-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Full-stack developer passionate about creating scalable web solutions. 
              Building modern applications with React, Next.js, and cutting-edge technologies.
            </motion.p>
            
            {/* Social Media Links */}
            <motion.div
              className="flex space-x-4"
              variants={socialContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.external ? "_blank" : "_self"}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-white border border-gray-200 text-slate-500 transition-all duration-200"
                  variants={socialItemVariants}
                  whileHover={socialHover}
                  whileTap={{ scale: 0.95 }}
                  custom={index}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Quick Links
            </motion.h4>
            <motion.ul
              className="space-y-3"
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {navLinks.map((link, index) => (
                <motion.li key={link.name} variants={listItemVariants}>
                  <motion.button
                    onClick={(e) => handleSmoothScroll(e, link.id)}
                    className="text-slate-600 transition-colors cursor-pointer text-left"
                    whileHover={navItemHover}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.name}
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Technologies */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Technologies
            </motion.h4>
            <motion.ul
              className="space-y-3"
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {technologies.map((tech, index) => (
                <motion.li
                  key={tech}
                  className="text-slate-600"
                  variants={listItemVariants}
                  whileHover={{ x: 3, transition: { duration: 0.2 } }}
                >
                  {tech}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* Bottom Copyright Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center"
          variants={copyrightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-slate-500 text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Siddhesh Chavan. All rights reserved.
          </motion.p>
          <motion.div
            className="flex items-center space-x-2 text-slate-500 text-sm mt-4 md:mt-0"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span>Built with</span>
            <motion.span
              className="text-blue-600 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              Next.js
            </motion.span>
            <span>&</span>
            <motion.span
              className="text-blue-600 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              Tailwind CSS
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
