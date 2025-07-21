import React from 'react';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import CustomXLogo from './CustomXLogo';
import CustomTikTokLogo from './CustomTikTokLogo';
import CustomLinkedInLogo from './CustomLinkedInLogo';

const {FiInstagram, FiYoutube} = FiIcons;

const SocialMediaSection = () => {
  const socialLinks = [
    {
      icon: FiInstagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/ask4appco/',
      color: 'hover:bg-pink-500'
    },
    {
      customIcon: 'x',
      name: 'X (Twitter)',
      url: 'https://x.com/ask4appco',
      color: 'hover:bg-black'
    },
    {
      icon: FiYoutube,
      name: 'YouTube',
      url: 'https://www.youtube.com/@ask4appco',
      color: 'hover:bg-red-600'
    },
    {
      customIcon: 'tiktok',
      name: 'TikTok',
      url: 'http://www.tiktok.com/@ask4appco?_t=ZP-8yCl3sEyK9W&_r=1',
      color: 'hover:bg-black'
    },
    {
      customIcon: 'linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/benjaminwhead/',
      color: 'hover:bg-blue-700'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-t from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join the conversation and share your ideas!
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Connect with us on social media to submit your app ideas and see your solutions come to life
          </p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.2}}
          viewport={{once: true}}
          className="flex flex-wrap justify-center gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{opacity: 0, scale: 0.8}}
              whileInView={{opacity: 1, scale: 1}}
              transition={{duration: 0.3, delay: index * 0.1}}
              viewport={{once: true}}
              whileHover={{scale: 1.1, y: -5}}
              whileTap={{scale: 0.95}}
              className={`bg-white p-4 rounded-2xl shadow-lg ${social.color} hover:text-white transition-all duration-300 border border-gray-100 group`}
            >
              {social.customIcon === 'x' ? (
                <CustomXLogo className="w-8 h-8 text-medium-blue group-hover:text-white transition-colors duration-300" />
              ) : social.customIcon === 'tiktok' ? (
                <CustomTikTokLogo className="w-8 h-8 text-medium-blue group-hover:text-white transition-colors duration-300" />
              ) : social.customIcon === 'linkedin' ? (
                <CustomLinkedInLogo className="w-8 h-8 text-medium-blue group-hover:text-white transition-colors duration-300" />
              ) : (
                <SafeIcon
                  icon={social.icon}
                  className="w-8 h-8 text-medium-blue group-hover:text-white transition-colors duration-300"
                />
              )}
              <span className="sr-only">{social.name}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.4}}
          viewport={{once: true}}
          className="mt-12 bg-gradient-to-r from-medium-blue to-deep-blue rounded-2xl p-8 text-white shadow-xl"
        >
          <p className="text-lg md:text-xl font-medium mb-4">
            Ready to see what I can build?
          </p>
          <p className="text-medium-blue-100 opacity-90">
            Follow me on social media to see my latest app development projects and reach out if you have a problem that needs solving
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMediaSection;