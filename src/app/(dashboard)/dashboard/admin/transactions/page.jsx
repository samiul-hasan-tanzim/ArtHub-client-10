
import TransactionsTable from "@/components/dashboard/admin/TransactionsTable";
import { getAllOrders } from "@/lib/api/orders/getAllOrders";

const TransactionsPage = async () => {
    const orders = await getAllOrders();

    return (
        <section className="space-y-8">

            <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                    Transactions
                </h1>

                <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                    Monitor all artwork purchase transactions.
                </p>
            </div>

            <TransactionsTable orders={orders} />

        </section>
    );
};

export default TransactionsPage;