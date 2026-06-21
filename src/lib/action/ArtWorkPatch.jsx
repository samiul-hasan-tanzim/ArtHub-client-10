import { serverMutation } from "../core/server"

export const patchArtWork = async (id, artWorkData) => {
    return serverMutation(`/api/artwork/${id}`, artWorkData, 'PATCH')
}