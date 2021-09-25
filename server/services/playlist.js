const Playlist = require("../models/Playlist")

async function getPlaylists(search) {
    return Playlist.find({
        name: new RegExp(search, "i")
    })

}

async function createPlaylist(data) {
    const existing = new Playlist(data)

    return existing.save()
}

module.exports = {
    createPlaylist,
    getPlaylists
}