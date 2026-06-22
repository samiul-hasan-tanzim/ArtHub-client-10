const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const getUser = async (userId) => {
    const res = await fetch(`${baseUrl}/api/user/${userId}`)
    return await res.json()
}