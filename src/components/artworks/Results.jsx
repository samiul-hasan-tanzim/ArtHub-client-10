import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { getAllArtWorks } from "@/lib/api/getAllArtWorks";

const Results = async ({ search, category, sort, page }) => {
    const data = await getAllArtWorks({ status: "published", search, category, sort, page })
    const artworks = data.artworks;
    const totalPages = data.totalPages;
    const currentPage = Number(page) || 1;

    return (
        <div>
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8">
                {artworks.map((art, i) => (
                    <article key={i} className={`mb-8 break-inside-avoid group ${art.sold ? "opacity-70" : ""}`}>

                        <Link href={`/artworks/${art?._id}`}>
                            <div className="relative overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer">
                                <Image
                                    src={art?.image}
                                    alt={art?.artName}
                                    width={500}
                                    height={700}
                                    className={`w-full h-80 object-cover ${!art.sold && "group-hover:scale-105 transition-transform duration-700"}`}
                                />

                                {art.isNew && (
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 text-black text-[10px] font-bold tracking-widest px-2 py-1 rounded">
                                            NEW
                                        </span>
                                    </div>
                                )}

                                {art.sold && (
                                    <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] flex items-center justify-center">
                                        <span className="bg-black text-white px-6 py-2 text-xs font-bold tracking-widest">
                                            SOLD
                                        </span>
                                    </div>
                                )}
                            </div>
                        </Link>

                        <div className="pt-5 flex justify-between items-start">
                            <div>
                                <Link href={`/artworks/${art?._id}`}>
                                    <h3 className="text-lg font-semibold hover:underline underline-offset-4 cursor-pointer">
                                        {art.artName}
                                    </h3>
                                </Link>

                                <p className="text-sm text-zinc-500 dark:text-zinc-400">{art.artistName}</p>
                            </div>

                            <span className={`${art.sold ? "line-through text-zinc-400 font-medium" : "font-bold"}`}>
                                {art.price}
                            </span>
                        </div>
                    </article>
                ))}
            </div>

            <nav className="flex items-center justify-center gap-4 mt-20">
                {/* Previous */}
                <Link
                    href={`/artworks?page=${currentPage - 1}&search=${search || ""}&category=${category || ""}&sort=${sort || ""}`}
                    className={`w-12 h-12 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center transition-all ${currentPage === 1
                        ? "pointer-events-none opacity-40"
                        : "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                        }`}
                >
                    <ChevronLeft size={18} />
                </Link>

                {/* Pages */}
                <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                        <Link
                            key={pageNum}
                            href={`/artworks?page=${pageNum}&search=${search || ""}&category=${category || ""}&sort=${sort || ""}`}
                            className={`w-12 h-12 rounded-full flex items-center justify-center font-medium ${currentPage === pageNum
                                ? "bg-black text-white dark:bg-white dark:text-black"
                                : "border border-zinc-300 dark:border-zinc-700 hover:bg-black/50 hover:text-white dark:hover:bg-white/50 "
                                }`}
                        >
                            {pageNum}
                        </Link>
                    ))}
                </div>

                {/* Next */}
                <Link
                    href={`/artworks?page=${currentPage + 1}&search=${search || ""}&category=${category || ""}&sort=${sort || ""}`}
                    className={`w-12 h-12 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center transition-all ${currentPage === totalPages
                        ? "pointer-events-none opacity-40"
                        : "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                        }`}
                >
                    <ChevronRight size={18} />
                </Link>
            </nav>
        </div>
    );
};

export default Results;