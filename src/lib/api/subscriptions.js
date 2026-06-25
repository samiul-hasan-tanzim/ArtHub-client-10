import { serverMutation } from "../core/server"


export const postsubscriptions = async (subsInfo) => {
    return serverMutation('/api/subscriptions', subsInfo, 'POST')
}