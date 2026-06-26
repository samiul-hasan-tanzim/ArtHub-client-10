import Results from "@/components/artworks/Results";
import SearchAndFilter from "@/components/artworks/Search&Filter";
import { playfair } from "@/lib/fonts";

const AllArtWorks = async ({ searchParams }) => {

    const params = await searchParams;

    const search = params?.search || "";
    const category = params?.category || "";
    const sort = params?.sort || "";
    const page = Number(params?.page) || 1;

    return (
        <section className="w-10/12 mx-auto pt-14 md:pt-20 pb-20">

            <header className="mb-12 lg:mb-16">
                <h1
                    className={`${playfair.className} text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none`}
                >
                    Gallery Collection
                </h1>

                <p className="mt-6 max-w-3xl text-base md:text-lg leading-8 text-zinc-500 dark:text-zinc-400">
                    A definitive curation of contemporary masterpieces from emerging and established artists. Every piece is selected for its unique contribution to the global artistic dialogue.
                </p>
            </header>

            <SearchAndFilter />

            <Results
                search={search}
                category={category}
                sort={sort}
                page={page}
            />

        </section>
    );
};

export default AllArtWorks;