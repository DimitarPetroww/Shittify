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
async function getOne(id) {
    return Song.findById(id)
}

async function createSong(data) {
    const existing = new Song(data)
    const user = await findUserById(data.owner)
    user.ownedSongs.push(existing._id)
    await user.save()
    return existing.save()
}
async function likeSong(songId, userId) {
    const song = await getOne(songId)
    const user = await findUserById(userId)
    song.usersLiked.push(userId)
    user.likedSongs.push(songId)
    
    await user.save()

    return song.save()
}
async function unlikeSong(songId, userId) {
    const song = await getOne(songId)
    const user = await findUserById(userId)
    song.usersLiked.splice(song.usersLiked.findIndex(x=> x === userId), 1)
    user.likedSongs.splice(user.likedSongs.findIndex(x=> x === songId), 1)
    
    await user.save()

    return song.save()
}


module.exports = {
    createSong,
    getSongs,
    getOne,
    likeSong,
    unlikeSong
}