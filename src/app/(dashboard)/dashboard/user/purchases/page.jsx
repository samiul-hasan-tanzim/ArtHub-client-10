import { getOrdersByBuyer } from "@/lib/api/orders";
import { getUserSession } from "@/lib/core/session";

const PurchaseHistory = async () => {
    const user = await getUserSession();
    const orders = await getOrdersByBuyer(user?.id);

    // stats
    const totalSpent = orders?.reduce(
        (sum, order) => sum + Number(order.price),
        0
    );

    const totalPurchases = orders?.length || 0;

    const latestPurchase =
        orders?.length > 0
            ? new Date(
                orders[orders.length - 1].createdAt
            ).toLocaleDateString()
            : "N/A";

    return (
        <section className="space-y-10">

            {/* heading */}
            <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                    Purchase History
                </h1>

                <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                    Review all artwork purchases you have made.
                </p>
            </div>

            {/* stats cards */}
            <div className="grid md:grid-cols-3 gap-5">

                <div className="border border-zinc-200 dark:border-zinc-800 p-6">
                    <p className="text-sm text-zinc-500">
                        Total Purchases
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        {totalPurchases}
                    </h2>
                </div>

                <div className="border border-zinc-200 dark:border-zinc-800 p-6">
                    <p className="text-sm text-zinc-500">
                        Total Spent
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        ${totalSpent}
                    </h2>
                </div>

                <div className="border border-zinc-200 dark:border-zinc-800 p-6">
                    <p className="text-sm text-zinc-500">
                        Latest Purchase
                    </p>

                    <h2 className="mt-2 text-xl font-semibold">
                        {latestPurchase}
                    </h2>
                </div>

            </div>

            {/* purchase table */}
            {/* purchase table */}

            {orders?.length === 0 ? (

                <div className="border border-zinc-200 dark:border-zinc-800 p-12 text-center">

                    <h3 className="text-lg font-semibold">
                        No purchases yet
                    </h3>

                    <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                        You haven’t purchased any artwork yet.
                    </p>

                </div>

            ) : (

                <div className="border border-zinc-200 dark:border-zinc-800 overflow-x-auto">

                    <table className="w-full text-left">

                        <thead className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">

                            <tr className="text-xs uppercase tracking-wider text-zinc-500">

                                <th className="px-6 py-4">
                                    Artwork
                                </th>

                                <th className="px-6 py-4">
                                    Artist
                                </th>

                                <th className="px-6 py-4">
                                    Price
                                </th>

                                <th className="px-6 py-4">
                                    Purchase Date
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {orders?.map((order) => (

                                <tr
                                    key={order._id}
                                    className="border-b border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
                                >

                                    <td className="px-6 py-5 font-medium">
                                        {order.artworkName}
                                    </td>

                                    <td className="px-6 py-5">
                                        {order.artistName}
                                    </td>

                                    <td className="px-6 py-5 font-semibold">
                                        ${order.price}
                                    </td>

                                    <td className="px-6 py-5 text-zinc-500">
                                        {new Date(order.createdAt).toLocaleDateString()}
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            )}

        </section>
    );
};

export default PurchaseHistory;