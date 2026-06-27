const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL


export const deleteOrder = async (id) => {
    const res = await fetch(`${baseUrl}/orders/${id}`, {
        method: "DELETE"
    });

    return await res.json();
};