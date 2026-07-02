"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { playfair } from "@/lib/fonts";

const FeaturedClient = ({ artworks }) => {
    return (
        <section className="relative overflow-hidden py-28 md:py-36 bg-zinc-50/40 dark:bg-zinc-950/40">

            {/* background blur */}

            <div className="absolute -left-32 top-20 w-96 h-96 rounded-full bg-zinc-200/40 dark:bg-zinc-800/30 blur-3xl"></div>

            <div className="w-[92%] xl:w-[82%] 2xl:w-[78%] mx-auto relative z-10">

                {/* heading */}

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 md:mb-24">

                    <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-amber-500 font-medium mb-4">
                            Curated Collection
                        </p>

                        <h2
                            className={`
                                ${playfair.className}
                                text-4xl
                                sm:text-5xl
                                md:text-6xl
                                xl:text-7xl
                                font-black
                                tracking-tight
                                leading-none
                            `}
                        >
                            Modern Icons
                        </h2>
                    </div>

                    <Link
                        href="/artworks"
                        className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-zinc-500 hover:text-black dark:hover:text-white hover:gap-3 transition-all"
                    >
                        View Full Collection
                        <ArrowRight size={16} />
                    </Link>

                </div>

                {/* cards */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 xl:gap-x-10 gap-y-14">

                    {artworks.map((item, i) => (
                        <Link
                            href={`/artworks/${item._id}`}
                            key={item._id}
                        >
                            <motion.div

                                whileHover={{
                                    y: -8,
                                    transition: {
                                        duration: 0.35
                                    }
                                }}

                                className={`
                                    ${i === 1 ? "lg:mt-14" : ""}
                                    ${i === 2 ? "lg:mt-4" : ""}
                                    ${i === 3 ? "lg:-mt-4" : ""}
                                    ${i === 4 ? "lg:mt-4" : ""}
                                    ${i === 5 ? "lg:-mt-4" : ""}
                                    group
                                    cursor-pointer
                                `}
                            >

                                {/* image */}

                                <div
                                    className="
                                        relative
                                        overflow-hidden
                                        rounded-2xl
                                        bg-zinc-100
                                        dark:bg-zinc-900
                                        shadow-2xl
                                        group-hover:shadow-2xl
                                        transition-all
                                        duration-500
                                    "
                                >

                                    {/* reveal animation */}

                                    <motion.div
                                        initial={{
                                            scaleY: 1
                                        }}

                                        whileInView={{
                                            scaleY: 0
                                        }}

                                        viewport={{
                                            once: true
                                        }}

                                        transition={{
                                            duration: 1.2,
                                            delay: i * 0.15,
                                            ease: [0.77, 0, 0.175, 1]
                                        }}

                                        className="
                                            absolute
                                            inset-0
                                            bg-black
                                            origin-bottom
                                            z-20
                                        "
                                    />

                                    <Image
                                        src={item.image}
                                        alt={item.artName}
                                        width={500}
                                        height={760}
                                        className="
                                            w-full
                                            h-105
                                            sm:h-125
                                            xl:h-140
                                            object-cover
                                            scale-110
                                            group-hover:scale-125
                                            transition-all
                                            duration-1800
                                            ease-out
                                        "
                                    />

                                    {/* overlay */}

                                    <div
                                        className="
                                            absolute
                                            inset-0
                                            bg-linear-to-t
                                            from-black/30
                                            via-transparent
                                            to-transparent
                                            opacity-0
                                            group-hover:opacity-100
                                            transition-all
                                            duration-700
                                        "
                                    ></div>

                                </div>

                                {/* content */}

                                <div
                                    className="
                                        mt-6
                                        px-1
                                        group-hover:-translate-y-1
                                        transition-all
                                        duration-500
                                    "
                                >

                                    <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500 mb-3 font-semibold">
                                        {item.category}
                                    </p>

                                    <h3
                                        className={`
                                            ${playfair.className}
                                            text-2xl
                                            md:text-3xl
                                            font-semibold
                                            leading-tight
                                            mb-2
                                            transition
                                        `}
                                    >
                                        {item.artName}
                                    </h3>

                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                                        {item.artistName}
                                    </p>

                                    <p className="text-sm font-bold tracking-wide">
                                        ${item.price}
                                    </p>

                                    <div
                                        className="
                                            w-10
                                            mt-4
                                            h-px
                                            bg-zinc-300
                                            dark:bg-zinc-700
                                            group-hover:w-20
                                            transition-all
                                            duration-700
                                        "
                                    ></div>

                                </div>

                            </motion.div>
                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default FeaturedClient;