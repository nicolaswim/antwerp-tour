"use client";

import { motion } from "framer-motion";

export default function Hero() {
    const scrollToTour = () => {
        const element = document.getElementById("tour-start");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center bg-[#121212] overflow-hidden">
            {/* Background Map - Stylized SVG */}
            <motion.div
                className="absolute inset-0 opacity-30 pointer-events-none"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <svg viewBox="0 0 800 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover md:object-contain">
                    <defs>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    {/* The River Scheldt - Lighter and more visible */}
                    <path d="M50,1000 C50,1000 0,600 150,400 C300,200 100,0 100,0" stroke="#525252" strokeWidth="150" fill="none" opacity="0.2" />
                    {/* City Blocks Abstract - Lighter Skeleton */}
                    <g id="city-blocks" fill="none" stroke="#A3A3A3" strokeWidth="1" opacity="0.4">
                        <rect x="250" y="100" width="100" height="150" rx="2" />
                        <rect x="400" y="120" width="150" height="100" rx="2" />
                        <rect x="550" y="300" width="150" height="150" rx="2" />
                        <rect x="250" y="300" width="100" height="100" rx="2" />
                        <rect x="400" y="500" width="200" height="150" rx="2" />
                        <rect x="200" y="500" width="150" height="300" rx="2" />
                    </g>
                    {/* Golden Route */}
                    <motion.path
                        d="M625,375 L450,375 L300,350 L275,325 L250,350 L350,200 L350,150 L350,600 L350,850"
                        stroke="#C5A065"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
                    />
                    {/* Pins */}
                    <circle cx="625" cy="375" r="4" fill="#C5A065" />
                    <circle cx="350" cy="850" r="4" fill="#C5A065" />
                </svg>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <motion.h1
                    className="font-serif text-5xl md:text-8xl font-bold mb-4 tracking-widest text-[#F0F0F0] drop-shadow-2xl"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    ANTWERP
                </motion.h1>

                <motion.p
                    className="font-serif italic text-2xl md:text-3xl text-[#8C4B3F] mb-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    The Drama of the Flesh
                </motion.p>

                <motion.button
                    onClick={scrollToTour}
                    className="group relative px-8 py-3 bg-transparent border border-[#C5A065] text-[#C5A065] font-sans tracking-[0.2em] uppercase text-sm hover:bg-[#C5A065] hover:text-[#0D1014] transition-all duration-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Begin The Descent
                </motion.button>
            </div>
        </section>
    );
}
