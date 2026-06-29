const ResultsSkeleton = () => {
    return (
        <div>

            {/* Cards */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                {[...Array(12)].map((_, i) => (
                    <div key={i} className="animate-pulse">

                        {/* image */}

                        <div className="w-full h-80 rounded-xl bg-zinc-200 dark:bg-zinc-800" />

                        {/* text */}

                        <div className="pt-5 flex justify-between">

                            <div className="space-y-3 flex-1">
                                <div className="h-5 w-32 bg-zinc-200 dark:bg-zinc-800 rounded" />
                                <div className="h-4 w-24 bg-zinc-200 dark:bg-zinc-800 rounded" />
                            </div>

                            <div className="h-5 w-14 bg-zinc-200 dark:bg-zinc-800 rounded" />

                        </div>

                    </div>
                ))}

            </div>

            {/* Pagination skeleton */}

            <div className="flex justify-center gap-3 mt-20 animate-pulse">

                <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800" />

            </div>

        </div>
    );
};

export default ResultsSkeleton;