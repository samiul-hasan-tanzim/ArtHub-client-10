import { authClient } from "../auth-client";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const updateComment = async (id, comment) => {
    const { data: tokenData } = await authClient.token()

    const res = await fetch(`${baseUrl}/api/comments/${id}`,
        {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify({ comment })
        }
    );

    return await res.json();
};