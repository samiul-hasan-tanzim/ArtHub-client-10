import { getAllArtWorks } from "@/lib/api/artwork/getAllArtWorks";
import { getAllUsers } from "@/lib/api/users/getAllUsers";
import {
    Users,
    Palette,
    DollarSign,
    ShoppingBag,
    ArrowUpRight,
    Clock3,
    UserRoundCheck
} from "lucide-react";
import Link from "next/link";

const AdminDashboardPage = async () => {
    const allUser = await getAllUsers()
    const activeArtists = allUser.filter(role => role.role === 'artist')
    const users = allUser.filter(role => role.role === 'user')
    const paidMembers = allUser.filter(plan => plan.plan === 'pro_user' || plan.plan === 'premium_user')

    const allArtWorksRes = await getAllArtWorks({ status: "", search: '', category: '', sort: '', page: '' })
    const allArtWorks = allArtWorksRes.artworks

    const sold = allArtWorks.filter(sold => sold.sold)
    const totalRevenue = sold.reduce((sum, order) => sum + order.price, 0);

    return (
        <section className="space-y-12">

            {/* Header */}

            <div>

                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Admin Dashboard
                </h1>

                <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                    Manage platform activity, users, artworks and monitor growth.
                </p>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

                <div className="border border-zinc-200 dark:border-zinc-800 p-6 hover:border-black dark:hover:border-white transition">

                    <div className="flex justify-between items-start">

                        <div>
                            <p className="text-sm text-zinc-500">
                                Total Members
                            </p>

                            <h2 className="text-3xl font-bold mt-3">
                                {allUser?.length || 0}
                            </h2>
                        </div>

                        <UserRoundCheck size={20} className="text-zinc-400" />

                    </div>

                </div>

                <div className="border border-zinc-200 dark:border-zinc-800 p-6 hover:border-black dark:hover:border-white transition">

                    <div className="flex justify-between items-start">

                        <div>
                            <p className="text-sm text-zinc-500">
                                Total Users
                            </p>

                            <h2 className="text-3xl font-bold mt-3">
                                {users.length}
                            </h2>
                        </div>
                        <Users size={20} className="text-zinc-400" />


                    </div>

                </div>

                <div className="border border-zinc-200 dark:border-zinc-800 p-6 hover:border-black dark:hover:border-white transition">

                    <div className="flex justify-between items-start">

                        <div>
                            <p className="text-sm text-zinc-500">
                                Active Artists
                            </p>

                            <h2 className="text-3xl font-bold mt-3">

                                {activeArtists.length}
                            </h2>
                        </div>
                        <Palette size={20} className="text-zinc-400" />
                    </div>

                </div>

                <div className="border border-zinc-200 dark:border-zinc-800 p-6 hover:border-black dark:hover:border-white transition">

                    <div className="flex justify-between items-start">

                        <div>
                            <p className="text-sm text-zinc-500">
                                Revenue
                            </p>

                            <h2 className="text-3xl font-bold mt-3">
                                ${totalRevenue || 0}
                            </h2>
                        </div>

                        <DollarSign size={20} className="text-zinc-400" />

                    </div>

                </div>

            </div>

            {/* Middle Section */}

            <div className="grid lg:grid-cols-3 gap-8">

                {/* Recent Activity */}

                <div className="lg:col-span-2 border border-zinc-200 dark:border-zinc-800 p-6">

                    <div className="flex items-center justify-between mb-8">

                        <h2 className="text-xl font-semibold">
                            Recent Activity
                        </h2>

                        <Clock3
                            size={18}
                            className="text-zinc-500"
                        />

                    </div>

                    <div className="space-y-4">

                        <div className="py-4 border-b border-zinc-100 dark:border-zinc-800 text-sm">
                            New artist registered on platform
                        </div>

                        <div className="py-4 border-b border-zinc-100 dark:border-zinc-800 text-sm">
                            Artwork published by Artist 2
                        </div>

                        <div className="py-4 border-b border-zinc-100 dark:border-zinc-800 text-sm">
                            User purchased digital artwork
                        </div>

                        <div className="py-4 text-sm">
                            Subscription upgraded to premium
                        </div>

                    </div>

                </div>

                {/* Quick Actions */}

                <div className="border border-zinc-200 dark:border-zinc-800 p-6">

                    <h2 className="text-xl font-semibold mb-8">
                        Quick Actions
                    </h2>

                    <div className="space-y-4">

                        <Link
                            href="/dashboard/admin/users"
                            className="flex items-center justify-between border border-zinc-200 dark:border-zinc-800 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
                        >
                            Manage Users
                            <ArrowUpRight size={16} />
                        </Link>

                        <Link
                            href="/dashboard/admin/artworks"
                            className="flex items-center justify-between border border-zinc-200 dark:border-zinc-800 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
                        >
                            Review Artworks
                            <ArrowUpRight size={16} />
                        </Link>

                        <Link
                            href="/dashboard/admin/transactions"
                            className="flex items-center justify-between border border-zinc-200 dark:border-zinc-800 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
                        >
                            Transactions
                            <ArrowUpRight size={16} />
                        </Link>

                    </div>

                </div>

            </div>

            {/* Bottom Section */}

            <div className="border border-zinc-200 dark:border-zinc-800 p-8">

                <h2 className="text-xl font-semibold mb-6">
                    Platform Overview
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    <div>
                        <p className="text-sm text-zinc-500">
                            Artworks Listed
                        </p>

                        <h3 className="text-2xl font-bold mt-2">
                            {allArtWorks?.length || 0}
                        </h3>
                    </div>

                    <div>
                        <p className="text-sm text-zinc-500">
                            Sold Artworks
                        </p>

                        <h3 className="text-2xl font-bold mt-2">
                            {sold?.length || 0}
                        </h3>
                    </div>

                    <div>
                        <p className="text-sm text-zinc-500">
                            Paid Members
                        </p>

                        <h3 className="text-2xl font-bold mt-2">
                            {paidMembers?.length || 0}
                        </h3>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default AdminDashboardPage;