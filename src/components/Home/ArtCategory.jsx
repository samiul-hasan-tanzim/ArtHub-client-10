'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { playfair } from "@/lib/fonts";

const categories = {
    painting: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80",
    digital: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    sculpture: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    photography: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
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
        <section className="py-32">
            <div className="w-11/12 lg:w-8/12 mx-auto">

                {/* HEADER */}
                <div className="mb-20">
                    <span className="text-xs tracking-[0.2em] uppercase text-amber-500 mb-4 block font-semibold">
                        03 / MEDIUMS
                    </span>

                    <h2 className={`${playfair.className} text-4xl md:text-6xl uppercase font-black`}>
                        Explore by Category
                    </h2>
                </div>

                {/* MAIN LAYOUT */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                >

                    {/* LEFT HERO */}
                    <div className="lg:col-span-2">
                        <CategoryBlock
                            img={categories.painting}
                            title="Painting"
                            subtitle="Traditional Masterpieces"
                            large
                        />
                    </div>

                    {/* RIGHT STACK */}
                    <div className="flex flex-col gap-6">
                        <CategoryBlock
                            img={categories.digital}
                            title="Digital Art"
                        />
                        <CategoryBlock
                            img={categories.sculpture}
                            title="Sculpture"
                        />
                    </div>

                    {/* FULL WIDTH FEATURE */}
                    <div className="lg:col-span-3">
                        <CategoryBlock
                            img={categories.photography}
                            title="Lens"
                            subtitle="Photography Collection"
                            large
                        />
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default ArtCategory;