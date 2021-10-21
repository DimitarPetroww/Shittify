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
    return Playlist.findById(id).populate("songs")
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
async function addSongToPlaylist(playlistId, songId) {
    const playlist = await getOne(playlistId)

    playlist.songs.push(songId)

    return playlist.save()
}
async function removeSongFromPlaylist(playlistId, songId) {
    const playlist = await getOne(playlistId)
    const index = playlist.songs.findIndex(x=> x._id == songId)
    playlist.songs.splice(index, 1)

    return playlist.save()
}
async function deletePlaylist(playlist) {
    const user = await findUserById(playlist.owner)

    const index = user.ownedPlaylists.findIndex(x => x == playlist._id)
    user.ownedPlaylists.splice(index, 1)
    return Playlist.deleteOne({_id: playlist._id})
}


module.exports = {
    createPlaylist,
    getPlaylists,
    getOne,
    likePlaylist,
    unlikePlaylist,
    addSongToPlaylist,
    removeSongFromPlaylist,
    deletePlaylist
}