"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion' // Import motion

export const projects = [
    {
        title: "Blog Space",
        description: "Blog Space is a blogging platform where users can create, read, and share blog posts. It features user authentication, post creation, and a clean UI.",
        image: '/asset/projectIMG/blogspace.png',
        technologies: ["React", "Next.js", "Tailwind CSS", "vercel", "typescript"],
        githubUrl: "https://github.com/Ashish-Code-01",
        liveUrl: "https://blog-space-five.vercel.app/"
    },
    {
        title: "Job Portal",
        description: "Job Portal is a web application that connects job seekers with employers. It allows users to post jobs, apply for jobs, and manage their profiles. It features user authentication, job creation, and a clean UI",
        image: '/asset/projectIMG/jobportal.png',
        technologies: ["React", "mongo DB", "Tailwind CSS", "netlify", "render", "express", "node.js"],
        githubUrl: "https://github.com/Ashish-Code-01",
        liveUrl: "https://job-portal-990.netlify.app/"
    },
    {
        title: "Wallpaper Library",
        description: "Wallpaper Library is a web application that allows users to browse and download high-quality wallpapers. It features a clean UI, search functionality, and a responsive design. It features user authentication for uploading wallpapers.",
        image: '/asset/projectIMG/wallpaperlibrary.png',
        technologies: ["React", "mongo DB", "Tailwind CSS", "netlify", "render", "express", "node.js"],
        githubUrl: "https://github.com/Ashish-Code-01",
        liveUrl: "https://wallpaperlibrary.netlify.app/"
    },
    {
        title: "Trend Influncer",
        description: "Trend Influencer is a modern marketing agency website designed to connect brands with top social media influencers. It features a sleek, responsive UI, showcases influencer portfolios, and provides tools for campaign management and analytics. The platform streamlines collaboration between brands and influencers, making it easy to launch and track successful marketing campaigns.",
        image: '/asset/projectIMG/trendinfluencer.png',
        technologies: ["Html", "Css", "JS", "React", "netlify"],
        githubUrl: "https://github.com/Ashish-Code-01",
        liveUrl: "https://trend-influnce-marcketing-agency.netlify.app/"
    },
    {
        title: "Protfolio",
        description: "A personal portfolio showcases your skills, experiences, and achievements. It's a curated collection of your best work, demonstrating your capabilities to potential employers, clients, or collaborators. It highlights your unique value proposition and career journey.",
        image: '/asset/projectIMG/portfolio.png',
        technologies: ["React", "frammer", "JS", "Tailwind CSS"],
        githubUrl: "https://github.com/Ashish-Code-01",
        liveUrl: "https://ashish-portfolio-01.netlify.app/"
    },
    {
        title: "Guess the Word",
        description: "Guess the Word is a word puzzle where players deduce a hidden word by suggesting letters based on clues like word length. Correct guesses reveal letter positions, while incorrect ones may incur penalties. The game ends upon correctly guessing the word or exhausting attempts.",
        image: '/asset/projectIMG/guesstheword.png',
        technologies: ["Html", "Css", "JS", "netlify"],
        githubUrl: "https://github.com/Ashish-Code-01",
        liveUrl: "https://guess-theword-game.netlify.app/"
    },
    {
        title: "Camvas Game",
        description: "Canvas Game is a simple game built using HTML5 Canvas. It features a player that can move around the canvas and interact with objects. It showcases basic game mechanics and animations.",
        image: '/asset/projectIMG/canvasgame.png',
        technologies: ["Html", "Css", "JS", "netlify"],
        githubUrl: "https://github.com/Ashish-Code-01",
        liveUrl: "https://canvas-game-1.netlify.app/"
    },
    {
        title: "Pixel Art",
        description: "A pixel art generator transforms images or user inputs into pixelated artwork. It simplifies details, creating retro-style graphics with distinct, blocky pixels. These tools often offer customization over resolution and color palettes for unique pixel art creations.",
        image: '/asset/projectIMG/pixelart.png',
        technologies: ["Html", "Css", "JS", "netlify"],
        githubUrl: "https://github.com/Ashish-Code-01",
        liveUrl: "https://pixelartgenerator2.netlify.app/"
    },
    {
        title: "QR Generator",
        description: "A QR code generator creates scannable two-dimensional barcodes. These codes store information like website links, text, or contact details. Scanning the QR code with a device quickly directs users to the embedded data, simplifying information sharing and access.",
        image: '/asset/projectIMG/qr_generator.png',
        technologies: ["Html", "Css", "JS", "netlify"],
        githubUrl: "https://github.com/Ashish-Code-01",
        liveUrl: "https://qr-generatore.netlify.app/"
    },
    {
        title: "Text Encryptor",
        description: "A text encryptor converts readable text into an unreadable format (ciphertext) using an algorithm. This process secures sensitive information, making it incomprehensible to unauthorized individuals. Decryption reverses this process, restoring the original text with the correct key.",
        image: '/asset/projectIMG/textencrypt.png',
        technologies: ["Html", "Css", "JS", "netlify"],
        githubUrl: "https://github.com/Ashish-Code-01",
        liveUrl: "https://text-encryptere.netlify.app/"
    },

    {
        title: "O X Game",
        description: "O X Game is a classic tic-tac-toe game where two players take turns marking spaces in a 3×3 grid with X or O. The first player to align three of their marks horizontally, vertically, or diagonally wins. The game features a simple, interactive interface and is great for quick, casual play.",
        image: '/asset/projectIMG/x_o_game.png',
        technologies: ["Html", "Css", "JS", "netlify"],
        githubUrl: "https://github.com/Ashish-Code-01",
        liveUrl: "https://trend-influnce-marcketing-agency.netlify.app/" // Note: This URL seems to be the same as 'Trend Influencer'. You might want to update it.
    },
]

const ProjectPage = () => {
    // Variants for the main container to stagger children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Delay between each project card animation
            }
        }
    };

    // Variants for individual project cards
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            }
        },
        hover: {
            scale: 1.03, // Slight scale up on hover
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Subtle shadow
            transition: { duration: 0.2 }
        }
    };

    // Variants for the heading
    const headingVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <main className="min-h-screen bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-12"
                    initial="hidden"
                    animate="visible"
                    variants={headingVariants}
                >
                    My Projects
                </motion.h1>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants} // Apply stagger to the grid container
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform transition-all duration-300 p-2.5 cursor-pointer"
                            variants={cardVariants} // Apply card animation variants
                            whileHover="hover" // Apply hover animation
                            // These properties make the animation run when the component enters the viewport
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }} // Animate once, when 30% of the item is visible
                        >
                            <div className="relative h-48">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="rounded-2xl object-cover" // Added object-cover for better image fitting
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize image loading
                                    priority={index < 3} // Prioritize loading for the first few images
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, i) => (
                                        <motion.span
                                            key={i}
                                            className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.4)' }} // Hover effect on tags
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <motion.a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaGithub />
                                        Source
                                    </motion.a>
                                    <motion.a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaExternalLinkAlt />
                                        Live Demo
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </main>
    )
}

export default ProjectPage