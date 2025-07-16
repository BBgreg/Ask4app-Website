import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-soft-blue via-light-blue to-medium-blue flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-blue-100/60 to-blue-200/40"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 tracking-tight"
        >
          ask4app
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium"
        >
          you ask, i make
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
        >
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
            <span className="font-semibold text-medium-blue">Comment</span> your problem or app idea and I will create your solution
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;