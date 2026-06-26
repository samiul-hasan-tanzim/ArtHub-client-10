'use client'

import { postComments } from "@/lib/action/PostComments";
import { deleteComment } from "@/lib/api/deleteComment";
import { updateComment } from "@/lib/api/updateComment";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


const Comments = ({ user, artWorkId, commentsByArtWork, hasPurchased }) => {
    const router = useRouter()
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const commentData = {
            ...userData,
            userId: user?.id,
            artWorkId,
            user: user?.name
        }

        const res = await postComments(commentData)
        if (res.acknowledged) {
            router.refresh()
        }
    };

    const handleDelete = async (id) => {
        const res = await deleteComment(id)

        if (res.deletedCount > 0) {
            router.refresh()
        }
    };

    const handleUpdate = async (id) => {
        const res = await updateComment(id, editText);

        if (res.modifiedCount > 0) {
            setEditingId(null);
            window.location.reload();
        }
    };



    return (
        <section className="py-24 lg:py-32 bg-background">
            <div className="w-10/12 mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20">
                    <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight">
                        Collector Reviews
                        <span className="ml-4 text-zinc-300 font-normal">
                            {commentsByArtWork.length}
                        </span>
                    </h3>

                    <div className="flex items-center gap-1 text-amber-500 text-lg">
                        ★ ★ ★ ★ ★
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {commentsByArtWork.map((review) => (
                        <div
                            key={review._id}
                            className="bg-zinc-100/70 dark:bg-zinc-900/40 border border-zinc-200/40 dark:border-zinc-800/40 p-10 flex flex-col gap-6 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300"
                        >
                            <div className="flex justify-between items-center">

                                <span className="text-sm font-bold">
                                    {review.user}
                                </span>

                                <div className="flex items-center gap-3">

                                    <span className="text-xs uppercase tracking-widest text-zinc-400">
                                        {new Date(review.createdAt).toLocaleDateString("en-GB")}
                                    </span>

                                    {user?.id === review.userId && (
                                        <div className="flex gap-2">

                                            <button
                                                onClick={() => {
                                                    setEditingId(review._id);
                                                    setEditText(review.comment);
                                                }}
                                                className="text-xs text-blue-500 hover:underline"
                                            >
                                                Edit
                                            </button>

                                            <button
                                                onClick={() => handleDelete(review._id)}
                                                className="text-xs text-red-500 hover:underline"
                                            >
                                                Delete
                                            </button>

                                        </div>
                                    )}

                                </div>
                            </div>

                            {
                                editingId === review._id ? (

                                    <div className="space-y-3">

                                        <textarea
                                            value={editText}
                                            onChange={(e) => setEditText(e.target.value)}
                                            rows={3}
                                            className="w-full border p-2 bg-transparent"
                                        />

                                        <div className="flex gap-3">

                                            <button
                                                onClick={() => handleUpdate(review._id)}
                                                className="text-sm text-green-500"
                                            >
                                                Save
                                            </button>

                                            <button
                                                onClick={() => setEditingId(null)}
                                                className="text-sm text-zinc-500"
                                            >
                                                Cancel
                                            </button>

                                        </div>

                                    </div>

                                ) : (

                                    <p className="text-sm md:text-base leading-8 text-zinc-500 dark:text-zinc-400">
                                        {review.comment}
                                    </p>

                                )
                            }
                        </div>
                    ))}
                </div>

                <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-center space-y-12">
                    <h4 className="text-2xl font-semibold tracking-tight">
                        Leave a Reflection
                    </h4>

                    <div className="space-y-8">
                        <textarea
                            name="comment"
                            rows={3}
                            placeholder="Your thoughts..."
                            required
                            className="w-full bg-transparent border-0 border-b border-zinc-300/50 dark:border-zinc-700/40 focus:border-zinc-700 dark:focus:border-zinc-300 focus:ring-0 outline-none py-4 resize-none text-base placeholder:text-zinc-400 transition-all duration-300"
                        />

                        {
                            !user ? (

                                <Link
                                    href="/login"
                                    className="w-full py-4 bg-black text-white dark:bg-white dark:text-black text-xs font-bold uppercase tracking-[0.25em] flex items-center justify-center"
                                >
                                    Login To Comment
                                </Link>

                            ) : user.role !== "user" ? (

                                <button
                                    disabled
                                    className="w-full py-4 bg-zinc-300 dark:bg-zinc-700 cursor-not-allowed text-xs font-bold uppercase tracking-[0.25em]"
                                >
                                    Only Users Can Comment
                                </button>

                            ) : !hasPurchased ? (

                                <button
                                    disabled
                                    className="w-full py-4 bg-zinc-300 dark:bg-zinc-700 cursor-not-allowed text-xs font-bold uppercase tracking-[0.25em]"
                                >
                                    Purchase First To Comment
                                </button>

                            ) : (

                                <button
                                    type="submit"
                                    className="bg-foreground text-background px-16 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-all"
                                >
                                    Post Comment
                                </button>

                            )
                        }
                    </div>
                </form>

            </div>
        </section>
    );
};

export default Comments;