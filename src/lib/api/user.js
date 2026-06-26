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


// get all users (admin)
export const getAllUsers = async () => {
    const res = await fetch(`${baseUrl}/api/users`, {
        cache: "no-store"
    })

    return await res.json()
}


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