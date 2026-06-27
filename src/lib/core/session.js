import { headers } from "next/headers"
import { auth } from "../auth"
import { redirect } from "next/navigation"
// import { getUserByEmail } from "../api/users/getUserByEmail"


export const getUserSession = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    return session?.user || null
}

// export const getUserSession = async () => {
//     const session = await auth.api.getSession({
//         headers: await headers()
//     })

//     if (!session?.user) {
//         return null
//     }

//     // always fresh user from DB
//     const freshUser = await getUserByEmail(
//         session.user.email
//     )

//     return freshUser || null
// }



export const requareRole = async (role) => {
    const user = await getUserSession()
    if (!user) {
        redirect('/login')
    }
    if (user?.role !== role) {
        redirect('/unauthorized')
    }
    return user
}