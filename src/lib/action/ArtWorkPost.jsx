import { serverMutation } from "../core/server"


export const submitArtWord = async (artWorkData) => {
    return serverMutation('/api/artwork', artWorkData, 'POST')
}