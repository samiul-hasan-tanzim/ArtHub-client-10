'use client'

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { playfair } from "@/lib/fonts";

const artworks = [
    { id: 1, img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80" },
    { id: 2, img: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=800&q=80" },
    { id: 3, img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80" }
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center py-14 md:py-20 relative overflow-hidden">

            {/* Background Layer */}

            <div
                className="
            absolute 
            inset-0 
            flex 
            items-center 
            justify-center 
            pointer-events-none 
            select-none 
            overflow-hidden
        "
            >
                <h2
                    className="
                text-[28vw]
                font-black
                text-zinc-100
                dark:text-zinc-900
                uppercase
                tracking-tighter
                leading-none
            "
                >
                    ART
                </h2>
            </div>

            {/* Blur Accent */}

            <div className="absolute top-20 left-20 w-96 h-96 bg-amber-100 dark:bg-zinc-800 blur-3xl rounded-full opacity-30"></div>

            <div className="absolute bottom-10 right-10 w-80 h-80 bg-zinc-200 dark:bg-zinc-800 blur-3xl rounded-full opacity-30"></div>

            {/* Main Content */}

            <div className="w-[92%] lg:w-[88%] xl:w-[82%] 2xl:w-[78%] mx-auto grid lg:grid-cols-2 gap-14 lg:gap-24 items-center relative z-10">

                {/* LEFT */}

                <div>

                    <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-amber-500 font-semibold mb-5">
                        Contemporary Digital Gallery
                    </p>

                    <h1
                        className={`
                    ${playfair.className}
                    text-4xl
                    sm:text-6xl
                    md:text-7xl
                    xl:text-8xl
                    font-black
                    leading-[0.92]
                `}
                    >
                        Art Beyond <br />
                        The Ordinary
                    </h1>

                    <p className="mt-7 text-zinc-500 dark:text-zinc-400 leading-8 max-w-xl text-sm sm:text-base md:text-lg">
                        Discover exclusive artwork collections from visionary creators.
                        A curated marketplace where creativity meets timeless value.
                    </p>

                    {/* Buttons */}

                    <div className="flex flex-wrap gap-4 mt-10">

                        <Link href="/artworks">
                            <button
                                className="
                            px-8
                            py-4
                            bg-black
                            dark:bg-white
                            text-white
                            dark:text-black
                            text-sm
                            font-semibold
                            flex
                            items-center
                            gap-3
                            hover:scale-105
                            transition
                        "
                            >
                                Explore Art
                                <ArrowRight size={18} />
                            </button>
                        </Link>

                        <Link href="/register">
                            <button
                                className="
                            px-8
                            py-4
                            border
                            border-zinc-300
                            dark:border-zinc-700
                            text-sm
                            font-semibold
                            hover:bg-zinc-100
                            dark:hover:bg-zinc-900
                            transition
                        "
                            >
                                Become Artist
                            </button>
                        </Link>

                    </div>

                    {/* Stats */}

                    <div className="flex gap-8 sm:gap-14 mt-14 flex-wrap">

                        <div>
                            <h3 className="text-2xl font-bold">1200+</h3>
                            <p className="text-sm text-zinc-500">
                                Collectors
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold">350+</h3>
                            <p className="text-sm text-zinc-500">
                                Artists
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold">8K+</h3>
                            <p className="text-sm text-zinc-500">
                                Sales
                            </p>
                        </div>

                    </div>

                </div>

                {/* RIGHT */}

                <div className="relative h-[500px] sm:h-[600px] lg:h-[720px] w-full">

                    {/* Main Image */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute right-0 top-0 w-[72%]"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=80"
                            alt="art"
                            width={500}
                            height={700}
                            priority
                            className="
                        w-full
                        h-[430px]
                        sm:h-[530px]
                        lg:h-[640px]
                        object-cover
                        rounded-2xl
                        shadow-2xl
                    "
                        />
                    </motion.div>

                    {/* Bottom Left */}

                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 5
                        }}
                        className="absolute left-0 bottom-10 w-[46%]"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=80"
                            alt="art"
                            width={300}
                            height={400}
                            className="
                        w-full
                        h-[220px]
                        sm:h-[270px]
                        lg:h-[320px]
                        object-cover
                        rounded-2xl
                        shadow-xl
                    "
                        />
                    </motion.div>

                    {/* Floating Image */}

                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 4
                        }}
                        className="absolute top-24 left-10 w-[30%]"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80"
                            alt="art"
                            width={200}
                            height={260}
                            className="
                        w-full
                        h-[180px]
                        sm:h-[220px]
                        object-cover
                        rounded-2xl
                        shadow-xl
                    "
                        />
                    </motion.div>

                </div>

            </div>

        </section>
    );
};

export default HeroSection;