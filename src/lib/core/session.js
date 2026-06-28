import { headers } from "next/headers"
import { auth } from "../auth"
import { redirect } from "next/navigation"
import { getUserById } from "../api/users/getUserById"
// import { getUserByEmail } from "../api/users/getUserByEmail"


export const getUserSession = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    return session?.user || null
}



const session = await auth.api.getSession({
    headers: await headers()
})
export const getUserSession2 = async () => {
    const user = await getUserById(session?.user?.id);

    return user || null
}


export const requareRole = async (role) => {
    const user = await getUserSession2()
    if (!user) {
        redirect('/login')
    }
    if (user?.role !== role) {
        redirect('/unauthorized')
    }
    return user
}