
const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const getAllUsers = async () => {
    const token = `e5rdghtxfdbdxtyfdtytfdgf`

    const res = await fetch(`${baseUrl}/api/users/noAuth`, {
        cache: "no-store",
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    return await res.json()
}