import React from 'react';
import { motion } from 'framer-motion';
import AppCard from './AppCard';

const AppShowcase = () => {
  const apps = [
    {
      id: 1,
      title: "Essential Memories",
      description: "Essential Memories solves the common frustration of forgetting important dates (like birthdays and anniversaries) when it truly matters. Unlike traditional calendars that merely track, our app transforms passive reminders into active memory mastery. Through engaging flashcards, intelligent spaced repetition, and a daily 'Question of the Day,' users effortlessly memorize and confidently recall every significant date, ensuring they never miss celebrating what's truly essential."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-soft-blue">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My App Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing real-world problems I've solved through custom applications built with innovative development techniques
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AppCard {...app} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;