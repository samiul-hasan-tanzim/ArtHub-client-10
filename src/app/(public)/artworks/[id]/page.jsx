import ArtistSection from "@/components/ArtworkDetails/ArtistSection";
import ArtworkHero from "@/components/ArtworkDetails/ArtworkHero";
import Comments from "@/components/ArtworkDetails/Comments";
import { getArtByArtId } from "@/lib/api/getArtByArtId";

const DetailsPage = async ({ params }) => {
    const { id } = await params
    const artwork = await getArtByArtId(id)
    console.log(artwork)

    return (
        <div>
            <ArtworkHero artwork={artwork} />
            <ArtistSection artistData={artwork} />
            <Comments />
        </div>
    );
};

export default DetailsPage;