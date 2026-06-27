import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const serverMutation = async (path, data, method) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })


    const res = await fetch(`${baseUrl}${path}`, {
        method,
        ...(method === 'POST' || method === 'PATCH'
            ? {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data),
            }
            : {}),
    });

    return await res.json();
};