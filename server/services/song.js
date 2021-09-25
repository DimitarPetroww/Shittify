const Song = require("../models/Song")

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

    return existing.save()
}

module.exports = {
    createSong,
    getSongs
}