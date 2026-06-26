"use client";

const TransactionsTable = ({ orders }) => {
    if (orders.length === 0) {
        return (
            <div className="border border-zinc-200 dark:border-zinc-800 p-12 text-center text-zinc-500">
                No transactions found.
            </div>
        );
    }

    return (
        <div className="border border-zinc-200 dark:border-zinc-800 overflow-x-auto">

            <table className="w-full text-left">

                <thead className="border-b border-zinc-300 dark:border-zinc-700">

                    <tr className="text-sm uppercase tracking-wider text-zinc-500">

                        <th className="px-6 py-4">
                            Transaction ID
                        </th>

                        <th className="px-6 py-4">
                            Artwork
                        </th>

                        <th className="px-6 py-4">
                            Buyer Email
                        </th>

                        <th className="px-6 py-4">
                            Artist
                        </th>

                        <th className="px-6 py-4">
                            Amount
                        </th>

                        <th className="px-6 py-4">
                            Status
                        </th>

                        <th className="px-6 py-4">
                            Date
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {orders.map((order) => (

                        <tr
                            key={order._id}
                            className="border-b border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
                        >

                            <td className="px-6 py-5 text-sm">
                                {order.stripeSessionId.slice(0, 18)}...
                            </td>

                            <td className="px-6 py-5 font-medium">
                                {order.artworkName}
                            </td>

                            <td className="px-6 py-5">
                                {order.buyerEmail}
                            </td>

                            <td className="px-6 py-5">
                                {order.artistName}
                            </td>

                            <td className="px-6 py-5 font-medium">
                                ${order.price}
                            </td>

                            <td className="px-6 py-5">

                                <span className="px-3 py-1 text-xs border border-green-500 text-green-500">

                                    {order.paymentStatus}

                                </span>

                            </td>

                            <td className="px-6 py-5 text-zinc-500">
                                {new Date(order.createdAt).toLocaleDateString()}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
};

export default TransactionsTable;