import { serverMutation } from "../core/server"


export const postComments = async (commentsData) => {
    return serverMutation('/api/comments', commentsData, 'POST')
}