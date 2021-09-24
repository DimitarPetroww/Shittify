const Song = require("../models/Song")

async function createSong(data) {
    const existing = new Song(data)

    return existing.save()
}

module.exports = {
    createSong
}