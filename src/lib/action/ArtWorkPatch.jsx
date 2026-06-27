import { serverMutation } from "../core/mutation/clientMutation"


export const patchArtWork = async (id, artWorkData) => {
    return serverMutation(`/api/artwork/${id}`, artWorkData, 'PATCH')
}