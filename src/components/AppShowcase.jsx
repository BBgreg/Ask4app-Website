import React from 'react';
import {motion} from 'framer-motion';
import AppCard from './AppCard';

const AppShowcase = () => {
  const apps = [
    {
      id: 0,
      title: "Digit Fun",
      description: "Digit Fun tackles the modern problem of forgetting essential phone numbers (like family or emergency contacts) when your phone isn't available. Unlike standard contact lists that foster passive reliance, this app transforms vital number recall into an active, enjoyable challenge. Through engaging game modes, users effortlessly train their memory and confidently recall every crucial digit, ensuring they're always prepared and never left stranded.",
      images: [
        "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752909707111-IMG_2603.jpg",
        "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752909712876-IMG_2602.jpg"
      ],
      appUrl: "https://digitfun.ask4appco.com",
      icon: "FiPhone"
    },
    {
      id: 1,
      title: "Essential Memories",
      description: "Essential Memories solves the common frustration of forgetting important dates (like birthdays and anniversaries) when it truly matters. Unlike traditional calendars that merely track, our app transforms passive reminders into active memory mastery. Through engaging flashcards and intelligent reminders' users effortlessly memorize and confidently recall every significant date, ensuring they never miss celebrating what's truly essential.",
      images: [
        "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753074669253-IMG_2608.jpg",
        "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753074673836-IMG_2609.jpg"
      ],
      appUrl: "https://essentialmemories.ask4appco.com",
      icon: "FiCalendar"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-soft-blue">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
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
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.1}}
              viewport={{once: true}}
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