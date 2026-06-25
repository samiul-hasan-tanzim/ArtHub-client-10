const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const getSubscriptionPlansById = async (planId) => {
    const res = await fetch(`${baseUrl}/api/plans?plan_id=${planId}`)
    return await res.json()
}