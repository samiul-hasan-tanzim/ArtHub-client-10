"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { deleteOrder } from "@/lib/api/orders";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const BoughtArtworks = ({ artworks }) => {
    const router = useRouter();

    const handleDelete = async (orderId) => {
        const confirmDelete = confirm(
            "Remove this purchase history?"
        );

        if (!confirmDelete) return;

        const result = await deleteOrder(orderId);

        if (result.deletedCount > 0) {
            toast.success("Removed successfully");
            router.refresh();
        }
    };

    if (artworks.length === 0) {
        return (
            <div className="border p-12 text-center text-zinc-500">
                No purchased artworks yet.
            </div>
        );
    }

    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {artworks.map((art) => (

                <div
                    key={art._id}
                    className="border border-zinc-200 dark:border-zinc-800 overflow-hidden"
                >

                    <div className="relative h-72">

                        <Image
                            src={art.image}
                            alt={art.artName}
                            fill
                            className="object-cover"
                        />

                    </div>

                    <div className="p-5 space-y-4">

                        <div>
                            <h3 className="font-semibold text-lg">
                                {art.artName}
                            </h3>

                            <p className="text-sm text-zinc-500">
                                ${art.price}
                            </p>
                        </div>

                        <div className="flex gap-3">

                            <Link
                                href={`/artworks/${art._id}`}
                                className="flex-1 text-center border px-4 py-2 text-sm"
                            >
                                View Details
                            </Link>

                            <button
                                onClick={() =>
                                    handleDelete(art.orderId)
                                }
                                className="px-4 py-2 border text-red-500"
                            >
                                <Trash2 size={16} />
                            </button>

                        </div>

                    </div>

                </div>

            ))}

        </div>
    );
};

export default BoughtArtworks;