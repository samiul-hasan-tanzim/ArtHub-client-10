'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { playfair } from "@/lib/fonts";
import Link from "next/link";

const categories = {
    painting: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80",
    digital: "https://cdn.prod.website-files.com/65b19286607e503b8ea1a054/65df25465e3bbeeadb44830b_3-Important-Techniques.jpeg",
    nature: "https://rukminim2.flixcart.com/image/480/480/jeek8sw0/poster/n/h/c/medium-exclusive-azohp2182-beautiful-landscape-nature-art-river-original-imaf333tg5ytntbf.jpeg?q=90",
    conceptual: "https://images.hdqwalls.com/wallpapers/fantasy-art-landscape-concept-art-4k-4i.jpg"
};

const CategoryBlock = ({ img, title, subtitle, large }) => (
    <div className={`${large ? "min-h-105" : "min-h-50"} relative group overflow-hidden cursor-pointer rounded-xl`}>
        <Image
            src={img}
            alt={title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />

        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />

        <div className={`absolute ${large ? "bottom-10 left-10" : "bottom-6 left-6"}`}>
            <h5 className={`${playfair.className} ${large ? "text-5xl" : "text-2xl"} text-white uppercase mb-2`}>
                {title}
            </h5>

            {subtitle && (
                <p className="text-white/80 text-xs uppercase tracking-widest">
                    {subtitle}
                </p>
            )}
        </div>
    </div>
);

const ArtCategory = () => {
    return (
        <section className="relative py-32 md:py-40 overflow-hidden bg-zinc-50/40 dark:bg-zinc-950/30">

            {/* background blur */}

            <div className="absolute right-20 bottom-10 w-[450px] h-[450px] bg-zinc-200/30 dark:bg-zinc-800/20 blur-3xl rounded-full"></div>

            <div className="w-[92%] xl:w-[82%] 2xl:w-[78%] mx-auto relative z-10">

                {/* HEADER */}

                <div className="mb-24 flex flex-col lg:flex-row justify-between gap-8">

                    <div>

                        <span className="text-xs tracking-[0.28em] uppercase text-amber-500 mb-4 block font-medium">
                            Artistic Mediums
                        </span>

                        <h2
                            className={`
                        ${playfair.className}
                        text-4xl
                        sm:text-5xl
                        md:text-6xl
                        xl:text-7xl
                        font-black
                        leading-none
                    `}
                        >
                            Explore By Category
                        </h2>

                    </div>

                    <p className="max-w-md text-zinc-500 dark:text-zinc-400 leading-8 text-sm sm:text-base">
                        Discover curated artistic expressions across multiple mediums,
                        styles and visual disciplines shaping contemporary culture.
                    </p>

                </div>

                {/* GRID */}

                <motion.div

                    initial={{
                        opacity: 0
                    }}

                    whileInView={{
                        opacity: 1
                    }}

                    viewport={{
                        once: true
                    }}

                    transition={{
                        duration: 1
                    }}

                    className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8"
                >

                    {/* PAINTING */}

                    <Link href={`/artworks?category=Oil+Painting`}>

                        <motion.div
                            whileHover={{ y: -6 }}
                            className="lg:col-span-2 relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer"
                        >

                            <Image
                                src={categories.painting}
                                alt="Painting"
                                fill
                                className="
                            object-cover
                            scale-110
                            group-hover:scale-125
                            transition-all
                            duration-[1800ms]
                        "
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                            <div className="absolute bottom-10 left-10">

                                <p className="text-[10px] tracking-[0.25em] uppercase text-white/70 mb-3">
                                    Traditional Collection
                                </p>

                                <h3 className={`${playfair.className} text-5xl md:text-6xl text-white font-bold`}>
                                    Painting
                                </h3>

                            </div>

                        </motion.div>

                    </Link>

                    {/* RIGHT STACK */}

                    <div className="flex flex-col gap-6">

                        {/* DIGITAL */}

                        <Link href={`/artworks?category=Digital+Art`}>

                            <motion.div
                                whileHover={{ x: 4 }}
                                className="relative h-[238px] rounded-3xl overflow-hidden group cursor-pointer"
                            >

                                <Image
                                    src={categories.digital}
                                    alt="Digital"
                                    fill
                                    className="
                                object-cover
                                group-hover:scale-115
                                transition-all
                                duration-[1500ms]
                            "
                                />

                                <div className="absolute inset-0 bg-black/35"></div>

                                <h4 className={`${playfair.className} absolute bottom-6 left-6 text-white text-3xl`}>
                                    Digital Art
                                </h4>

                            </motion.div>

                        </Link>

                        {/* NATURE */}

                        <Link href={`/artworks?category=Nature`}>

                            <motion.div
                                whileHover={{ x: -4 }}
                                className="relative h-[238px] rounded-3xl overflow-hidden group cursor-pointer"
                            >

                                <Image
                                    src={categories.nature}
                                    alt="Nature"
                                    fill
                                    className="
                                object-cover
                                group-hover:scale-115
                                transition-all
                                duration-[1500ms]
                            "
                                />

                                <div className="absolute inset-0 bg-black/35"></div>

                                <h4 className={`${playfair.className} absolute bottom-6 left-6 text-white text-3xl`}>
                                    Nature
                                </h4>

                            </motion.div>

                        </Link>

                    </div>

                    {/* CONCEPTUAL */}

                    <Link href={`/artworks?category=Conceptual`}>

                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="lg:col-span-3 relative h-[380px] md:h-[500px] rounded-3xl overflow-hidden group cursor-pointer"
                        >

                            <Image
                                src={categories.conceptual}
                                alt="Conceptual"
                                fill
                                className="
                            object-cover
                            scale-105
                            group-hover:scale-120
                            transition-all
                            duration-[2000ms]
                        "
                            />

                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>

                            <div className="absolute left-10 top-1/2 -translate-y-1/2">

                                <p className="text-[10px] tracking-[0.25em] uppercase text-white/70 mb-4">
                                    Experimental Collection
                                </p>

                                <h3 className={`${playfair.className} text-4xl md:text-4xl lg:text-5xl text-white font-bold mb-3`}>
                                    Conceptual
                                </h3>

                                <p className="text-sm text-white/70 max-w-sm">
                                    Boundary-pushing visual narratives beyond traditional forms.
                                </p>

                            </div>

                        </motion.div>

                    </Link>

                </motion.div>

            </div>
        </section>
    );
};

export default ArtCategory;