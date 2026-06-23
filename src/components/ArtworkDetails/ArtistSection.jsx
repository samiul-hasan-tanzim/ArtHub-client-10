import Image from "next/image";
import Link from "next/link";
import { playfair } from "@/lib/fonts";
import { getUser } from "@/lib/api/getUser";

// const artistData = {
//     name: "Julian Thorne",
//     bio: "Julian Thorne is a visionary digital artist whose work focuses on the intersection of natural phenomena and mathematical precision. With over a decade of experience in procedural generation and digital painting, Thorne's pieces are held in private collections globally.",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdMEVac9vVVBowSQUhhzVLeAQDp31nGnNfCM4GyKJW6iu8di2spOOXveCOItNmns5tAbi1F1PtgN87jmkIgzv7RqUTIHRQgWAMJ8ZICOdAcmwH81lwJ7KcJYtKTFmzEzPVam9Bx2lXkMBIGxIu93LZ4HRJbvUghe8cQArFEyybcJCjWJ3-Cl1AAOBW0IL6t3TyAueKfmf0BbAvNT1kuHIntPasO9K_Jh_nTQ-4qNcych8n7S25vYhFhE0ZPu5oZvrI0P6Up8N7VTk"
// };

const ArtistSection = async ({ artistData }) => {
    // console.log(artistData)
    const artist = await getUser(artistData?.artistId)

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