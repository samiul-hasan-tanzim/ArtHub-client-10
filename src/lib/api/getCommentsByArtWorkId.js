const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const getCommentsByArtWorkId = async (artId) => {
    const res = await fetch(`${baseUrl}/api/comments?artWorkId=${artId}`)
    return await res.json()
}