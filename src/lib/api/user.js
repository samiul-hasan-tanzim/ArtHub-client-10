const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const updateUser = async (id, data) => {
    const res = await fetch(`${baseUrl}/api/user/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    return await res.json()
}