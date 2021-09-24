const User = require("../models/User")

async function createUser({ email, username, password, photoUrl }) {
    if (await findUserByEmail(email)) {
        throw new Error("Email is already taken")
    }
    const existing = new User({ email, username, password, photoUrl })

    return existing.save()
}
async function findUserByEmail(email) {
    const existing = await User.findOne({ email })

    return existing
}
async function findUserById(id) {
    const existing = await User.findById(id)

    return existing
}
async function uploadPhoto(id, photoUrl, publicId) {
    const existing = await User.findById(id)
    existing.photoUrl = photoUrl
    existing.photoId = publicId

    return existing.save()
}
async function changeName(id, username) {
    const existing = await User.findById(id)
    existing.username = username

    return existing.save()
}
module.exports = {
    createUser,
    findUserByEmail,
    uploadPhoto,
    changeName,
    findUserById
}