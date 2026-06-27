import { serverMutation } from "../core/mutation/clientMutation"


export const postComments = async (commentsData) => {
    return serverMutation('/api/comments', commentsData, 'POST')
}