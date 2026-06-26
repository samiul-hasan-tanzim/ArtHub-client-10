import Link from "next/link";
import { ShieldX } from "lucide-react";
import { getUserSession } from "@/lib/core/session";

const UnauthorizedPage = async () => {
    const user = await getUserSession()

    return (
        <section className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-xl text-center">

                <div className="flex justify-center mb-8">
                    <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-full">
                        <ShieldX size={42} />
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Access Denied
                </h1>

                <p className="mt-4 text-zinc-500 dark:text-zinc-400 leading-7">
                    You do not have permission to access this page.
                    Please return to a page available to your account.
                </p>

                <div className="mt-10 flex justify-center gap-4">

                    <Link
                        href="/"
                        className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black text-sm font-medium hover:opacity-90 transition"
                    >
                        Back Home
                    </Link>

                    <Link
                        href={`/dashboard/${user?.role}`}
                        className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
                    >
                        Dashboard
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default UnauthorizedPage;