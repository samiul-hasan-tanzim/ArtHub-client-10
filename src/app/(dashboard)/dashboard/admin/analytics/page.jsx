import AdminAnalyticsCharts from "@/components/dashboard/admin/AdminAnalyticsCharts";
import { getAllArtWorks } from "@/lib/api/getAllArtWorks";
import { getAllOrders } from "@/lib/api/orders";
import { getAllUsers } from "@/lib/api/user";
import {
    Users,
    Palette,
    DollarSign,
    Brush
} from "lucide-react";

const AnalyticsPage = async () => {
    const users = await getAllUsers();
    const data = await getAllArtWorks();
    const artworks = data.artworks;
    const orders = await getAllOrders();

    /* ---------- calculations ---------- */

    const totalUsers = users.filter(
        (user) => user.role === "user"
    ).length;

    const totalArtists = users.filter(
        (user) => user.role === "artist"
    ).length;

    const totalRevenue = orders.reduce(
        (sum, order) => sum + Number(order.price),
        0
    );

    const totalArtworks = artworks.length;

    const analyticsCards = [
        {
            title: "Total Users",
            value: totalUsers,
            icon: Users
        },
        {
            title: "Total Artists",
            value: totalArtists,
            icon: Palette
        },
        {
            title: "Total Artworks",
            value: totalArtworks,
            icon: Brush
        },
        {
            title: "Total Revenue",
            value: `$${totalRevenue}`,
            icon: DollarSign
        }
    ];

    return (
        <section className="space-y-10">

            {/* heading */}

            <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Analytics Overview
                </h1>

                <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                    Platform growth, revenue and artwork performance insights.
                </p>
            </div>

            {/* cards */}

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">

                {analyticsCards.map((card) => {
                    const Icon = card.icon;

                    return (
                        <div
                            key={card.title}
                            className="
                                border 
                                border-zinc-200 
                                dark:border-zinc-800
                                bg-white
                                dark:bg-zinc-900
                                p-6
                                transition
                                hover:shadow-lg
                                dark:hover:bg-zinc-950
                            "
                        >

                            <div className="flex items-center justify-between">

                                <div>

                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                        {card.title}
                                    </p>

                                    <h2 className="mt-3 text-3xl font-bold">
                                        {card.value}
                                    </h2>

                                </div>

                                <div
                                    className="
                                        p-3
                                        border
                                        border-zinc-200
                                        dark:border-zinc-700
                                    "
                                >
                                    <Icon size={22} />
                                </div>

                            </div>

                        </div>
                    );
                })}

            </div>

            <AdminAnalyticsCharts
                orders={orders}
                artworks={artworks}
            />
        </section>
    );
};

export default AnalyticsPage;