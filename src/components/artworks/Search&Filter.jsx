import { Search, SlidersHorizontal } from "lucide-react";

const SearchAndFilter = () => {
    const categories = ["All Media", "Oil Painting", "Sculpture", "Digital Art", "Photography"];

    return (
        <section className="mb-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-zinc-200 dark:border-zinc-800">

                <div className="relative flex items-center">
                    <Search size={18} className="absolute left-4 text-zinc-400" />
                    <input
                        type="text"
                        placeholder="Search collection..."
                        className="w-64 rounded-full bg-zinc-100 dark:bg-zinc-900 py-2 pl-11 pr-5 text-sm font-medium outline-none focus:ring-1 focus:ring-black dark:focus:ring-white placeholder:text-zinc-400"
                    />
                </div>

                <div className="flex flex-wrap gap-2">
                    {categories.map((category, i) => (
                        <button
                            key={i}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${i === 0
                                ? "bg-black text-white dark:bg-white dark:text-black"
                                : "bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-black dark:hover:text-white"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 pr-4 border-r border-zinc-200 dark:border-zinc-800 text-sm">
                        <span className="text-zinc-500">Sort:</span>

                        <select className="bg-transparent font-semibold outline-none cursor-pointer">
                            <option>Newest</option>
                            <option>Price: Low</option>
                            <option>Price: High</option>
                        </select>
                    </div>

                    <button className="flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase">
                        <SlidersHorizontal size={16} />
                        Filters
                    </button>
                </div>

            </div>
        </section>
    );
};

export default SearchAndFilter;