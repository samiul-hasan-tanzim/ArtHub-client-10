import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Share2 } from "lucide-react";
import { playfair } from "@/lib/fonts";

const ArtworkHero = async ({ artwork }) => {

    return (
        <section className="pt-10 lg:pt-14 pb-16">
            <div className="w-10/12 mx-auto grid lg:grid-cols-[1.55fr_0.75fr] gap-10 lg:gap-12 items-start">

                <div className="bg-zinc-50 dark:bg-zinc-900 p-4 lg:p-6">
                    <div className="relative group max-w-2xl mx-auto">
                        <div className="absolute inset-0 bg-black/5 dark:bg-white/5 translate-x-3 translate-y-3"></div>

                        <div className="relative overflow-hidden bg-white dark:bg-black p-2 shadow-xl">
                            <Image
                                src={artwork?.image}
                                alt={artwork?.artName}
                                width={800}
                                height={900}
                                className="w-full h-125 lg:h-155 object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <span className="absolute top-5 right-5 bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase">
                                {artwork.status}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-10 pt-2">

                    <header>
                        <nav className="mb-6 text-xs uppercase tracking-[0.2em] text-zinc-400">
                            <Link href="/artworks" className="hover:text-black dark:hover:text-white">
                                Gallery
                            </Link>{" "}
                            / <span>{artwork.title}</span>
                        </nav>

                        <h1 className={`${playfair.className} text-4xl md:text-5xl font-black tracking-tight leading-none`}>
                            {artwork.artName}
                        </h1>

                        <Link href="#" className="mt-4 block text-lg font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
                            {artwork.artistName}
                        </Link>
                    </header>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-3">
                                The Narrative
                            </h3>

                            <p className="text-base italic leading-8 text-zinc-600 dark:text-zinc-400">
                                {artwork.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-2">
                                    Category
                                </p>
                                <p className="font-medium">{artwork.category}</p>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-2">
                                    Dimensions
                                </p>
                                {/* <p className="font-medium">{artwork.dimensions}</p> */}
                                <p className="font-medium">24&quot; × 36&quot;</p>
                            </div>
                        </div>
                    </div>

                    <div className="border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-black flex flex-col gap-6">
                        <div className="flex justify-between items-center">
                            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                                Investment
                            </span>

                            <span className={`${playfair.className} text-3xl font-bold`}>
                                ${artwork.price}
                            </span>
                        </div>

                        <button className="w-full py-4 bg-black text-white dark:bg-white dark:text-black text-xs font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:scale-[1.01] transition-all">
                            Purchase Piece <ArrowRight size={18} />
                        </button>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="border border-zinc-200 dark:border-zinc-800 py-3 text-xs uppercase tracking-[0.15em] flex justify-center items-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all">
                                <Heart size={16} /> Wishlist
                            </button>

                            <button className="border border-zinc-200 dark:border-zinc-800 py-3 text-xs uppercase tracking-[0.15em] flex justify-center items-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all">
                                <Share2 size={16} /> Share
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ArtworkHero;