import Results from "@/components/artworks/Results";
import SearchAndFilter from "@/components/artworks/Search&Filter";
import { playfair } from "@/lib/fonts";

const AllArtWorks = () => {
    return (
        <section className="w-10/12 mx-auto pt-14 md:pt-20 pb-20">
            <header className="mb-12 lg:mb-16">
                <h1 className={`${playfair.className} text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none`}>
                    Gallery Collection
                </h1>

                <p className="mt-6 max-w-3xl text-base md:text-lg leading-8 text-zinc-500 dark:text-zinc-400">
                    A definitive curation of contemporary masterpieces from emerging and established artists. Every piece is selected for its unique contribution to the global artistic dialogue.
                </p>
            </header>

            {/* Search + Filters */}
            <SearchAndFilter />
            {/* Artworks Grid */}
            <Results />
            {/* Pagination */}
        </section>
    );
};

export default AllArtWorks;