const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const deleteComment = async (id) => {
    const res = await fetch(`${baseUrl}/api/comments/${id}`,
        {
            method: "DELETE"
        }
    );

    return await res.json();
};