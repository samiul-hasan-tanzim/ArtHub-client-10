import SalesHistoryTable from "@/components/dashboard/artist/SalesHistoryTable";
import { getSalesByArtist } from "@/lib/api/orders/getSalesByArtist";
import { getUserSession } from "@/lib/core/session";


const SalesHistoryPage = async () => {
    const user = await getUserSession();

    const sales = await getSalesByArtist(user.id);

    return (
        <section className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold">
                    Sales History
                </h1>

                <p className="text-zinc-500 mt-2">
                    Track all purchased artworks.
                </p>
            </div>

            <SalesHistoryTable sales={sales} />
        </section>
    );
};

export default SalesHistoryPage;