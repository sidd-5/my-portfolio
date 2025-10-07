'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-10">
          {/* Left Column: Image */}
          <motion.div
            className="lg:col-span-1 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.2 
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 relative">
              <Image
                src="/myimg.jpg" // IMPORTANT: Replace with the path to your image in the /public folder
                alt="Siddhesh Chavan"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <motion.h2
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut" 
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              About Me
            </motion.h2>
            
            <div className="mt-6 space-y-6 text-lg text-slate-600">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut",
                  delay: 0.1 
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                I am a full-stack web developer with a passion for building dynamic, responsive, and user-friendly web applications. My expertise lies in architecting and developing robust solutions from end-to-end, ensuring seamless integration between the server-side logic and the user-facing experience.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut",
                  delay: 0.2 
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                With a strong command of modern technologies including <strong className="text-slate-700">React, Next.js,</strong> and <strong className="text-slate-700">Node.js</strong>, I excel at turning complex problems into elegant, high-performance code. I am dedicated to writing clean, maintainable, and scalable solutions that stand the test of time.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut",
                  delay: 0.3 
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Beyond the code, I am a continuous learner, always exploring new technologies and methodologies to stay at the forefront of web development. I thrive in collaborative environments and am committed to delivering excellence in every project I undertake.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
