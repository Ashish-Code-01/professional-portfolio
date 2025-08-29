"use client"
import React from 'react'
import { motion } from 'framer-motion' // Import motion

export const plans = [
    {
        name: "Basic",
        price: "$29",
        features: [
            "1 Page Website",
            "5 Days Delivery",
            "2 Revisions",
            "Responsive Design",
            "Basic SEO"
        ]
    },
    {
        name: "Standard",
        price: "$59",
        features: [
            "5 Pages Website",
            "7 Days Delivery",
            "5 Revisions",
            "Responsive Design",
            "Advanced SEO",
            "Social Media Integration",
            "Contact Form"
        ]
    },
    {
        name: "Extreme",
        price: "$99",
        features: [
            "10+ Pages Website",
            "14 Days Delivery",
            "Unlimited Revisions",
            "Responsive Design",
            "Premium SEO",
            "Social Media Integration",
            "Contact Form",
            "Analytics Integration",
            "E-commerce Features",
            "Custom Animations"
        ]
    }
]

const Page = () => { // Renamed from 'page' to 'Page' for convention
    const handleWhatsApp = (planName) => {
        const phoneNumber = "+917385971824"; // Replace with your WhatsApp number
        const message = `Hi, I'm interested in the ${planName} plan for web development services.`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };



    // Framer Motion Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2 // Stagger the animation of each card
            }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        },
        hover: {
            scale: 1.05, // Slightly enlarge on hover
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)", // Add shadow on hover
            transition: { duration: 0.2 }
        }
    };

    const headingVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0px 0px 15px rgba(147, 51, 234, 0.6)", // Purple shadow
            transition: { duration: 0.2 }
        },
        tap: {
            scale: 0.95
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto ">
                <motion.h2
                    className="text-3xl font-extrabold text-white text-center mb-12"
                    initial="hidden"
                    animate="visible"
                    variants={headingVariants}
                >
                    Our Services
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
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
        </div>
    );
};

export default Page;