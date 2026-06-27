// const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

// export const serverMutation = async (path, data, method) => {
//     const res = await fetch(`${baseUrl}${path}`, {
//         method,
//         ...(method === 'POST' || method === 'PATCH'
//             ? {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(data),
//             }
//             : {}),
//     });

//     return await res.json();
// };