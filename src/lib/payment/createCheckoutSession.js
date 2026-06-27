import { authClient } from "@/lib/auth-client";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const createCheckoutSession = async (checkoutData) => {
    const { data: tokenData } = await authClient.token();

    const res = await fetch(
        `${baseUrl}/create-checkout-session`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
            },

            body: JSON.stringify(checkoutData)
        }
    );

    return await res.json();
};