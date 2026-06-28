import { authClient } from "@/lib/auth-client";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const initUserAfterSocialLogin = async (email) => {
    const { data: tokenData } = await authClient.token()

    const res = await fetch(
        `${baseUrl}/api/user/init/${email}`,
        {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${tokenData?.token}`
            },
        }
    );

    return await res.json();
};