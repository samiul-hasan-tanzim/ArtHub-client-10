const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const getAllArtWorks = async () => {
    const res = await fetch(`${baseUrl}/api/artwork`)
    return await res.json()
}