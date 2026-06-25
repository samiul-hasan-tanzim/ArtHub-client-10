import ArtistSection from "@/components/ArtworkDetails/ArtistSection";
import ArtworkHero from "@/components/ArtworkDetails/ArtworkHero";
import Comments from "@/components/ArtworkDetails/Comments";
import { getArtByArtId } from "@/lib/api/getArtByArtId";
import { getCommentsByArtWorkId } from "@/lib/api/getCommentsByArtWorkId";
import { getUserSession } from "@/lib/core/session";

const DetailsPage = async ({ params }) => {
    const { id } = await params
    const user = await getUserSession()
    // console.log(user)
    const artwork = await getArtByArtId(id)
    // console.log(artwork)
    const commentsByArtWork = await getCommentsByArtWorkId(artwork?._id)

    return (
        <div>
            <ArtworkHero user={user} artwork={artwork} />
            <ArtistSection artistData={artwork} />
            <Comments user={user} artWorkId={artwork?._id} commentsByArtWork={commentsByArtWork} />
        </div>
    );
};

export default DetailsPage;