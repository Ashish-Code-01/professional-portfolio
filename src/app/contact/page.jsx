"use client"
import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'
import Loader from '@/components/Loader'
import { motion } from 'framer-motion' // Import motion

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const phoneNumber = "917385971824"; // Your WhatsApp number
            const formattedMessage = `*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;

            // Open WhatsApp with pre-filled message
            window.open(whatsappURL, '_blank');

            // Reset form
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <Loader />;

    // Define animation variants for staggered appearance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const socialIconVariants = {
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } },
        hover: { scale: 1.2, color: '#3B82F6' } // Blue-500 equivalent
    };

    return (
        <motion.main
            className="min-h-screen bg-gray-900 text-white py-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto px-4">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-12"
                    variants={itemVariants}
                >
                    Contact Me
                </motion.h1>

                <motion.div
                    className="border border-gray-700 rounded-xl p-8 backdrop-blur-sm"
                    variants={itemVariants}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div variants={containerVariants}>
                            <motion.h2
                                className="text-2xl font-semibold mb-6"
                                variants={itemVariants}
                            >
                                Get in Touch
                            </motion.h2>
                            <motion.div className="space-y-6" variants={containerVariants}>
                                <motion.div className="flex items-center gap-4" variants={itemVariants}>
                                    <FaEnvelope className="text-blue-500 text-xl" />
                                    <motion.a
                                        href="mailto:ashu73859@duck.com"
                                        className="text-gray-300 hover:text-blue-500"
                                        whileHover={{ x: 5 }}
                                    >
                                        ashu73859@duck.com
                                    </motion.a>
                                </motion.div>
                                <motion.div className="flex items-center gap-4" variants={itemVariants}>
                                    <FaPhone className="text-blue-500 text-xl" />
                                    <motion.a
                                        href="tel:+917385971824"
                                        className="text-gray-300 hover:text-blue-500"
                                        whileHover={{ x: 5 }}
                                    >
                                        +91 7385971824
                                    </motion.a>
                                </motion.div>
                                <motion.div className="flex items-center gap-4" variants={itemVariants}>
                                    <FaMapMarkerAlt className="text-blue-500 text-xl" />
                                    <motion.span
                                        className="text-gray-300"
                                        variants={itemVariants}
                                    >
                                        Mumbai, Maharashtra, India
                                    </motion.span>
                                </motion.div>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div className="mt-8" variants={containerVariants}>
                                <motion.h2
                                    className="text-2xl font-semibold mb-8"
                                    variants={itemVariants}
                                >
                                    Connect With Me
                                </motion.h2>
                                <motion.div className="flex gap-4" variants={containerVariants}>
                                    <motion.a
                                        href="https://linkedin.com/in/yourusername"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 text-2xl"
                                        variants={socialIconVariants}
                                        whileHover="hover"
                                    >
                                        <FaLinkedin />
                                    </motion.a>
                                    <motion.a
                                        href="https://github.com/yourusername"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 text-2xl"
                                        variants={socialIconVariants}
                                        whileHover="hover"
                                    >
                                        <FaGithub />
                                    </motion.a>
                                    <motion.a
                                        href="https://twitter.com/yourusername"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 text-2xl"
                                        variants={socialIconVariants}
                                        whileHover="hover"
                                    >
                                        <FaTwitter />
                                    </motion.a>
                                    <motion.a
                                        href="https://instagram.com/yourusername"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 text-2xl"
                                        variants={socialIconVariants}
                                        whileHover="hover"
                                    >
                                        <FaInstagram />
                                    </motion.a>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                            variants={containerVariants}
                        >
                            <motion.div variants={itemVariants}>
                                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                                    placeholder="Your Name"
                                    required
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                                    placeholder="Your message here..."
                                    required
                                ></textarea>
                            </motion.div>
                            <motion.button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isLoading ? (
                                    <>
                                        <span className="animate-spin">⌛</span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FaPhone className="text-xl" />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </motion.form>
                    </div>
                </motion.div>
            </div>
        </motion.main>
    )
}

export default ContactPage