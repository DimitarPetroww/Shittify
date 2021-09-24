const { Schema, model } = require("mongoose")

const schema = new Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    photoUrl: { type: String, default: "" },
    photoId: { type: String, default: "" }
    // likedSongs: [{type: Schema.Types.ObjectId, ref: "Movie" }],
    // ownedMovies: [{type: Schema.Types.ObjectId, ref: "Movie" }]
})

module.exports = model("User", schema)