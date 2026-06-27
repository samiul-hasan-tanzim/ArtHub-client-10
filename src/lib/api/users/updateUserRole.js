import { authClient } from "@/lib/auth-client"

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL


// update role (admin)
export const updateUserRole = async (id, role) => {
    const { data: tokenData } = await authClient.token()


    const res = await fetch(`${baseUrl}/api/user/role/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify({ role })
    })

    return await res.json()
}