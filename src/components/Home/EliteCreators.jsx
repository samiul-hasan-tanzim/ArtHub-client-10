'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { playfair } from "@/lib/fonts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllUsers } from "@/lib/api/users/getAllUsersForClientSideNoAuth";


const EliteCreators = () => {
    const [allArtist, setAllArtist] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const users = await getAllUsers()
            setAllArtist(users)
        }
        getUsers()
    }, [])

    const artist2 = allArtist.filter(artists => artists.role === 'artist')
    const topArtist = artist2.filter(id => id._id === '6a41d1d24e444688dd15fd46' || id._id === '6a41ce469f703a3f01e4cfdd' || id._id === '6a41d3413625f4c271f26f99')


    return (
        <section className="relative py-32 md:py-40 overflow-hidden">

            {/* background */}

            <div className="absolute left-20 top-20 w-96 h-96 bg-zinc-200/40 dark:bg-zinc-800/20 blur-3xl rounded-full"></div>

            <div className="w-[92%] xl:w-[82%] 2xl:w-[78%] mx-auto relative z-10">

                {/* heading */}

                <div className="flex flex-col lg:flex-row justify-between gap-8 mb-24">

                    <div>

                        <span className="text-xs tracking-[0.28em] uppercase text-amber-500 mb-4 block font-medium">
                            Curated Artists
                        </span>

                        <h2
                            className={`
                        ${playfair.className}
                        text-4xl
                        sm:text-5xl
                        md:text-6xl
                        xl:text-7xl
                        font-black
                    `}
                        >
                            Elite Creators
                        </h2>

                    </div>

                    <p className="text-zinc-500 dark:text-zinc-400 max-w-md leading-8">
                        Exceptional creators redefining contemporary expression through modern visual storytelling.
                    </p>

                </div>

                {/* artists */}

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-14 xl:gap-20">

                    {topArtist.map((artist, i) => (

                        <motion.div
                            key={artist._id}

                            initial={{
                                opacity: 0,
                                scale: 0.8
                            }}

                            whileInView={{
                                opacity: 1,
                                scale: 1
                            }}

                            viewport={{
                                once: true
                            }}

                            transition={{
                                duration: 0.9,
                                delay: i * 0.18
                            }}

                            animate={{
                                y:
                                    i === 0
                                        ? [0, -10, 0]
                                        : i === 1
                                            ? [0, 10, 0]
                                            : [0, -6, 0]
                            }}

                            whileHover={{
                                scale: 1.03
                            }}

                            className="
                        flex
                        flex-col
                        items-center
                        text-center
                        group
                        cursor-pointer
                    "
                        >

                            {/* circular image */}

                            <div className="relative">

                                {/* rotating border */}

                                <motion.div
                                    animate={{
                                        rotate: 360
                                    }}

                                    transition={{
                                        repeat: Infinity,
                                        duration: 12,
                                        ease: "linear"
                                    }}

                                    className="
                                absolute
                                inset-0
                                rounded-full
                                border
                                border-dashed
                                border-zinc-300
                                dark:border-zinc-700
                                scale-110
                            "
                                />

                                {/* outer ring */}

                                <div
                                    className="
                                w-[280px]
                                h-[280px]
                                sm:w-[320px]
                                sm:h-[320px]
                                rounded-full
                                border
                                border-zinc-300
                                dark:border-zinc-700
                                p-3
                                transition-all
                                duration-700
                                group-hover:border-black
                                dark:group-hover:border-white
                            "
                                >

                                    <div className="overflow-hidden rounded-full w-full h-full">

                                        <Image
                                            src={artist?.image}
                                            alt={artist?.name}
                                            width={500}
                                            height={500}

                                            className="
                                        w-full
                                        h-full
                                        object-cover
                                        grayscale
                                        group-hover:grayscale-0
                                        group-hover:scale-110
                                        transition-all
                                        duration-[1800ms]
                                    "
                                        />

                                    </div>

                                </div>

                            </div>

                            {/* content */}

                            <div
                                className="
                            mt-8
                            group-hover:translate-y-[-4px]
                            transition-all
                            duration-500
                        "
                            >

                                <h4
                                    className={`
                                ${playfair.className}
                                text-2xl
                                md:text-3xl
                                font-semibold
                                mb-2
                            `}
                                >
                                    {artist?.name}
                                </h4>

                                <p className="text-xs uppercase tracking-[0.22em] text-zinc-400 mb-6">
                                    Featured Artist
                                </p>

                                <Link
                                    href={`/artworks/?search=${artist.name}`}
                                    className="
                                flex
                                items-center
                                justify-center
                                gap-3
                                text-xs
                                uppercase
                                tracking-[0.18em]
                                font-medium
                                hover:gap-5
                                transition-all
                            "
                                >

                                    Discover Works

                                    <span
                                        className="
                                    w-10
                                    h-[1px]
                                    bg-foreground
                                "
                                    ></span>

                                </Link>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default EliteCreators;