"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = () => {
    return (
        <nav className='flex justify-center items-center backdrop-blur-sm bg-gray-900 '>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className='flex justify-center items-center  text-xl bold h-16 mt-5 '>
                <div className='px-4 rounded-3xl bg-gray-500'>
                    <ul className='flex items-center gap-8 h-16'>
                        <li>
                            <Link href="/" className='nav-link'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className='nav-link'>
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link href="/project" className='nav-link'>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className='nav-link'>
                                Contact Me
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className='nav-link'>
                                Services
                            </Link>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </nav>
    )
}

export default Navbar
