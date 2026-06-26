import Image from "next/image";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import { getArtByArtist } from "@/lib/api/getArtByArtistId";
import { getUserSession } from "@/lib/core/session";
import EditArtWorkModal from "@/components/ui/EditArtWorkModal";
import DeleteArtWorkModal from "@/components/ui/DeleteArtWorkModal";

const ArtworksPage = async () => {
    const user = await getUserSession();
    const artworks = await getArtByArtist(user?.id);

    return (
        <section>

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold">My Artworks</h1>
                <p className="mt-1 text-sm text-zinc-500">Manage all artworks you have published.</p>
            </div>

            {/* Empty State */}
            {!artworks?.length && (
                <div className="border rounded-2xl p-10 text-center">
                    <h3 className="text-lg font-semibold">No artworks found</h3>
                    <p className="text-sm text-zinc-500 mt-2">You haven’t uploaded any artwork yet.</p>

                    <Link
                        href="/dashboard/artist/add-artwork"
                        className="inline-block mt-4 px-5 py-2 rounded-xl border hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
                    >
                        Add Artwork
                    </Link>
                </div>
            )}

            {/* Cards */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

                {artworks?.map(art => (
                    <div key={art._id} className="border rounded-2xl overflow-hidden bg-white dark:bg-black hover:shadow-lg transition">

                        {/* Image */}
                        <div className="relative h-60 w-full">
                            <Image
                                src={art.image}
                                alt={art.artName}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-4">

                            <div className="flex justify-between items-start gap-3">

                                <div>
                                    <h3 className="font-semibold text-lg line-clamp-1">
                                        {art.artName}
                                    </h3>

                                    <p className="text-sm text-zinc-500 mt-1">
                                        ${art.price}
                                    </p>
                                </div>

                                <span
                                    className={`text-xs px-3 py-1 rounded-full ${art.status === "published"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-yellow-100 text-yellow-700"
                                        }`}
                                >
                                    {art.status}
                                </span>

                            </div>

                            <div className="mt-3 text-xs text-zinc-500">
                                Created: {new Date(art.createdAt).toLocaleDateString()}
                            </div>

                            <div className="mt-4 flex gap-3">

                                <EditArtWorkModal art={art} />

                                <DeleteArtWorkModal art={art} />

                            </div>

                        </div>
                    </div>
                ))}

            </div>

        </section>
    );
};

export default ArtworksPage;