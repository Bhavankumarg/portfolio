'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiCode } from 'react-icons/hi';
import { FaReact, FaNodeJs, FaGithub, FaAws, FaUbuntu } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiJavascript, SiNextdotjs, SiBootstrap, SiAdobexd, SiNestjs, SiPostgresql, SiNginx } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';

const skills = [
    { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5 sm:w-6 sm:h-6" />, color: "from-white/40 to-white/0", size: "col-span-2 sm:col-span-1 md:col-span-2 row-span-1" },
    { name: "React.js", icon: <FaReact className="w-5 h-5 sm:w-6 sm:h-6" />, color: "from-cyan-400/40 to-cyan-400/0", size: "col-span-1 row-span-1" },
    { name: "JavaScript", icon: <SiJavascript className="w-5 h-5 sm:w-6 sm:h-6" />, color: "from-yellow-400/40 to-yellow-400/0", size: "col-span-1 row-span-1" },
    { name: "Node.js", icon: <FaNodeJs className="w-5 h-5 sm:w-6 sm:h-6" />, color: "from-green-500/40 to-green-500/0", size: "col-span-1 row-span-1" },
    { name: "NestJS", icon: <SiNestjs className="w-5 h-5 sm:w-6 sm:h-6" />, color: "from-rose-500/40 to-rose-500/0", size: "col-span-1 row-span-1" },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5 sm:w-6 sm:h-6" />, color: "from-sky-500/40 to-sky-500/0", size: "col-span-2 sm:col-span-1 md:col-span-2 row-span-1" },
    { name: "AWS", icon: <FaAws className="w-5 h-5 sm:w-6 sm:h-6" />, color: "from-orange-400/40 to-orange-400/0", size: "col-span-1 row-span-1" },
    { name: "Nginx", icon: <SiNginx className="w-5 h-5 sm:w-6 sm:h-6" />, color: "from-emerald-500/40 to-emerald-500/0", size: "col-span-1 row-span-1" },
    { name: "Ubuntu", icon: <FaUbuntu className="w-5 h-5 sm:w-6 sm:h-6" />, color: "from-orange-500/40 to-orange-500/0", size: "col-span-1 row-span-1" },
    { name: "Tailwind", icon: <SiTailwindcss className="w-5 h-5 sm:w-6 sm:h-6" />, color: "from-cyan-500/40 to-cyan-500/0", size: "col-span-2 sm:col-span-1 md:col-span-2 row-span-1" },
    { name: "Bootstrap", icon: <SiBootstrap className="w-5 h-5 sm:w-6 sm:h-6" />, color: "from-purple-500/40 to-purple-500/0", size: "col-span-1 row-span-1" },
    { name: "Framer Motion", icon: <TbBrandFramerMotion className="w-5 h-5 sm:w-6 sm:h-6" />, color: "from-pink-500/40 to-pink-500/0", size: "col-span-1 row-span-1" },
    { name: "GitHub", icon: <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />, color: "from-white/40 to-white/0", size: "col-span-1 row-span-1" },
    { name: "Figma", icon: <SiFigma className="w-5 h-5 sm:w-6 sm:h-6" />, color: "from-fuchsia-500/40 to-fuchsia-500/0", size: "col-span-2 sm:col-span-1 md:col-span-2 row-span-1" },
    { name: "AdobeXD", icon: <SiAdobexd className="w-5 h-5 sm:w-6 sm:h-6" />, color: "from-rose-500/40 to-rose-500/0", size: "col-span-2 sm:col-span-1 md:col-span-2 row-span-1" },
];

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.2
        }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

const SkillCard = ({ skill }) => {
    const [pos, setPos] = useState({ x: 50, y: 50 });
    const [hovered, setHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setPos({ x, y });
    };

    return (
        <motion.div
            variants={itemAnimation}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`relative group ${skill.size}`}
        >
            <div
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="
                    bg-black
                    border-white/30
                    border
                    p-2.5 sm:p-4 md:p-6
                    rounded-lg sm:rounded-xl md:rounded-2xl
                    backdrop-blur-md
                    cursor-pointer
                    relative overflow-hidden
                    h-full w-full
                    min-h-[90px] sm:min-h-[120px]
                    flex flex-col items-center justify-center
                    box-border
                    shadow-[0_4px_6px_rgba(0,0,0,0.5),0_0_10px_rgba(255,255,255,0.05)]
                    transition-all duration-300
                    group-hover:border-white/60
                    group-hover:shadow-[0_4px_6px_rgba(0,0,0,0.5),0_0_25px_rgba(255,255,255,0.12)]
                "
                style={{
                    background: hovered
                        ? `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.08), rgba(0,0,0,1) 60%)`
                        : 'black',
                }}
            >
                {/* Tinted glow following cursor */}
                <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-radial ${skill.color}`}
                    style={{
                        background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, var(--tw-gradient-stops))`,
                    }}
                />

                {/* Shiny sweep on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shiny-sweep" />
                </div>

                {/* Glossy top shine */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl" />
                </div>

                <div className="relative flex flex-col items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 w-full z-10">
                    <div className="relative">
                        <motion.div
                            whileHover={{ rotate: [0, -8, 8, -4, 4, 0] }}
                            transition={{ duration: 0.6 }}
                            className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-md sm:rounded-lg md:rounded-xl bg-black border border-white/30 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:border-white/60 group-hover:shadow-white/20 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                        >
                            <div className="text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                                {skill.icon}
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col items-center gap-0.5 sm:gap-1 w-full px-0.5 sm:px-1">
                        <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-bold text-white text-center tracking-tight transition-all duration-300 group-hover:text-white break-words leading-tight">
                            {skill.name}
                        </span>
                        <div className="w-5 sm:w-6 md:w-8 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rounded-full transition-all duration-500 group-hover:w-full group-hover:via-white/80" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const SkillsShowcase = () => {
    return (
        <motion.div
            variants={containerAnimation}
            initial="hidden"
            animate="show"
            className="w-full mt-20"
        >
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <motion.div
                    variants={itemAnimation}
                    className="flex items-center gap-2 mb-8 sm:mb-12 justify-center"
                >
                    <div className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-primary backdrop-blur-sm shadow-lg">
                        <HiCode className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        <span className="text-xs sm:text-sm font-semibold text-primary">Tech Stack</span>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerAnimation}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 w-full"
                    style={{
                        gridAutoRows: 'minmax(90px, auto)',
                        gridAutoFlow: 'row dense'
                    }}
                >
                    {skills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SkillsShowcase;
