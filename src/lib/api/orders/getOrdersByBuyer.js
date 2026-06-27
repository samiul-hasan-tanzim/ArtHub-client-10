import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const getOrdersByBuyer = async (buyerId, artworkId) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    let url = `${baseUrl}/orders?buyerId=${buyerId}`;

    if (artworkId) {
        url += `&artworkId=${artworkId}`;
    }

    const res = await fetch(url, {
        cache: "no-store",
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    return await res.json();
};