const Song = require("../models/Song")
const { findUserById } = require("./user")

async function getSongs(search) {
    return Song.find({
        $or: [
            { name: new RegExp(search, "i") },
            { artist: new RegExp(search, "i") }
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
    song.usersLiked.splice(song.usersLiked.findIndex(x => x === userId), 1)
    user.likedSongs.splice(user.likedSongs.findIndex(x => x === songId), 1)

    await user.save()

    return song.save()
}
async function deleteSong(song) {
    const user = await findUserById(song.owner)
    const index = user.ownedSongs.findIndex(x => x == song._id)
    user.ownedSongs.splice(index, 1)
    await user.save()
    
    return Song.deleteOne({ _id: song._id })
}
async function changePhoto(song, photoUrl, publicId) {
    song.image = photoUrl
    song.imageId = publicId

    return song.save()
}
async function changeSongName(songId, name) {
    const song = await getOne(songId)
    song.name = name

    return song.save()
}

module.exports = {
    createSong,
    getSongs,
    getOne,
    likeSong,
    unlikeSong,
    deleteSong,
    changePhoto,
    changeSongName
}