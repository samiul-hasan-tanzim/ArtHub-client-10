import { serverMutation } from "../core/mutation/serverMutation"


export const postsubscriptions = async (subsInfo) => {
    return serverMutation('/api/subscriptions', subsInfo, 'POST')
}