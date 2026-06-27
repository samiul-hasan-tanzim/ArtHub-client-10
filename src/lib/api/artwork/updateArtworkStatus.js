const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

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