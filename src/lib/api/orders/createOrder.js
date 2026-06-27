import { authClient } from "@/lib/auth-client";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const createOrder = async (orderData) => {
    const { data: tokenData } = await authClient.token();

    const res = await fetch(`${baseUrl}/orders`, {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${tokenData?.token}`
        },

        body: JSON.stringify(orderData)
    });

    return await res.json();
};