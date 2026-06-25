const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const getOrdersByBuyer = async (buyerId, artworkId) => {
    const res = await fetch(`${baseUrl}/orders?buyerId=${buyerId}&artworkId=${artworkId}`)
    return await res.json()
}