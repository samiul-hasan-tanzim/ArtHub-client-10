"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { playfair } from "@/lib/fonts";

const FeaturedClient = ({ artworks }) => {
    return (
        <section className="py-32">
            <div className="w-11/12 lg:w-9/12 mx-auto">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-20">
                    <h2 className={`${playfair.className} text-4xl md:text-6xl font-black tracking-tight`}>
                        Modern Icons
                    </h2>

                    <Link
                        href="/artworks"
                        className="flex items-center gap-2 text-sm uppercase tracking-[0.18em] font-medium hover:gap-3 transition-all"
                    >
                        View full collection <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">

                    {artworks.map((item, i) => (
                        <motion.div
                            key={item._id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: .7, delay: i * .08 }}
                            whileHover={{ y: -8 }}
                            className={`${i === 2 ? "lg:mt-16" : ""} ${i === 5 ? "lg:-mt-6" : ""} group cursor-pointer`}
                        >
                            <div className="overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.artName}
                                    width={500}
                                    height={760}
                                    className="w-full h-117.5 object-cover group-hover:scale-105 transition duration-700"
                                />
                            </div>

                            <div className="mt-5">
                                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-2">
                                    {item.category}
                                </p>

                                <h3 className={`${playfair.className} text-2xl font-semibold leading-tight mb-1`}>
                                    {item.artName}
                                </h3>

                                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                                    {item.artistName}
                                </p>

                                <p className="text-sm font-semibold">
                                    ${item.price}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default FeaturedClient;