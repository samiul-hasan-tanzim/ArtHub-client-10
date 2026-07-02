import Image from "next/image";
import Link from "next/link";
import { playfair } from "@/lib/fonts";
import { getUser } from "@/lib/api/getUser";

const ArtistSection = async ({ artistData }) => {
    console.log(artistData)
    const artist = await getUser(artistData?.artistId)
    console.log(artist)
    if (!artist) {
        return (
            <section className="py-24 lg:py-32 border-t border-zinc-200 dark:border-zinc-800">
                <div className="w-10/12 mx-auto text-center">
                    <h2 className={`${playfair.className} text-4xl md:text-5xl font-black mb-4`}>
                        Artist Not Found
                    </h2>

                    <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto leading-8">
                        The artist information for this artwork is currently unavailable
                        or may have been removed from the gallery.
                    </p>

                    <Link
                        href="/artworks"
                        className="inline-block mt-8 border-b border-foreground pb-2 text-xs font-bold tracking-[0.2em] uppercase hover:opacity-70 transition-all"
                    >
                        Explore Other Artworks
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="relative py-24 lg:py-32 overflow-hidden border-t border-zinc-200 dark:border-zinc-800">

            {/* background accents */}

            <div className="absolute top-10 right-10 w-72 h-72 bg-zinc-200/40 dark:bg-zinc-800/30 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/30 dark:bg-amber-400/5 blur-3xl rounded-full"></div>


            <div className="relative z-10 w-[92%] xl:w-[82%] 2xl:w-[78%] mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-14 xl:gap-24 items-center">

                {/* LEFT IMAGE */}

                <div className="relative">

                    <div className="
                relative
                rounded-3xl
                overflow-hidden
                bg-zinc-100
                dark:bg-zinc-900
                p-3
                shadow-2xl
                group
            ">

                        <Image
                            src={artist?.image}
                            alt={"artist"}
                            width={600}
                            height={750}

                            className="
                        w-full
                        h-[450px]
                        md:h-[550px]
                        xl:h-[650px]
                        object-cover
                        rounded-2xl

                        grayscale
                        group-hover:grayscale-0

                        scale-105
                        group-hover:scale-100

                        transition-all
                        duration-1000
                    "
                        />

                    </div>

                </div>


                {/* RIGHT CONTENT */}

                <div>

                    <span className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-amber-500
                font-semibold
                mb-5
                block
            ">
                        Meet The Creator
                    </span>


                    <h2 className={`
                ${playfair.className}
                text-4xl
                sm:text-5xl
                xl:text-6xl
                font-black
                leading-tight
                tracking-tight
                mb-8
            `}>
                        {artist.name}
                    </h2>


                    {/* bio card */}

                    <div className="
                rounded-3xl
                border
                shadow-xl
                p-7
                bg-zinc-50/70
                dark:bg-zinc-900/40
                dark:shadow-white/5

                backdrop-blur-xl
            ">

                        <p className="
                    text-base
                    md:text-lg
                    leading-9
                    text-zinc-600
                    dark:text-zinc-400
                ">
                            {artistData.artistBio}
                        </p>

                    </div>


                    {/* stats feel */}

                    <div className="
                flex
                flex-wrap
                gap-10
                mt-10
            ">

                        <div>

                            <p className="
                        text-xs
                        uppercase
                        tracking-[0.18em]
                        text-zinc-400
                        mb-2
                    ">
                                Status
                            </p>

                            <h4 className="font-semibold text-lg">
                                Featured Artist
                            </h4>

                        </div>


                        <div>

                            <p className="
                        text-xs
                        uppercase
                        tracking-[0.18em]
                        text-zinc-400
                        mb-2
                    ">
                                Specialty
                            </p>

                            <h4 className="font-semibold text-lg">
                                {artistData.category}
                            </h4>

                        </div>

                    </div>


                    <div className="mt-12">

                        <Link
                            href={`/artworks?search=${artist.name}`}

                            className="
                        inline-flex
                        items-center
                        gap-4

                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.2em]

                        hover:gap-6
                        transition-all
                    "
                        >

                            Explore The Portfolio

                            <span className="
                        w-14
                        h-px
                        bg-foreground
                    "></span>

                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ArtistSection;