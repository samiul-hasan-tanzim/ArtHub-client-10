const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const getOrdersByBuyer = async (buyerId, artworkId) => {
    let url = `${baseUrl}/orders?buyerId=${buyerId}`

    if (artworkId) {
        url += `&artworkId=${artworkId}`
    }
    const res = await fetch(url, {
        cache: "no-store"
    })

    return await res.json()
}


export const getSalesByArtist = async (artistId) => {
    const res = await fetch(
        `${baseUrl}/orders?artistId=${artistId}`,
        {
            cache: "no-store"
        }
    )

    return await res.json()
}



export const deleteOrder = async (id) => {
    const res = await fetch(`${baseUrl}/orders/${id}`, {
        method: "DELETE"
    });

    return await res.json();
};