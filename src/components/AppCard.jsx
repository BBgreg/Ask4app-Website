import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiCalendar } = FiIcons;

const AppCard = ({ title, description }) => {
  const getAppPreview = () => {
    return (
      <div className="w-full mb-4 overflow-hidden rounded-xl">
        <div className="relative">
          {/* App Preview Images */}
          <div className="flex space-x-3 pb-4">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-1/2 rounded-xl overflow-hidden shadow-md"
            >
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752629171188-IMG_2543.jpg" 
                alt="Essential Memories app dashboard showing upcoming important dates calendar view" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-1/2 rounded-xl overflow-hidden shadow-md"
            >
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752629176414-IMG_2541.jpg" 
                alt="Essential Memories app flashcard interface for memorizing important dates" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
          
          {/* App Icon */}
          <div className="absolute -bottom-8 right-4 bg-white p-4 rounded-full shadow-lg">
            <div className="relative">
              <SafeIcon 
                icon={FiCalendar} 
                className="w-10 h-10 text-medium-blue" 
              />
              <SafeIcon 
                icon={FiHeart} 
                className="w-4 h-4 text-deep-blue absolute -top-1 -right-1" 
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
    >
      <div className="p-6">
        {getAppPreview()}
        
        <div className="mt-10 space-y-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-medium-blue transition-colors duration-200">
            Essential Memories
          </h3>
          
          <p className="text-gray-600 leading-relaxed">
            Essential Memories solves the common frustration of forgetting important dates (like birthdays and anniversaries) when it truly matters. Unlike traditional calendars that merely track, our app transforms passive reminders into active memory mastery. Through engaging flashcards, intelligent spaced repetition, and a daily 'Question of the Day,' users effortlessly memorize and confidently recall every significant date, ensuring they never miss celebrating what's truly essential.
          </p>
          
          <motion.a 
            href="https://essentialmemoriesapp.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-medium-blue text-white px-6 py-3 rounded-xl font-semibold hover:bg-deep-blue transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Try Essential Memories
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default AppCard;