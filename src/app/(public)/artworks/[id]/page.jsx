import ArtistSection from "@/components/ArtworkDetails/ArtistSection";
import ArtworkHero from "@/components/ArtworkDetails/ArtworkHero";
import Comments from "@/components/ArtworkDetails/Comments";
import { getArtByArtId } from "@/lib/api/getArtByArtId";
import { getCommentsByArtWorkId } from "@/lib/api/getCommentsByArtWorkId";
import { getSubscriptionPlansById } from "@/lib/action/subscriptionPlans";
import { getUserSession } from "@/lib/core/session";
import { getOrdersByBuyer } from "@/lib/api/orders/getOrdersByBuyer";
import { getUserById } from "@/lib/api/users/getUserById";

const DetailsPage = async ({ params }) => {
    const { id } = await params
    const user = await getUserSession()

    let updatedUser = null;
    if (user) {
        updatedUser = await getUserById(user.id);
    }


    const artwork = await getArtByArtId(id)
    const commentsByArtWork = await getCommentsByArtWorkId(artwork?._id)

    let orders = [];
    let hasPurchased = false;
    if (user) {
        orders = await getOrdersByBuyer(user.id);

        hasPurchased = orders?.some(
            order => order.artworkId === artwork?._id
        );
    }

    const plans = user?.role === "user" ? await getSubscriptionPlansById(updatedUser?.plan || "free_user") : null;

    return (
        <div>
            <ArtworkHero orders={orders} plans={plans} user={user} artwork={artwork} />
            <ArtistSection artistData={artwork} />
            <Comments user={user} artWorkId={artwork?._id} commentsByArtWork={commentsByArtWork} hasPurchased={hasPurchased} />
        </div>
    );
};

export default DetailsPage;