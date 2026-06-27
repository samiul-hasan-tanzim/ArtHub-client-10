import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const { token } = await auth.api.getToken({
    headers: await headers()
})


const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const getAllOrders = async () => {
    const res = await fetch(`${baseUrl}/orders`, {
        cache: "no-store",
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    return await res.json();
};