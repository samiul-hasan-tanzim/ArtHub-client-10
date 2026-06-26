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





export const deleteArtwork = async (id) => {
    const res = await fetch(`${baseUrl}/api/artwork/${id}`, {
        method: "DELETE"
    });

    return await res.json();
};




export const updateArtworkStatus = async (id, status) => {
    const res = await fetch(
        `${baseUrl}/api/artwork/status/${id}`,
        {
            method: "PATCH",

            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify({ status })
        }
    );

    return await res.json();
};