"use client";
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { projects } from "@/app/project/page";
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
// Ensure this path is correct based on your file structure
import { plans } from './services/page';

export default function Home() {
  const el = useRef(null);
  const topProject = [projects[3], projects[1], projects[2]];

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Student', 'Web Developer', 'Software Engineer', 'App Developer'],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const handleWhatsApp = (planName) => {
    const phoneNumber = "+917385971824"; // Replace with your WhatsApp number
    const message = `Hi, I'm interested in the ${planName} plan for web development services.`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 8px rgb(168, 85, 247)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen relative overflow-hidden">
      <section className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center min-h-[700px] py-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
            <motion.h1 variants={itemVariants} className='text-5xl font-semibold mb-4'>
              Hi, I am <span className='text-purple-400 font-bold'>Ashish</span>
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl mb-6">
              I am a <span className="font-bold text-purple-400"><span ref={el} /></span>
            </motion.h2>
            <motion.p variants={itemVariants} className="mb-8 text-lg text-gray-300">
              I build modern, responsive web applications and love turning ideas into reality through code. Explore my work, skills, and journey below!
            </motion.p>
            <motion.div variants={itemVariants} className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4'>
              <motion.a
                href="/about"
                className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold"
                variants={buttonVariants}
                whileHover="hover"
              >
                About Me
              </motion.a>
              <motion.a
                href="/project"
                className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold"
                variants={buttonVariants}
                whileHover="hover"
              >
                View My Projects
              </motion.a>
            </motion.div>
          </div>
          <motion.div
            className="w-full mb-8 lg:mb-0 lg:w-1/2 flex justify-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 10, delay: 0.5 }}
          >
            {/* Added relative and z-10 to the image wrapper for better styling and layering */}
            <div className="relative h-[400px] w-[400px] rounded-2xl overflow-hidden shadow-lg border-4 border-purple-600">
              <Image
                src="/asset/profilephoto.jpg"
                alt="Ashish Profile"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold">Top Projects</h2>
            <p className="mt-4 text-lg text-gray-300">Check out my most popular Projects</p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {topProject.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 rounded-2xl overflow-hidden shadow-xl border border-purple-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full max-w-md flex flex-col cursor-pointer"
                variants={cardVariants}
                whileHover={{ scale: 1.03 }} // Add a subtle hover effect
              >
                <div className="relative h-60 w-full ">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="rounded-t-2xl object-cover hover:brightness-90 transition duration-300" // Apply rounded-t-2xl here
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <FaGithub />
                      Source
                    </Link>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-gray-300">Hear from our satisfied customers</p>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Testimonial 1 */}
            <motion.div variants={cardVariants} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-gray-800/50 rounded-lg shadow-lg border border-purple-600 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-300">"This service has been a game-changer for our business. Highly recommend!"</p>
                <h3 className="mt-4 text-xl font-semibold text-purple-400">Sharad</h3>
                <p className="text-gray-400">Founder, Trend Influencer marketing Agency</p>
              </div>
            </motion.div>
            {/* Testimonial 2 */}
            <motion.div variants={cardVariants} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-gray-800/50 rounded-lg shadow-lg border border-purple-600 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-300">"Amazing experience! The team was professional and the results were outstanding."</p>
                <h3 className="mt-4 text-xl font-semibold text-purple-400">Shweeta</h3>
                <p className="text-gray-400">Marketing Director, AquaShi - Mineral water Company</p>
              </div>
            </motion.div>
            {/* Testimonial 3 */}
            <motion.div variants={cardVariants} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-gray-800/50 rounded-lg shadow-lg border border-purple-600 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-300">"Exceptional service and support. We couldn't be happier with the results."</p>
                <h3 className="mt-4 text-xl font-semibold text-purple-400">Amit</h3>
                <p className="text-gray-400">Founder, Mahadev Enterprises</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold">Pricing Plans</h2>
            <p className="mt-4 text-lg text-gray-300">Choose the plan that suits you best</p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center" // Changed to grid for better control over spacing/alignment
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                // Changed background to dark gray, added border for consistency
                className="p-6 bg-gray-800/50 rounded-lg shadow-lg text-center flex flex-col justify-between border transform transition duration-500 border-purple-600 w-full max-w-sm hover:scale-105"
                variants={cardVariants}
                whileHover="hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div> {/* Wrapper for content above button */}
                  <h3 className="text-2xl font-semibold text-purple-400">{plan.name}</h3>
                  <p className="mt-4 text-gray-200 text-3xl font-bold">{plan.price}</p>
                  <ul className="mt-6 mb-6 space-y-3 text-gray-300"> {/* Adjusted text color for features */}
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <motion.button
                  onClick={() => handleWhatsApp(plan.name)}
                  className="mt-auto inline-block px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Choose Plan
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <div className='flex justify-center text-center mt-8 pb-16'> {/* Added pb-16 for padding at the bottom */}
        <motion.a
          href="/contact"
          className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors" // Made button larger and bolder
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Get in Touch!
        </motion.a>
      </div>
    </main>
  );
}