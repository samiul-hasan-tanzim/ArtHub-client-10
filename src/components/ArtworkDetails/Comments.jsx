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
        <section className="relative py-24 lg:py-32 overflow-hidden border-t border-zinc-200 dark:border-zinc-800">

            {/* background */}

            <div className="absolute top-20 left-10 w-72 h-72 bg-amber-100/30 dark:bg-amber-400/5 blur-3xl rounded-full"></div>

            <div className="absolute bottom-10 right-10 w-80 h-80 bg-zinc-200/40 dark:bg-zinc-800/30 blur-3xl rounded-full"></div>


            <div className="relative z-10 w-[92%] xl:w-[82%] 2xl:w-[78%] mx-auto">

                {/* header */}

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-20">

                    <div>

                        <span className="
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-amber-500
                    font-semibold
                    block
                    mb-4
                ">
                            Collector Feedback
                        </span>

                        <h3 className="
                    text-3xl
                    md:text-5xl
                    font-semibold
                    tracking-tight
                ">
                            Collector Reviews

                            <span className="
                        ml-4
                        text-zinc-300
                        dark:text-zinc-700
                        font-normal
                    ">
                                {commentsByArtWork.length}
                            </span>

                        </h3>

                    </div>

                    <div className="
                flex
                items-center
                gap-1
                text-amber-500
                text-2xl
            ">
                        ★ ★ ★ ★ ★
                    </div>

                </div>


                {/* comments */}

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-28">

                    {commentsByArtWork.map((review) => (

                        <div
                            key={review._id}

                            className="
                        rounded-3xl
                        border
                        p-8
                        bg-white/70
                        dark:bg-zinc-900/50

                        backdrop-blur-xl

                        transition-all
                        duration-500

                        hover:-translate-y-2
                        hover:shadow-2xl
                    "
                        >

                            <div className="flex justify-between items-start mb-6">

                                <div>

                                    <h4 className="font-semibold text-lg">
                                        {review.user}
                                    </h4>

                                    <p className="
                                text-xs
                                mt-1
                                uppercase
                                tracking-[0.18em]
                                text-zinc-400
                            ">
                                        Collector
                                    </p>

                                </div>


                                <div className="text-right">

                                    <p className="
                                text-xs
                                uppercase
                                tracking-widest
                                text-zinc-400
                                mb-2
                            ">
                                        {new Date(review.createdAt).toLocaleDateString("en-GB")}
                                    </p>

                                    {user?.id === review.userId && (

                                        <div className="flex gap-3 justify-end">

                                            <button
                                                onClick={() => {
                                                    setEditingId(review._id);
                                                    setEditText(review.comment);
                                                }}

                                                className="
                                            text-xs
                                            text-blue-500
                                            hover:underline
                                        "
                                            >
                                                Edit
                                            </button>

                                            <button
                                                onClick={() => handleDelete(review._id)}

                                                className="
                                            text-xs
                                            text-red-500
                                            hover:underline
                                        "
                                            >
                                                Delete
                                            </button>

                                        </div>

                                    )}

                                </div>

                            </div>


                            {editingId === review._id ? (

                                <div className="space-y-4">

                                    <textarea
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        rows={3}

                                        className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-zinc-300
                                    dark:border-zinc-700
                                    p-4
                                    bg-transparent
                                    outline-none
                                "
                                    />

                                    <div className="flex gap-4">

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

                                <p className="
                            leading-9
                            text-zinc-600
                            dark:text-zinc-400
                        ">
                                    {review.comment}
                                </p>

                            )}

                        </div>

                    ))}

                </div>


                {/* form */}

                <div className="
            max-w-3xl
            mx-auto

            rounded-3xl

            border
            shadow

            p-10
            md:p-14

            bg-zinc-50/70
            dark:bg-zinc-900/40

            backdrop-blur-xl
        ">

                    <form
                        onSubmit={onSubmit}
                        className="text-center space-y-10"
                    >

                        <h4 className="
                    text-2xl
                    md:text-3xl
                    font-semibold
                    tracking-tight
                ">
                            Leave a Reflection
                        </h4>


                        <textarea
                            name="comment"
                            rows={4}
                            placeholder="Share your thoughts about this artwork..."
                            required

                            className="
                        w-full
                        rounded-2xl

                        border

                        bg-transparent

                        p-5

                        outline-none

                        resize-none

                        placeholder:text-zinc-400
                    "
                        />


                        {!user ? (

                            <Link
                                href="/login"

                                className="
                            w-full
                            py-4

                            rounded-2xl

                            bg-black
                            text-white

                            dark:bg-white
                            dark:text-black

                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.25em]

                            flex
                            items-center
                            justify-center
                        "
                            >
                                Login To Comment
                            </Link>

                        ) : user.role !== "user" ? (

                            <button
                                disabled

                                className="
                            w-full
                            py-4

                            rounded-2xl

                            bg-zinc-300
                            dark:bg-zinc-700

                            cursor-not-allowed

                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.25em]
                        "
                            >
                                Only Users Can Comment
                            </button>

                        ) : !hasPurchased ? (

                            <button
                                disabled

                                className="
                            w-full
                            py-4

                            rounded-2xl

                            bg-zinc-300
                            dark:bg-zinc-700

                            cursor-not-allowed

                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.25em]
                        "
                            >
                                Purchase First To Comment
                            </button>

                        ) : (

                            <button
                                type="submit"

                                className="
                            w-full
                            py-4

                            rounded-2xl

                            bg-black
                            text-white

                            dark:bg-white
                            dark:text-black

                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.2em]

                            hover:scale-[1.01]
                            transition-all
                        "
                            >
                                Post Comment
                            </button>

                        )}

                    </form>

                </div>

            </div>

        </section>
    );
};

export default Comments;