"use client"
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion' 

const Footer = () => {

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
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const socialIconVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300 } },
    };

    return (
        <motion.footer
            className="bg-gray-900 text-gray-300"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: true, amount: 0.3 }} 
        >
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-bold text-white">Ashish Vishwakarama</h3>
                        <p className="text-sm">Full Stack Developer</p>
                    </motion.div>
                    <motion.div className="flex gap-6" variants={containerVariants}> 
                        <motion.div variants={itemVariants}>
                            <Link href="/" className="hover:text-blue-500 transition-colors">
                                Home
                            </Link>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Link href="/about" className="hover:text-blue-500 transition-colors">
                                About
                            </Link>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Link href="/project" className="hover:text-blue-500 transition-colors">
                                Projects
                            </Link>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Link href="/contact" className="hover:text-blue-500 transition-colors">
                                Contact
                            </Link>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Link href="/services" className="hover:text-blue-500 transition-colors">
                                Services
                            </Link>
                        </motion.div>
                    </motion.div>
                    <motion.div className="flex gap-4" variants={containerVariants}> 
                        <motion.a
                            href="https://github.com/Ashish-Code-01"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition-colors"
                            aria-label="GitHub"
                            variants={socialIconVariants}
                        >
                            <FaGithub size={24} />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition-colors"
                            aria-label="LinkedIn"
                            variants={socialIconVariants}
                        >
                            <FaLinkedin size={24} />
                        </motion.a>
                        <motion.a
                            href="https://twitter.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition-colors"
                            aria-label="Twitter"
                            variants={socialIconVariants}
                        >
                            <FaTwitter size={24} />
                        </motion.a>
                        <motion.a
                            href="https://instagram.com/ashish_s_vishw.akarma"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition-colors"
                            aria-label="Instagram"
                            variants={socialIconVariants}
                        >
                            <FaInstagram size={24} />
                        </motion.a>
                    </motion.div>
                </div>
                <motion.div
                    className="mt-8 pt-8 border-t border-gray-800 text-center"
                    variants={itemVariants}
                >
                    <p className="text-sm">
                        © {new Date().getFullYear()} Ashish Vishwakarama. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    )
}

export default Footer