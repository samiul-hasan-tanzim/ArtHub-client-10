import { serverMutation } from "../core/server"

export const deleteArtWork = async (id, artWorkData = null) => {
    return serverMutation(`/api/artwork/${id}`, artWorkData, 'DELETE')
}