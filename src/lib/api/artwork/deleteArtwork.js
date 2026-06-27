import { authClient } from "@/lib/auth-client";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const deleteArtwork = async (id) => {
    const { data: tokenData } = await authClient.token()


    const res = await fetch(`${baseUrl}/api/artwork/${id}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${tokenData?.token}`
        }
    });

    return await res.json();
};
