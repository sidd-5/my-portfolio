'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaPhp, FaDocker, FaGitAlt, FaGithub, FaAws, FaWordpress
} from 'react-icons/fa';
import {
  SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, SiExpress, SiNestjs, SiPostgresql, SiMysql, SiMongodb, SiPrisma, SiVercel, SiFirebase
} from 'react-icons/si';
import { GrCycle } from 'react-icons/gr';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact size="100%" /> },
      { name: 'Next.js', icon: <SiNextdotjs size="100%" /> },
      { name: 'JavaScript', icon: <SiJavascript size="100%" /> },
      { name: 'HTML5', icon: <FaHtml5 size="100%" /> },
      { name: 'CSS3', icon: <FaCss3Alt size="100%" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size="100%" /> },
      { name: 'WordPress', icon: <FaWordpress size="100%" /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs size="100%" /> },
      { name: 'Express.js', icon: <SiExpress size="100%" /> },
      { name: 'PHP', icon: <FaPhp size="100%" /> },
      { name: 'WordPress', icon: <FaWordpress size="100%" /> },
    ],
  },
  {
    title: 'Databases & ORMs',
    skills: [
      { name: 'MySQL', icon: <SiMysql size="100%" /> },
      { name: 'MongoDB', icon: <SiMongodb size="100%" /> },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt size="100%" /> },
      { name: 'GitHub', icon: <FaGithub size="100%" /> },
      { name: 'Vercel', icon: <SiVercel size="100%" /> },
    ],
  },
];

export default function Skills() {
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

  const categoryContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const categoryTitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const skillsGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.08
      }
    }
  };

  const skillCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const skillCardHover = {
    scale: 1.05,
    y: -5,
    boxShadow: "0 10px 30px -5px rgba(59, 130, 246, 0.15)",
    borderColor: "rgb(147, 197, 253)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  };

  const iconVariants = {
    rest: { 
      y: 0,
      color: "rgb(100, 116, 139)" // slate-500
    },
    hover: { 
      y: -6,
      color: "rgb(37, 99, 235)", // blue-600
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A showcase of the technologies I use to build and deploy modern web applications.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="mt-16 space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={categoryContainerVariants}
              custom={categoryIndex}
            >
              <motion.h3
                className="text-2xl font-bold text-center text-slate-900 mb-8"
                variants={categoryTitleVariants}
              >
                {category.title}
              </motion.h3>
              
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                variants={skillsGridVariants}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group relative flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl p-4 aspect-square transition-all duration-300 ease-in-out cursor-pointer"
                    variants={skillCardVariants}
                    whileHover={skillCardHover}
                    initial="rest"
                    animate="rest"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-12 h-12 transition-all duration-300"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      {skill.icon}
                    </motion.div>
                    <motion.span
                      className="font-semibold mt-3 text-center text-slate-600 transition-all duration-300 group-hover:text-slate-900"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.05 + 0.3,
                        duration: 0.4
                      }}
                      viewport={{ once: true }}
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
 