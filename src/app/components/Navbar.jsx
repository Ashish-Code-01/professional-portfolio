"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Me" },
        { href: "/project", label: "Projects" },
        { href: "/contact", label: "Contact Me" },
        { href: "/services", label: "Services" },
    ];

    return (
        <nav className="relative flex justify-center items-center backdrop-blur-sm bg-gray-900 w-full z-50">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex justify-center items-center text-xl font-bold h-16 w-full max-w-5xl"
            >
                {/* Hamburger for mobile */}
                <div className="absolute left-4 md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex flex-col justify-center items-center w-10 h-10"
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <span
                            className={`block w-7 h-1 bg-white mb-1 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        ></span>
                        <span
                            className={`block w-7 h-1 bg-white mb-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                                }`}
                        ></span>
                        <span
                            className={`block w-7 h-1 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        ></span>
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="px-4 rounded-3xl bg-gray-500 hidden md:block">
                    <ul className="flex items-center gap-8 h-16">
                        {links.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`transition-colors ${pathname === href
                                            ? "text-white font-semibold"
                                            : "text-gray-300 hover:text-white"
                                        }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-gray-500 rounded-b-3xl md:hidden z-40">
                        <ul className="flex flex-col items-center gap-6 py-6">
                            {links.map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className={`transition-colors ${pathname === href
                                                ? "text-white font-semibold"
                                                : "text-gray-300 hover:text-white"
                                            }`}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </motion.div>
        </nav>
    );
};

export default Navbar;
