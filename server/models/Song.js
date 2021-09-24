const { Schema, model } = require("mongoose")

const schema = new Schema({
    name: { type: String, required: true },
    artist: { type: String, required: true },
    image: { type: String, required: true },
    imageId: { type: String, required: true },
    audio: { type: String, required: true },
    audioId: { type: String, required: true },
    usersLiked: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true }
})

module.exports = model("Song", schema)