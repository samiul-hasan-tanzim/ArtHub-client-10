const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

// get all users (admin)
export const getAllUsers = async () => {
    const res = await fetch(`${baseUrl}/api/users`, {
        cache: "no-store"
    })

    return await res.json()
}