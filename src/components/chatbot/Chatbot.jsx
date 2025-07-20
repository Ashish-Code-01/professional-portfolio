"use client";
import React, { useState } from 'react';
import { Chatbot as ChatbotKit } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import { FaComments } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion'; 

const Chatbot = () => {
  const [showBot, setShowBot] = useState(false);

  const toggleBot = () => {
    setShowBot(!showBot);
  };

  // Animation variants
  const buttonVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 }
    },
    hover: { scale: 1.1, rotate: 5 },
    tap: { scale: 0.9 }
  };

  const chatbotVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        duration: 0.4
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="chatbot-container">
      <AnimatePresence>
        {showBot && (
          <motion.div
            className="chatbot-box"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={chatbotVariants}
          >
            <ChatbotKit
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        className="chatbot-button"
        onClick={toggleBot}
        aria-label="Toggle chatbot"
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
      >
        <FaComments size={24} />
      </motion.button>
    </div>
  );
};

export default Chatbot;