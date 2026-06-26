const SalesHistoryTable = ({ sales }) => {
    return (
        <div className="overflow-x-auto border rounded-xl">

            <table className="w-full">

                <thead className="bg-zinc-100 dark:bg-zinc-900">

                    <tr>
                        <th className="text-left p-4">Artwork</th>
                        <th className="text-left p-4">Buyer</th>
                        <th className="text-left p-4">Amount</th>
                        <th className="text-left p-4">Date</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        sales?.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center py-10 text-zinc-500">
                                    No sales yet
                                </td>
                            </tr>
                        ) : (
                            sales?.map((sale) => (
                                <tr
                                    key={sale._id}
                                    className="border-t"
                                >
                                    <td className="p-4">
                                        {sale.artworkName}
                                    </td>

                                    <td className="p-4">
                                        {sale.buyerEmail}
                                    </td>

                                    <td className="p-4 font-medium">
                                        ${sale.price}
                                    </td>

                                    <td className="p-4 text-sm text-zinc-500">
                                        {
                                            new Date(
                                                sale.createdAt
                                            ).toLocaleDateString()
                                        }
                                    </td>
                                </tr>
                            ))
                        )
                    }

                </tbody>

            </table>

        </div>
    );
};

export default SalesHistoryTable;