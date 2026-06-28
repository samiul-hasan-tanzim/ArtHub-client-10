import { authClient } from "@/lib/auth-client";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const getUserById = async (userId) => {
    const { data: tokenData } = await authClient.token()

    const res = await fetch(
        `${baseUrl}/api/user/${userId}`,
        {
            cache: "no-store",
            headers: {
                authorization: `Bearer ${tokenData?.token}`
            }
        }
    );

    return await res.json();
};