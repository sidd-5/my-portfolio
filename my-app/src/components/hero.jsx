"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import codingAnimation from "../assets/coding.json";

export default function Hero() {
  // Animation variants for reusability
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const animationVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <motion.div
      id="hero"
      className="bg-slate-50 min-h-screen pl-20 pr-20 mx-auto flex flex-col md:flex-row items-center justify-center py-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left Content */}
      <div className="md:w-1/2 md:pr-10 text-center md:text-left">
        <motion.h1
          className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
          variants={itemVariants}
        >
          Building Scalable Web Solutions from Concept to Cloud.
        </motion.h1>
        
        <motion.p
          className="text-slate-600 mt-4 text-sm sm:text-base lg:text-lg"
          variants={itemVariants}
        >
          I'm a full-stack developer specializing in creating high-performance,
          resilient applications with Next.js, React and Node.js. From
          architecting RESTful APIs and managing databases to deploying
          solutions, I deliver clean code and end-to-end systems that drive
          business growth.
        </motion.p>
        
        <motion.div
          className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 p-3 px-6 rounded-xl text-white text-sm sm:text-base transition-colors"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            View my work
          </motion.a>
          <motion.a
            href="#contact"
            className="bg-slate-100 hover:bg-slate-200 border border-slate-300 p-3 px-6 rounded-xl text-slate-600 text-sm sm:text-base transition-colors"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Get in touch
          </motion.a>
        </motion.div>
      </div>

      {/* Right Side Animation */}
      <motion.div
        className="md:w-1/2 flex justify-center mt-10 md:mt-0"
        variants={animationVariants}
      >
        <div className="w-[80%] sm:w-[60%] md:w-full max-w-md">
          <Lottie animationData={codingAnimation} loop={true} />
        </div>
      </motion.div>
    </motion.div>
  );
}
