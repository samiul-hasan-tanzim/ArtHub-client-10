"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";

import { deleteArtwork } from "@/lib/api/artwork/deleteArtwork";
import { updateArtworkStatus } from "@/lib/api/artwork/updateArtworkStatus";
import DeleteArtWorkModal from "@/components/ui/DeleteArtWorkModal";

const AdminArtworksTable = ({ artworks }) => {
    const router = useRouter();

    const [loadingId, setLoadingId] = useState("");

    const handleDelete = async (id) => {
        const confirmDelete = confirm(
            "Delete this artwork permanently?"
        );

        if (!confirmDelete) return;

        setLoadingId(id);

        const result = await deleteArtwork(id);

        setLoadingId("");

        if (result.deletedCount > 0) {
            toast.success("Artwork deleted");
            router.refresh();
        }
    };

    const handleStatusChange = async (id, status) => {
        setLoadingId(id);

        const result = await updateArtworkStatus(id, status);

        setLoadingId("");

        if (result.modifiedCount > 0) {
            toast.success("Artwork status updated");
            router.refresh();
        }
    };

    if (artworks.length === 0) {
        return (
            <div className="rounded-xl border border-zinc-300 dark:border-zinc-700 p-12 text-center text-zinc-500">
                No artworks found.
            </div>
        );
    }

    return (
        <div className="overflow-x-auto rounded-xl border border-zinc-300 dark:border-zinc-700">

            <table className="w-full text-left">

                <thead className="border-b border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50">

                    <tr className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400">

                        <th className="px-6 py-5">
                            Title
                        </th>

                        <th className="px-6 py-5">
                            Artist
                        </th>

                        <th className="px-6 py-5">
                            Price
                        </th>

                        <th className="px-6 py-5">
                            Status
                        </th>

                        <th className="px-6 py-5">
                            Action
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {artworks.map((art) => (

                        <tr
                            key={art._id}
                            className="
                                border-b
                                border-zinc-200
                                dark:border-zinc-800
                                hover:bg-zinc-50
                                dark:hover:bg-zinc-900/40
                                transition
                            "
                        >

                            <td className="px-6 py-5 font-medium">
                                {art.artName}
                            </td>

                            <td className="px-6 py-5">
                                {art.artistName}
                            </td>

                            <td className="px-6 py-5">
                                ${art.price}
                            </td>

                            <td className="px-6 py-5">

                                <select
                                    defaultValue={art.status}
                                    disabled={loadingId === art._id}
                                    onChange={(e) =>
                                        handleStatusChange(
                                            art._id,
                                            e.target.value
                                        )
                                    }
                                    className="
                                        w-36
                                        px-3
                                        py-2
                                        text-sm
                                        rounded-lg
                                        border
                                        border-zinc-300
                                        dark:border-zinc-700
                                        bg-white
                                        dark:bg-zinc-900
                                        text-black
                                        dark:text-white
                                        outline-none
                                        focus:ring-2
                                        focus:ring-zinc-400
                                        dark:focus:ring-zinc-600
                                        transition
                                        cursor-pointer
                                    "
                                >

                                    <option value="pending">
                                        Pending
                                    </option>

                                    <option value="published">
                                        Published
                                    </option>

                                </select>

                            </td>

                            <td className="px-6 py-5">

                                {/* <button
                                    disabled={loadingId === art._id}
                                    onClick={() =>
                                        handleDelete(
                                            art._id
                                        )
                                    }
                                    className="
                                        p-2
                                        rounded-lg
                                        border
                                        border-red-300
                                        dark:border-red-800
                                        hover:bg-red-50
                                        dark:hover:bg-red-950/40
                                        transition
                                        disabled:opacity-50
                                    "
                                >
                                    <Trash2 size={16} />
                                </button> */}
                                <DeleteArtWorkModal art={art} />

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
};

export default AdminArtworksTable;