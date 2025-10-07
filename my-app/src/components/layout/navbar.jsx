"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll function
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // Close mobile menu after clicking
    setIsOpen(false);
  };

  return (
    <nav className="bg-white text-slate-800 h-20 w-full flex items-center justify-between px-6 shadow-sm ">
      {/* Logo */}
      <div className="text-lg font-bold text-slate-900">Siddhesh Chavan</div>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 font-medium">
        <a 
          href="#hero" 
          onClick={(e) => handleSmoothScroll(e, 'hero')}
          className="cursor-pointer text-slate-600 hover:text-blue-600 transition-colors"
        >
          Home
        </a>
        <a 
          href="#about" 
          onClick={(e) => handleSmoothScroll(e, 'about')}
          className="cursor-pointer text-slate-600 hover:text-blue-600 transition-colors"
        >
          About
        </a>
        <a 
          href="#projects" 
          onClick={(e) => handleSmoothScroll(e, 'projects')}
          className="cursor-pointer text-slate-600 hover:text-blue-600 transition-colors"
        >
          Projects
        </a>
        <a 
          href="#skills" 
          onClick={(e) => handleSmoothScroll(e, 'skills')}
          className="cursor-pointer text-slate-600 hover:text-blue-600 transition-colors"
        >
          Skills
        </a>
        <a 
          href="#contact" 
          onClick={(e) => handleSmoothScroll(e, 'contact')}
          className="cursor-pointer text-slate-600 hover:text-blue-600 transition-colors"
        >
          Contact
        </a>
      </ul>
      
      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <div className="w-6 h-0.5 bg-slate-700 mb-1"></div>
          <div className="w-6 h-0.5 bg-slate-700 mb-1"></div>
          <div className="w-6 h-0.5 bg-slate-700"></div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-slate-50 shadow-md  md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-6 font-medium">
            <li 
              onClick={(e) => handleSmoothScroll(e, 'hero')}
              className="cursor-pointer text-slate-600 hover:text-blue-600 transition-colors"
            >
              Home
            </li>
            <li 
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="cursor-pointer text-slate-600 hover:text-blue-600 transition-colors"
            >
              About
            </li>
            <li 
              onClick={(e) => handleSmoothScroll(e, 'projects')}
              className="cursor-pointer text-slate-600 hover:text-blue-600 transition-colors"
            >
              Projects
            </li>
            <li 
              onClick={(e) => handleSmoothScroll(e, 'skills')}
              className="cursor-pointer text-slate-600 hover:text-blue-600 transition-colors"
            >
              Skills
            </li>
            <li 
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="cursor-pointer text-slate-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
