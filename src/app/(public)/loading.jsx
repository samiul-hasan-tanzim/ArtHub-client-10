const PublicLoading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">

            <div className="flex flex-col items-center gap-6">

                {/* spinner */}
                <div className="relative w-14 h-14">
                    <div className="absolute inset-0 border-2 border-zinc-200 dark:border-zinc-800"></div>

                    <div className="absolute inset-0 border-2 border-black dark:border-white border-t-transparent animate-spin"></div>
                </div>

                {/* text */}
                <div className="text-center space-y-2">

                    <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
                        ArtHub
                    </p>

                    <p className="text-sm text-zinc-500">
                        Curating masterpieces...
                    </p>

                </div>

            </div>

        </div>
    );
};

export default PublicLoading;