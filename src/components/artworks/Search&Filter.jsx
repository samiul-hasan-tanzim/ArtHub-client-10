"use client";
import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchAndFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleReset = () => {
        router.push("/artworks");
    };

    const categories = [
        "Abstract",
        "Portrait",
        "Digital Art",
        "Nature",
        "Conceptual",
        "Oil Painting"
    ];

    const currentSearch = searchParams.get("search") || "";
    const currentCategory = searchParams.get("category") || "";
    const currentSort = searchParams.get("sort") || "";
    const [searchText, setSearchText] = useState(currentSearch);

    const updateURL = (key, value) => {
        const params = new URLSearchParams(searchParams);

        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }

        params.set("page", 1);

        router.push(`/artworks?${params.toString()}`);
    };

    return (
        <section className="mb-16">

            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 pb-6 border-b border-zinc-200 dark:border-zinc-800">

                {/* Search */}

                <div className="relative flex items-center w-full sm:w-72 shrink-0">
                    <button
                        onClick={() => updateURL("search", searchText)}
                        className="absolute left-4 cursor-pointer text-zinc-400  hover:text-black dark:hover:text-white transition-colors"
                    >
                        <Search size={16} />
                    </button>

                    <input
                        type="text"
                        value={searchText}
                        placeholder="Search collection..."
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                updateURL("search", searchText);
                            }
                        }}
                        className="w-full rounded-full bg-zinc-100 dark:bg-zinc-900 py-2 pl-11 pr-12 text-sm font-medium outline-none focus:ring-1 focus:ring-black dark:focus:ring-white placeholder:text-zinc-400"
                    />
                </div>

                {/* Category buttons */}

                <div className="flex flex-wrap justify-start xl:justify-center gap-2 flex-1">

                    <button
                        onClick={() => updateURL("category", "")}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all 
                            
                            ${!currentCategory
                                ? "bg-black text-white dark:bg-white dark:text-black"
                                : "bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-black dark:hover:text-white"
                            }`}
                    >
                        All Media
                    </button>

                    {categories.map((category) => (

                        <button
                            key={category}
                            onClick={() => updateURL("category", category)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all
                                
                                ${currentCategory === category
                                    ? "bg-black text-white dark:bg-white dark:text-black"
                                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-black dark:hover:text-white"
                                }`}
                        >
                            {category}
                        </button>

                    ))}

                </div>

                {/* Sort */}

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 shrink-0">

                    <div className="flex items-center gap-2 pr-4 border-r border-zinc-200 dark:border-zinc-800 text-sm">

                        <span className="text-zinc-500">
                            Sort:
                        </span>

                        <select
                            value={currentSort}
                            onChange={(e) =>
                                updateURL("sort", e.target.value)
                            }
                            className="bg-white dark:bg-zinc-900 text-black dark:text-white font-semibold outline-none cursor-pointer rounded px-1"
                        >
                            <option value="" className="bg-white text-black dark:bg-zinc-900 dark:text-white">
                                Newest
                            </option>

                            <option value="low" className="bg-white text-black dark:bg-zinc-900 dark:text-white">
                                Price: Low
                            </option>

                            <option value="high" className="bg-white text-black dark:bg-zinc-900 dark:text-white">
                                Price: High
                            </option>

                        </select>

                    </div>

                    <button onClick={handleReset} className="flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase whitespace-nowrap">
                        <SlidersHorizontal size={16} />
                        Reset Filters
                    </button>

                </div>

            </div>

        </section>
    );
};

export default SearchAndFilter;