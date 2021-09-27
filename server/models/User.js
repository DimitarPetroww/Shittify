const { Schema, model } = require("mongoose")

const schema = new Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    photoUrl: { type: String, default: "" },
    photoId: { type: String, default: "" },
    ownedPlaylists: [{ type: Schema.Types.ObjectId, ref: "Playlist", default: [] }],
    ownedSongs: [{ type: Schema.Types.ObjectId, ref: "Song", default: [] }],
    likedPlaylists: [{ type: Schema.Types.ObjectId, ref: "Playlist", default: [] }],
    likedSongs: [{ type: Schema.Types.ObjectId, ref: "Song", default: [] }],
})

module.exports = model("User", schema)