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

module.exports = {
    createPlaylist,
    getPlaylists
}