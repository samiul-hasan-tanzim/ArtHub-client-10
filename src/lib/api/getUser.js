const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const getUser = async (userId) => {
    const token = `${process.env.TOKEN}`

    const res = await fetch(`${baseUrl}/api/artist/${userId}`, {
        cache: "no-store",
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    if (!res.ok) {
        return null;
    }

    const text = await res.text();

    if (!text) {
        return null;
    }

    return JSON.parse(text);
};