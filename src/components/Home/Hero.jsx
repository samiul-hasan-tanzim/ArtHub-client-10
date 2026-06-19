'use client'

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { playfair } from "@/lib/fonts";
import Image from "next/image";

const artworks = [
    { id: 1, img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5" },
    { id: 2, img: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968" },
    { id: 3, img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b" }
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Hero = () => {
    return (
        <section className="min-h-[92vh] flex items-center">
            <div className="w-11/12 mx-auto grid lg:grid-cols-2 gap-14 items-center">

                <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
                    <motion.span variants={item} className="text-xs tracking-[0.25em] font-semibold text-amber-500 block mb-6">
                        EST. 2024 — CONTEMPORARY COLLECTIVE
                    </motion.span>

                    <motion.h1 variants={item} className={`${playfair.className} text-6xl md:text-8xl lg:text-[8rem] font-black leading-[0.85] uppercase tracking-tight`}>
                        The New <br /> Canvas
                    </motion.h1>

                    <motion.p variants={item} className="max-w-xl mt-8 text-zinc-500 dark:text-zinc-400 text-base md:text-lg leading-8">
                        A minimalist sanctuary for high-end original art, connecting visionary creators with collectors who value timeless expression.
                    </motion.p>

                    <motion.div variants={item} className="mt-10">
                        <Link href="/artworks">
                            <button className="px-10 py-4 bg-foreground text-background text-xs font-bold tracking-[0.18em] uppercase flex items-center gap-3 hover:scale-[1.03] transition-all">
                                Start Exploring <ArrowRight size={18} />
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center lg:justify-end"
                >
                    <div className="flex gap-4 lg:gap-5 h-65 md:h-85 lg:h-130 overflow-x-auto lg:overflow-visible no-scrollbar">

                        {artworks.map((art, i) => (
                            <motion.div
                                key={art.id}
                                animate={{ y: window.innerWidth > 1024 ? (i % 2 === 0 ? [0, -15, 0] : [0, 15, 0]) : 0 }}
                                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                                whileHover={{ scale: 1.04 }}
                                className={`shrink-0 overflow-hidden ${i === 1 ? "lg:mt-14" : ""}`}
                            >
                                <Image
                                    src={art.img}
                                    alt="artwork"
                                    width={300}
                                    height={500}
                                    className="w-36 md:w-44 lg:w-52 h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                                />
                            </motion.div>
                        ))}

                    </div>
                </motion.div>

            </div>
        </section>

    );
};

export default Hero;