const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const getUser = async (userId) => {
    const res = await fetch(`${baseUrl}/api/user/${userId}`);

    if (!res.ok) {
        return null;
    }

    const text = await res.text();

    if (!text) {
        return null;
    }

    return JSON.parse(text);
};