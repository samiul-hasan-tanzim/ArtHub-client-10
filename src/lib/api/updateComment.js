const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const updateComment = async (id, comment) => {
    const res = await fetch(`${baseUrl}/api/comments/${id}`,
        {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ comment })
        }
    );

    return await res.json();
};