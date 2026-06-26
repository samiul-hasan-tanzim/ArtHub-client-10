import ArtistSection from "@/components/ArtworkDetails/ArtistSection";
import ArtworkHero from "@/components/ArtworkDetails/ArtworkHero";
import Comments from "@/components/ArtworkDetails/Comments";
import { getArtByArtId } from "@/lib/api/getArtByArtId";
import { getCommentsByArtWorkId } from "@/lib/api/getCommentsByArtWorkId";
import { getOrdersByBuyer } from "@/lib/api/orders";
import { getSubscriptionPlansById } from "@/lib/action/subscriptionPlans";
import { getUserSession } from "@/lib/core/session";

const DetailsPage = async ({ params }) => {
    const { id } = await params
    const user = await getUserSession()

    const artwork = await getArtByArtId(id)
    // console.log(artwork)
    const commentsByArtWork = await getCommentsByArtWorkId(artwork?._id)

    const orders = await getOrdersByBuyer(user?.id)

    const plans = user?.role === "user" ? await getSubscriptionPlansById(user?.plan || "free_user") : null;

    return (
        <div>
            <ArtworkHero orders={orders} plans={plans} user={user} artwork={artwork} />
            <ArtistSection artistData={artwork} />
            <Comments user={user} artWorkId={artwork?._id} commentsByArtWork={commentsByArtWork} />
        </div>
    );
};

export default DetailsPage;