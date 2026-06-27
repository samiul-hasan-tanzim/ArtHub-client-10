import { serverMutation } from "../core/mutation/clientMutation"


export const deleteArtWork = async (id, artWorkData = null) => {
    return serverMutation(`/api/artwork/${id}`, artWorkData, 'DELETE')
}