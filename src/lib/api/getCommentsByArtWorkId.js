// import { headers } from "next/headers"
// import { auth } from "../auth"

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const getCommentsByArtWorkId = async (artId) => {
    // const { token } = await auth.api.getToken({
    //     headers: await headers()
    // })


    const res = await fetch(`${baseUrl}/api/comments?artWorkId=${artId}`, {
        // headers: {
        //     authorization: `Bearer ${token}`
        // }
    })
    return await res.json()
}