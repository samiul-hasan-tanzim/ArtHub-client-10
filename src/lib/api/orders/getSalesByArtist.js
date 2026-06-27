const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL


export const getSalesByArtist = async (artistId) => {
    const res = await fetch(
        `${baseUrl}/orders?artistId=${artistId}`,
        {
            cache: "no-store"
        }
    )

    return await res.json()
}