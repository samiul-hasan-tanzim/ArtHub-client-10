import { serverMutation } from "../core/mutation/clientMutation"


export const submitArtWord = async (artWorkData) => {
    return serverMutation('/api/artwork', artWorkData, 'POST')
}