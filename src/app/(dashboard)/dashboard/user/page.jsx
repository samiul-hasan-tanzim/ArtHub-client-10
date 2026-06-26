import Link from "next/link";
import {
    LayoutDashboard,
    ShoppingBag,
    Palette,
    User,
    CreditCard
} from "lucide-react";

const UserDashboard = () => {
    return (
        <section className="space-y-10">

            {/* heading */}
            <div>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Collector Dashboard
                </p>

                <h1 className="text-3xl md:text-4xl font-bold mt-2">
                    Welcome Back 👋
                </h1>

                <p className="mt-3 text-zinc-500 dark:text-zinc-400 max-w-2xl">
                    Manage your collection, review purchases, and explore the artworks you own.
                </p>
            </div>

            {/* stats */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

                <div className="border border-zinc-200 dark:border-zinc-800 p-6">
                    <ShoppingBag size={22} />

                    <p className="mt-4 text-sm text-zinc-500">
                        Total Purchases
                    </p>

                    <h2 className="text-2xl font-bold mt-1">
                        8
                    </h2>
                </div>

                <div className="border border-zinc-200 dark:border-zinc-800 p-6">
                    <CreditCard size={22} />

                    <p className="mt-4 text-sm text-zinc-500">
                        Total Spent
                    </p>

                    <h2 className="text-2xl font-bold mt-1">
                        $3,450
                    </h2>
                </div>

                <div className="border border-zinc-200 dark:border-zinc-800 p-6">
                    <Palette size={22} />

                    <p className="mt-4 text-sm text-zinc-500">
                        Owned Artworks
                    </p>

                    <h2 className="text-2xl font-bold mt-1">
                        8
                    </h2>
                </div>

                <div className="border border-zinc-200 dark:border-zinc-800 p-6">
                    <User size={22} />

                    <p className="mt-4 text-sm text-zinc-500">
                        Current Plan
                    </p>

                    <h2 className="text-2xl font-bold mt-1">
                        Pro
                    </h2>
                </div>

            </div>

            {/* quick actions */}
            <div className="border border-zinc-200 dark:border-zinc-800 p-8">

                <h2 className="text-xl font-semibold mb-6">
                    Quick Actions
                </h2>

                <div className="grid md:grid-cols-3 gap-4">

                    <Link
                        href="/dashboard/user/purchases"
                        className="border border-zinc-200 dark:border-zinc-700 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
                    >
                        <ShoppingBag size={20} />

                        <p className="mt-3 font-medium">
                            Purchase History
                        </p>
                    </Link>

                    <Link
                        href="/dashboard/user/artworks"
                        className="border border-zinc-200 dark:border-zinc-700 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
                    >
                        <Palette size={20} />

                        <p className="mt-3 font-medium">
                            Bought Artworks
                        </p>
                    </Link>

                    <Link
                        href="/dashboard/user/profile"
                        className="border border-zinc-200 dark:border-zinc-700 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
                    >
                        <User size={20} />

                        <p className="mt-3 font-medium">
                            Profile Settings
                        </p>
                    </Link>

                </div>
            </div>

            {/* recent purchases */}
            <div className="border border-zinc-200 dark:border-zinc-800 p-8">

                <h2 className="text-xl font-semibold mb-6">
                    Recent Purchases
                </h2>

                <div className="space-y-4">

                    <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
                        <span>Silent Ocean</span>
                        <span>$450</span>
                    </div>

                    <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
                        <span>Golden Horizon</span>
                        <span>$620</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Abstract Vision</span>
                        <span>$900</span>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default UserDashboard;