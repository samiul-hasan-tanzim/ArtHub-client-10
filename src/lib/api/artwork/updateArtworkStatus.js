import { authClient } from "@/lib/auth-client";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const updateArtworkStatus = async (id, status) => {
    const { data: tokenData } = await authClient.token()


    const res = await fetch(
        `${baseUrl}/api/artwork/status/${id}`,
        {
            method: "PATCH",

            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${tokenData?.token}`

            },

            body: JSON.stringify({ status })
        }
    );

    return await res.json();
};