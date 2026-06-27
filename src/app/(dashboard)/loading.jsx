const DashboardLoading = () => {
    return (
        <div className="min-h-[calc(100vh-2rem)] flex flex-col items-center justify-center">

            <div className="relative w-16 h-16">

                <div className="absolute inset-0 border border-zinc-300 dark:border-zinc-700 rotate-45 animate-pulse"></div>

                <div className="absolute inset-2 border border-black dark:border-white rotate-45 animate-spin"></div>

            </div>

            <div className="mt-8 text-center">

                <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
                    ArtHub Dashboard
                </p>

                <p className="mt-3 text-sm text-zinc-500 italic">
                    Preparing your workspace...
                </p>

            </div>

        </div>
    );
};

export default DashboardLoading;