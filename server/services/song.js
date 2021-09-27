const Song = require("../models/Song")
const { findUserById } = require("./user")

async function getSongs(search) {
    return Song.find({
        $or: [
            {name: new RegExp(search, "i")},
            {artist: new RegExp(search, "i")}
        ]
    })

}

async function createSong(data) {
    const existing = new Song(data)
    const user = await findUserById(data.owner)
    user.ownedSongs.push(existing._id)
    await user.save()
    return existing.save()
}

module.exports = {
    createSong,
    getSongs
}