const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const getArtByArtist = async (artistId, status) => {
    let url = `${baseUrl}/api/artwork?artistId=${artistId}`;

    if (status) {
        url += `&status=${status}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    return data.artworks;
}