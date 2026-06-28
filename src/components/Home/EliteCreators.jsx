'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { playfair } from "@/lib/fonts";
import Link from "next/link";

const artists = [
    {
        id: '?search=Artist+1',
        name: "Elena Vance",
        category: "Contemporary Abstract",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Marcus Thorne",
        category: "Architectural Photography",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Sienna Ray",
        category: "Generative Digital",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80"
    }
];

const EliteCreators = () => {
    return (
        <section className="py-32 bg-zinc-50 dark:bg-zinc-900/30">
            <div className="w-11/12 lg:w-8/12 mx-auto">

                <div className="flex flex-col md:flex-row justify-between mb-20 items-start md:items-end gap-6">
                    <div className="max-w-2xl">
                        <span className="text-xs tracking-[0.2em] uppercase text-amber-500 mb-4 block font-semibold">
                            02 / THE MASTERS
                        </span>
                        <h2 className={`${playfair.className} text-4xl md:text-6xl uppercase font-black`}>
                            Elite Creators
                        </h2>
                    </div>

                    <p className="text-zinc-500 dark:text-zinc-400 max-w-xs leading-7">
                        Supporting individual genius through a direct-to-collector ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-14 lg:gap-24">

                    {artists.map((artist, i) => (
                        <motion.div
                            key={artist.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: .7, delay: i * .12 }}
                            className="flex flex-col group cursor-pointer"
                        >
                            <div className="aspect-square rounded-full overflow-hidden mb-10 border border-zinc-300 dark:border-zinc-700 transition-all duration-700 group-hover:p-4 group-hover:border-black dark:group-hover:border-white">
                                <Image
                                    src={artist.img}
                                    alt={artist.name}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>

                            <h4 className={`${playfair.className} text-2xl font-semibold mb-2`}>
                                {artist.name}
                            </h4>

                            <p className="text-[10px] tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
                                {artist.category}
                            </p>

                            <Link
                                href={`/artworks${artist.id}`}
                                className="mt-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:gap-4"
                            >
                                <span className="text-xs uppercase tracking-wider font-medium">
                                    Discover Works
                                </span>
                                <span className="w-12 h-px bg-foreground"></span>
                            </Link>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default EliteCreators;