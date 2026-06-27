import { getFeaturedArtworks } from "@/lib/api/getFeaturedArtworks";
import FeaturedClient from "./FeaturedClient";

const Featured = async () => {
    const artworks = await getFeaturedArtworks();

    return <FeaturedClient artworks={artworks} />;
};

export default Featured;