"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname();
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
                            <Link href="/" className={`nav-link${pathname === '/' ? ' text-white ' : ''}`}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className={`nav-link${pathname === '/about' ? ' text-white ' : ''}`}>
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link href="/project" className={`nav-link${pathname === '/project' ? ' text-white ' : ''}`}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className={`nav-link${pathname === '/contact' ? ' text-white ' : ''}`}>
                                Contact Me
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className={`nav-link${pathname === '/services' ? ' text-white ' : ''}`}>
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
