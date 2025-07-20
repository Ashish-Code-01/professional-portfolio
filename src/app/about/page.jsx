"use client"
import React from 'react'
import Image from 'next/image'
import { FaCode, FaServer, FaDatabase, FaMobileAlt, FaJs } from 'react-icons/fa'
import { SiCplusplus } from 'react-icons/si'
import profile_photo from "../../../public/asset/profilephoto.jpg"
import { motion } from 'framer-motion' // Import motion

const AboutPage = () => {
    const skills = [
        { name: 'Frontend Development', icon: <FaCode size={24} />, description: 'HTML, CSS, JavaScript, React.js, Next.js' },
        { name: 'Backend Development', icon: <FaServer size={24} />, description: 'Node.js, Express.js' },
        { name: 'Database Management', icon: <FaDatabase size={24} />, description: 'MongoDB' },
        { name: 'Mobile Development', icon: <FaMobileAlt size={24} />, description: 'React Native, Expo' },
    ]

    const Programinglanuage = [
        { name: 'JavaScript', icon: <FaJs size={24} />, description: 'Advanced' },
        { name: 'C++', icon: <SiCplusplus size={24} />, description: 'Intermediate' },
        { name: 'Python', icon: <span className="text-yellow-400 font-bold text-2xl">Py</span>, description: 'Intermediate' }
    ]

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Stagger children animations
            }
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                when: "beforeChildren", // Animate parent before children
                staggerChildren: 0.1,
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.03,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.2 }
        }
    };

    return (
        <motion.main
            className="min-h-screen bg-gray-900 text-white py-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto px-4">
                {/* Hero Section */}
                <motion.section
                    className="mb-16"
                    variants={sectionVariants}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-6"
                        variants={textVariants}
                    >
                        About Me
                    </motion.h1>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <motion.div className="flex-1" variants={containerVariants}>
                            <motion.p
                                className="text-gray-300 text-lg mb-4"
                                variants={textVariants}
                            >
                                Hi, I'm Ashish Vishwakarama, a passionate Full Stack Developer based in India. I specialize in building exceptional websites, applications, and everything in between.
                            </motion.p>
                            <motion.p
                                className="text-gray-300 text-lg mb-4"
                                variants={textVariants}
                            >
                                With over 3 years of experience in web development, I've worked on various projects ranging from small business websites to complex web applications.
                            </motion.p>
                            <motion.p
                                className="text-gray-300 text-lg"
                                variants={textVariants}
                            >
                                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blogs.
                            </motion.p>
                        </motion.div>
                        <motion.div
                            className="relative w-full md:w-1/3 aspect-square"
                            variants={imageVariants}
                        >
                            <Image
                                src={profile_photo}
                                alt="Ashish Vishwakarama"
                                fill
                                className="rounded-2xl object-cover"
                                priority // Improves LCP for this important image
                            />
                        </motion.div>
                    </div>
                </motion.section>

                {/* Skills Section */}
                <motion.section
                    className="mt-16"
                    variants={sectionVariants}
                >
                    <motion.h2
                        className="text-3xl font-bold mb-8"
                        variants={textVariants}
                    >
                        My Skills
                    </motion.h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants} // Stagger for skill cards
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm"
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <div className="text-blue-500 mb-4">{skill.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                                <p className="text-gray-400">{skill.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.h2
                        className="text-3xl font-bold mt-8 mb-8"
                        variants={textVariants}
                    >
                        Programming Language
                    </motion.h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants} // Stagger for language cards
                    >
                        {Programinglanuage.map((lang, index) => (
                            <motion.div
                                key={index}
                                className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm"
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <div className="text-blue-500 mb-4">{lang.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{lang.name}</h3>
                                <p className="text-gray-400">{lang.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* Git & GitHub Section */}
                <motion.section
                    className="mt-16"
                    variants={sectionVariants}
                >
                    <motion.h2
                        className="text-3xl font-bold mb-8"
                        variants={textVariants}
                    >
                        Version Control
                    </motion.h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants} // Stagger for Git/GitHub cards
                    >
                        <motion.div
                            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm"
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <div className="text-blue-500 mb-4 text-3xl">
                                <span className="font-bold">Git</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Git</h3>
                            <p className="text-gray-400">Version control system for tracking changes in source code during software development.</p>
                        </motion.div>
                        <motion.div
                            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm"
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <div className="text-blue-500 mb-4 text-3xl">
                                <span className="font-bold">GitHub</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                            <p className="text-gray-400">Platform for hosting and collaborating on Git repositories, enabling open-source and team development.</p>
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* Education section */}
                <motion.section
                    className="mt-16"
                    variants={sectionVariants}
                >
                    <motion.h2
                        className="text-3xl font-bold mb-8"
                        variants={textVariants}
                    >
                        Education
                    </motion.h2>
                    <motion.div
                        className="space-y-8"
                        variants={containerVariants} // Stagger for education cards
                    >
                        <motion.div
                            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm"
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <h3 className="text-xl font-semibold text-blue-500">Degree Education (Bsc.Cs)</h3>
                            <p className="text-lg text-gray-300 mt-2">Seth M.K. Degree College of Science</p>
                            <p className="text-gray-400">2025 - 2028</p>
                            <p className="text-gray-400 mt-2">Percentage: On-Going</p>
                        </motion.div>

                        <motion.div
                            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm"
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <h3 className="text-xl font-semibold text-blue-500">Higher Secondary Education (12th)</h3>
                            <p className="text-lg text-gray-300 mt-2">Vidya Varidhi Vidalaya & jr. college, Mumbai</p>
                            <p className="text-gray-400">2024 - 2025</p>
                            <p className="text-gray-400 mt-2">Percentage: 53.33%</p>
                        </motion.div>

                        <motion.div
                            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm"
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <h3 className="text-xl font-semibold text-blue-500">Secondary Education (10th)</h3>
                            <p className="text-lg text-gray-300 mt-2">Sant leela Shaha High School & jr. college, Mumbai</p>
                            <p className="text-gray-400">2022 - 2023</p>
                            <p className="text-gray-400 mt-2">Percentage: 77.60%</p>
                        </motion.div>
                    </motion.div>
                </motion.section>
            </div>
        </motion.main>
    )
}

export default AboutPage