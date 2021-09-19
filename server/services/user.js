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
async function uploadPhoto(id, photoUrl) {
    const existing = await User.findById(id)
    existing.photoUrl = photoUrl

    return existing.save()
}
module.exports = {
    createUser,
    findUserByEmail,
    uploadPhoto
}