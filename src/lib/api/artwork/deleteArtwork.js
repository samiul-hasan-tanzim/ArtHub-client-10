const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const deleteArtwork = async (id) => {
    const res = await fetch(`${baseUrl}/api/artwork/${id}`, {
        method: "DELETE"
    });

    return await res.json();
};
