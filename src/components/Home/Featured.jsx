'use client'

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { playfair } from "@/lib/fonts";

const items = [
    { id: 1, type: "Painting", title: "Celestial Silence", artist: "Elena Vance", price: "$3,200", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=80" },
    { id: 2, type: "Painting", title: "Golden Horizon", artist: "Luca Moretti", price: "$2,850", img: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=80" },
    { id: 3, type: "Painting", title: "Silent Bloom", artist: "Sophia Hart", price: "$4,100", img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80" },
    { id: 4, type: "Painting", title: "Velvet Echo", artist: "Daniel Cruz", price: "$2,400", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=80" },
    { id: 5, type: "Painting", title: "Dream Fragments", artist: "Mila Rowan", price: "$3,750", img: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=80" },
    { id: 6, type: "Painting", title: "Ivory Motion", artist: "Arthur Vale", price: "$5,000", img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80" }
];

const Featured = () => {
    return (
        <section className="py-32">
            <div className="w-11/12 lg:w-9/12 mx-auto">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-20">
                    <h2 className={`${playfair.className} text-4xl md:text-6xl font-black tracking-tight`}>
                        Modern Icons
                    </h2>

                    <Link href="/artworks" className="flex items-center gap-2 text-sm uppercase tracking-[0.18em] font-medium hover:gap-3 transition-all">
                        View full collection <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">

                    {items.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: .7, delay: i * .08 }}
                            whileHover={{ y: -8 }}
                            className={`${i === 2 ? "lg:mt-16" : ""} ${i === 5 ? "lg:-mt-6" : ""} group cursor-pointer`}
                        >
                            <div className="overflow-hidden">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={500}
                                    height={760}
                                    className="w-full h-117.5 object-cover group-hover:scale-105 transition duration-700"
                                />
                            </div>

                            <div className="mt-5">
                                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-2">{item.type}</p>
                                <h3 className={`${playfair.className} text-2xl font-semibold leading-tight mb-1`}>
                                    {item.title}
                                </h3>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{item.artist}</p>
                                <p className="text-sm font-semibold">{item.price}</p>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Featured;