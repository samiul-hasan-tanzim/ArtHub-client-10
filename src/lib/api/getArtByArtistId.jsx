const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const getArtByArtist = async (artistId, status = 'pending') => {
    const res = await fetch(`${baseUrl}/api/artwork?artistId=${artistId}&status=${status}`)
    const data = await res.json();

    return data.artworks;
}

