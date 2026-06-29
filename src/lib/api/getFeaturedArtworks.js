const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const getFeaturedArtworks = async () => {
    const res = await fetch(
        `${baseUrl}/api/artwork?limit=6`,
        {
            cache: "no-store"
        }
    );

    const data = await res.json();

    return data.artworks;
};