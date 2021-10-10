const Playlist = require("../models/Playlist")
const { findUserById } = require("./user")

async function getPlaylists(search) {
    return Playlist.find({
        name: new RegExp(search, "i")
    })

}
async function createPlaylist(data) {
    const existing = new Playlist(data)
    const user = await findUserById(data.owner)
    user.ownedPlaylists.push(existing._id)
    await user.save()

    return existing.save()
}
async function getOne(id) {
    return Playlist.findById(id)
}
async function likePlaylist(playlistId, userId) {
    const playlist = await getOne(playlistId)
    const user = await findUserById(userId)
    playlist.usersLiked.push(userId)
    user.likedPlaylists.push(playlistId)
    
    await user.save()

    return playlist.save()
}
async function unlikePlaylist(playlistId, userId) {
    const playlist = await getOne(playlistId)
    const user = await findUserById(userId)
    playlist.usersLiked.splice(playlist.usersLiked.findIndex(x=> x === userId), 1)
    user.likedPlaylists.splice(user.likedPlaylists.findIndex(x=> x === playlistId), 1)
    
    await user.save()

    return playlist.save()
}

module.exports = {
    createPlaylist,
    getPlaylists,
    getOne,
    likePlaylist,
    unlikePlaylist
}