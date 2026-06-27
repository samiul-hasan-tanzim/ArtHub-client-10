import { authClient } from "@/lib/auth-client"

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const updateUser = async (id, data) => {
    const { data: tokenData } = await authClient.token()

    const res = await fetch(`${baseUrl}/api/user/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(data)
    })

    return await res.json()
}
