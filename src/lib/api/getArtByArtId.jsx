const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const getArtByArtId = async (artId) => {
    const res = await fetch(`${baseUrl}/api/artwork/${artId}`)
    return await res.json()
}


