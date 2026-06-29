import { authClient } from "@/lib/auth-client"

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

// get all users (admin)
export const getAllUsers = async () => {
    const { data: tokenData } = await authClient.token()

    const res = await fetch(`${baseUrl}/api/users`, {
        cache: "no-store",
        headers: {
            authorization: `Bearer ${tokenData?.token}`
        }
    })

    return await res.json()
}