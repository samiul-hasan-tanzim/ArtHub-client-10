import Image from "next/image";
import Link from "next/link";
import { playfair } from "@/lib/fonts";
import { getUser } from "@/lib/api/getUser";

const ArtistSection = async ({ artistData }) => {
    // console.log(artistData)
    const artist = await getUser(artistData?.artistId)
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
        <section className="py-24 lg:py-32 bg-background border-t border-zinc-200 dark:border-zinc-800">
            <div className="w-10/12 mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                <div className="md:w-1/2 space-y-8">
                    <h2 className={`${playfair.className} text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight`}>
                        {artist.name}
                    </h2>

                    <p className="text-base md:text-lg leading-8 text-zinc-500 dark:text-zinc-400 max-w-xl">
                        {artistData.artistBio}
                    </p>

                    <div>
                        <Link
                            href="/artists/julian-thorne"
                            className="inline-block border-b border-foreground pb-2 text-xs font-bold tracking-[0.2em] uppercase hover:opacity-70 transition-all"
                        >
                            Explore The Portfolio
                        </Link>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-end">
                    <div className="w-full max-w-sm lg:max-w-md aspect-4/5 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                        <Image
                            src={artist?.image}
                            alt={'hh'}
                            width={600}
                            height={750}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 scale-105 hover:scale-100 transition-all duration-1000"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ArtistSection;