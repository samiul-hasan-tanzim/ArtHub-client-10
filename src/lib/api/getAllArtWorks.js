const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const getAllArtWorks = async () => {
    const res = await fetch(`${baseUrl}/api/artwork`, {
        cache: "no-store"
    })
    return await res.json()
}


export const getArtworkById = async (id) => {
    const res = await fetch(`${baseUrl}/api/artwork/${id}`, {
        cache: "no-store"
    });
    const text = await res.text();
    return JSON.parse(text);
};