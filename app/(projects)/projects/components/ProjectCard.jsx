"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { itemAnimation } from './Animations';

export const ProjectCard = ({ project, index }) => {
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
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group relative flex flex-col sm:flex-row items-stretch gap-6 bg-secondary/5 hover:bg-secondary/10 p-4 rounded-xl transition-colors duration-300 border border-white/5 hover:border-white/20 overflow-hidden"
            style={{
                background: hovered
                    ? `radial-gradient(500px circle at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.06), transparent 40%), rgba(255,255,255,0.02)`
                    : undefined,
            }}
        >
            <div className="sm:w-1/3 relative z-10">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shiny-sweep" />
                    </div>
                </div>
            </div>

            <div className="sm:w-2/3 flex flex-col justify-between py-2 relative z-10">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-primary group-hover:translate-x-1 transition-transform duration-300">
                            {project.title}
                        </h3>
                        <span className="text-xs text-muted-foreground">
                            #{String(index + 1).padStart(2, '0')}
                        </span>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, idx) => (
                            <motion.span
                                key={idx}
                                whileHover={{ scale: 1.08, y: -2 }}
                                transition={{ type: "spring", stiffness: 400 }}
                                className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary cursor-default hover:bg-primary/20 transition-colors"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-3 pt-4">
                    <Button
                        size="sm"
                        className="rounded-full h-8 px-4 text-xs"
                        asChild
                    >
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 group/btn"
                        >
                            Live Demo
                            <FaExternalLinkAlt className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};
