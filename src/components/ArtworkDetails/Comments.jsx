const reviewsData = [
    {
        id: 1,
        name: "Marcus Aurel",
        time: "2D ago",
        comment:
            "The depth in this piece is truly remarkable. The way the light hits the horizon feels almost tangible. It looks even better in person."
    },
    {
        id: 2,
        name: "Elena Vance",
        time: "1W ago",
        comment:
            "A perfect addition to my digital collection. Thorne's mastery of atmosphere is unparalleled in the current digital art scene."
    },
    {
        id: 3,
        name: "Samuel Chen",
        time: "2W ago",
        comment:
            "The minimalist approach here is what makes it so powerful. It brings a sense of calm to my workspace every time I look at it."
    }
];

const Comments = () => {
    return (
        <section className="py-24 lg:py-32 bg-background">
            <div className="w-10/12 mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20">
                    <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight">
                        Collector Reviews
                        <span className="ml-4 text-zinc-300 font-normal">
                            {reviewsData.length}
                        </span>
                    </h3>

                    <div className="flex items-center gap-1 text-amber-500 text-lg">
                        ★ ★ ★ ★ ★
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {reviewsData.map((review) => (
                        <div
                            key={review.id}
                            className="bg-zinc-100/70 dark:bg-zinc-900/40 border border-zinc-200/40 dark:border-zinc-800/40 p-10 flex flex-col gap-6 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300"
                        >
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-bold">
                                    {review.name}
                                </span>

                                <span className="text-xs uppercase tracking-widest text-zinc-400">
                                    {review.time}
                                </span>
                            </div>

                            <p className="text-sm md:text-base leading-8 text-zinc-500 dark:text-zinc-400">
                                {review.comment}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="max-w-2xl mx-auto text-center space-y-12">
                    <h4 className="text-2xl font-semibold tracking-tight">
                        Leave a Reflection
                    </h4>

                    <div className="space-y-8">
                        <textarea
                            rows={3}
                            placeholder="Your thoughts..."
                            className="w-full bg-transparent border-0 border-b border-zinc-300/50 dark:border-zinc-700/40 focus:border-zinc-700 dark:focus:border-zinc-300 focus:ring-0 outline-none py-4 resize-none text-base placeholder:text-zinc-400 transition-all duration-300"
                        />

                        <button className="bg-foreground text-background px-16 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-all">
                            Post Comment
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Comments;