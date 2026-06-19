import ArtistSection from "@/components/ArtworkDetails/ArtistSection";
import ArtworkHero from "@/components/ArtworkDetails/ArtworkHero";
import Comments from "@/components/ArtworkDetails/Comments";

const DetailsPage = () => {
    return (
        <div>
            <ArtworkHero />
            <ArtistSection />
            <Comments />
        </div>
    );
};

export default DetailsPage;