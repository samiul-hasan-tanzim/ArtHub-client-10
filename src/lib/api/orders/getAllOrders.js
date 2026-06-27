const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const getAllOrders = async () => {
    const res = await fetch(`${baseUrl}/orders`, {
        cache: "no-store"
    });

    return await res.json();
};