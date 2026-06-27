const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const getAllArtWorks = async ({ search = "", category = "", sort = "", page = 1, status = "" } = {}) => {

    let url = `${baseUrl}/api/artwork?page=${page}`;

    if (status) {
        url += `&status=${status}`;
    }
    if (search) {
        url += `&search=${search}`;
    }
    if (category) {
        url += `&category=${category}`;
    }
    if (sort) {
        url += `&sort=${sort}`;
    }
    const res = await fetch(url, {
        cache: "no-store"
    });
    return await res.json();
};