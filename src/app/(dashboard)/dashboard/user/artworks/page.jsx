
import BoughtArtworks from "@/components/dashboard/user/BoughtArtworks";
import { getArtworkById } from "@/lib/api/getAllArtWorks";
import { getOrdersByBuyer } from "@/lib/api/orders";
import { getUserSession } from "@/lib/core/session";


const BoughtArtworksPage = async () => {
    const user = await getUserSession();

    const orders = await getOrdersByBuyer(user?.id);

    const purchasedArtworks = await Promise.all(
        orders.map(async (order) => {
            const artwork = await getArtworkById(order.artworkId);

            if (!artwork) return null;

            return {
                ...artwork,
                orderId: order._id
            };
        })
    );

    const validArtworks = purchasedArtworks.filter(Boolean);

    return (
        <section className="space-y-8">

            <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                    Bought Artworks
                </h1>

                <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                    All artworks purchased in your collection.
                </p>
            </div>

            <BoughtArtworks artworks={validArtworks} />

        </section>
    );
};

export default BoughtArtworksPage;