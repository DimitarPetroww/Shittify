const User = require("../models/User")

async function createUser({ email, username, password }) {
    if (await findUserByEmail(email)) {
        throw new Error("Email is already taken")
    }
    const existing = new User({ email, username, password })

    return existing.save()
}
async function findUserByEmail(email) {
    const existing = await User.findOne({ email })

    return existing
}
module.exports = {
    createUser,
    findUserByEmail
}