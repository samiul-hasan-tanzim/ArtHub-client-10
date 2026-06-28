import Link from "next/link";
import { Palette, PlusCircle, DollarSign, User } from "lucide-react";
// import { getArtworkById } from "@/lib/api/artwork/getArtworkById";
import { getUserSession } from "@/lib/core/session";
import { getArtByArtist } from "@/lib/api/getArtByArtistId";

const ArtistDashboardPage = async () => {
    const user = await getUserSession()
    const artworks = await getArtByArtist(user?.id);

    const sold = artworks.filter(sold => sold.sold)

    const recentSales = sold.slice(-3).reverse()
    const totalPrice = sold.reduce((sum, order) => sum + order.price, 0);


    return (
        <section className="space-y-10">

            {/* heading */}
            <div>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Artist Dashboard
                </p>

                <h1 className="text-3xl md:text-4xl font-bold mt-2">
                    Welcome Back, Artist 🎨
                </h1>

                <p className="mt-3 text-zinc-500 dark:text-zinc-400 max-w-2xl">
                    Manage your artworks, track your sales, and keep your creative portfolio updated.
                </p>
            </div>

            {/* stats */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

                <div className="border border-zinc-200 dark:border-zinc-800 p-6">
                    <Palette size={24} />

                    <p className="mt-4 text-sm text-zinc-500">
                        Total Artworks
                    </p>

                    <h2 className="text-2xl font-bold mt-1">
                        {artworks.length}
                    </h2>
                </div>

                <div className="border border-zinc-200 dark:border-zinc-800 p-6">
                    <DollarSign size={24} />

                    <p className="mt-4 text-sm text-zinc-500">
                        Total Sales
                    </p>

                    <h2 className="text-2xl font-bold mt-1">
                        ${totalPrice}
                    </h2>
                </div>

                <div className="border border-zinc-200 dark:border-zinc-800 p-6">
                    <Palette size={24} />

                    <p className="mt-4 text-sm text-zinc-500">
                        Sold Artworks
                    </p>

                    <h2 className="text-2xl font-bold mt-1">
                        {sold.length}
                    </h2>
                </div>

                <div className="border border-zinc-200 dark:border-zinc-800 p-6">
                    <User size={24} />

                    <p className="mt-4 text-sm text-zinc-500">
                        Profile Status
                    </p>

                    <h2 className="text-2xl font-bold mt-1">
                        Active
                    </h2>
                </div>

            </div>

            {/* quick actions */}
            <div className="border border-zinc-200 dark:border-zinc-800 p-8">

                <h2 className="text-xl font-semibold mb-6">
                    Quick Actions
                </h2>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

                    <Link
                        href="/dashboard/artist/add-artwork"
                        className="border border-zinc-200 dark:border-zinc-700 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
                    >
                        <PlusCircle size={20} />

                        <p className="mt-3 font-medium">
                            Add Artwork
                        </p>
                    </Link>

                    <Link
                        href="/dashboard/artist/artworks"
                        className="border border-zinc-200 dark:border-zinc-700 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
                    >
                        <Palette size={20} />

                        <p className="mt-3 font-medium">
                            Manage Artworks
                        </p>
                    </Link>

                    <Link
                        href="/dashboard/artist/sales-history"
                        className="border border-zinc-200 dark:border-zinc-700 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
                    >
                        <DollarSign size={20} />

                        <p className="mt-3 font-medium">
                            Sales History
                        </p>
                    </Link>

                    <Link
                        href="/dashboard/artist/profile"
                        className="border border-zinc-200 dark:border-zinc-700 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
                    >
                        <User size={20} />

                        <p className="mt-3 font-medium">
                            Profile Settings
                        </p>
                    </Link>

                </div>
            </div>

            {/* recent sales */}
            <div className="border border-zinc-200 dark:border-zinc-800 p-8">

                <h2 className="text-xl font-semibold mb-6">
                    Recent Sales
                </h2>

                <div className="space-y-4">

                    {
                        recentSales.map((salse, i) => (
                            <div key={i} className="flex justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
                                <span>{salse.artName}</span>
                                <span>{salse.price}</span>
                            </div>
                        ))
                    }

                </div>
            </div>

        </section>
    );
};

export default ArtistDashboardPage;