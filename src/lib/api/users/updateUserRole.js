const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL


// update role (admin)
export const updateUserRole = async (id, role) => {
    const res = await fetch(`${baseUrl}/api/users/role/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ role })
    })

    return await res.json()
}