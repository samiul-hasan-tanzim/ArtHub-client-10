import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { playfair } from "@/lib/fonts";

const NotFoundPage = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-6">

            <div className="max-w-2xl text-center">

                {/* Illustration */}

                <div className="mb-10 flex justify-center">

                    <div className="relative w-40 h-40">

                        <div className="absolute inset-0 border border-zinc-300 dark:border-zinc-700 rotate-45"></div>

                        <div className="absolute inset-4 border border-black dark:border-white rotate-12"></div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <span
                                className={`${playfair.className} text-5xl font-bold`}
                            >
                                404
                            </span>
                        </div>

                    </div>

                </div>

                {/* Text */}

                <h1
                    className={`${playfair.className} text-4xl md:text-6xl font-black tracking-tight`}
                >
                    Page Not Found
                </h1>

                <p className="mt-6 text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto leading-relaxed">
                    The page you’re looking for doesn’t exist, may have been moved,
                    or is no longer available.
                </p>

                {/* Button */}

                <div className="mt-10">

                    <Link
                        href="/"
                        className="
                            inline-flex
                            items-center
                            gap-3
                            px-8
                            py-4
                            bg-black
                            text-white
                            dark:bg-white
                            dark:text-black
                            text-xs
                            uppercase
                            tracking-[0.2em]
                            font-bold
                            hover:opacity-90
                            transition
                        "
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>

                </div>

            </div>

        </section>
    );
};

export default NotFoundPage;