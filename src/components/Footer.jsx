'use client'

import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            duration: 0.6
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Footer = () => {
    return (
        <footer className="bg-black/90 text-white w-full  overflow-hidden">

            {/* MAIN GRID */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-16 py-28 w-[92%] xl:w-[82%] 2xl:w-[78%] mx-auto"
            >

                {/* BRAND */}
                <motion.div variants={item} className="md:col-span-2 flex flex-col gap-8">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase hover:tracking-widest transition-all duration-500">
                        ArtHub
                    </h2>

                    <p className="text-white/60 max-w-md leading-relaxed text-sm md:text-base">
                        A premier destination for contemporary art collectors and independent creators worldwide.
                        Redefining the digital gallery experience.
                    </p>
                </motion.div>

                {/* NAV */}
                <motion.div variants={item} className="flex flex-col gap-6">
                    <h6 className="text-xs tracking-[0.3em] text-amber-500 uppercase">
                        Navigate
                    </h6>

                    <div className="flex flex-col gap-4">
                        {[
                            "The Collection",
                            "Artist Submissions",
                            "Collector Services",
                            "Terms & Conditions"
                        ].map((item, i) => (
                            <a
                                key={i}
                                href="#"
                                className="text-white/70 text-sm hover:text-amber-400 transition-all duration-300 hover:translate-x-1"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* NEWSLETTER */}
                <motion.div variants={item} className="flex flex-col gap-6">
                    <h6 className="text-xs tracking-[0.3em] text-amber-500 uppercase">
                        Studio News
                    </h6>

                    <p className="text-white/60 text-sm leading-relaxed">
                        Subscribe for private viewings and exclusive drops.
                    </p>

                    <div className="flex border-b border-white/20 focus-within:border-amber-500 transition-all duration-300 py-3">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-transparent w-full outline-none text-sm placeholder:text-white/30"
                        />

                        <button className="text-amber-400 text-xs tracking-[0.3em] uppercase hover:text-white transition-all duration-300">
                            Join
                        </button>
                    </div>
                </motion.div>
            </motion.div>

            {/* BOTTOM BAR */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="border-t border-white/10 py-8 px-10 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto"
            >

                <p className="text-white/40 text-xs tracking-widest uppercase">
                    © 2024 ArtHub Studio. All rights reserved.
                </p>

                <div className="flex gap-8">
                    {["public", "share", "verified_user"].map((icon, i) => (
                        <span
                            key={i}
                            className="material-symbols-outlined text-white/50 hover:text-amber-400 cursor-pointer transition-all duration-300 hover:scale-110"
                        >
                            {icon}
                        </span>
                    ))}
                </div>
            </motion.div>

        </footer>
    );
};

export default Footer;