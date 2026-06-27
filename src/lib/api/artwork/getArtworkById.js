const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const getArtworkById = async (id) => {
    const res = await fetch(
        `${baseUrl}/api/artwork/${id}`,
        {
            cache: "no-store"
        }
    );

    return await res.json();
};