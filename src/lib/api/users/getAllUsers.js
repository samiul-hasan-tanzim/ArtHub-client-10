import { auth } from "@/lib/auth"
import { headers } from "next/headers"

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

// get all users (admin)
export const getAllUsers = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`${baseUrl}/api/users`, {
        cache: "no-store",
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    return await res.json()
}