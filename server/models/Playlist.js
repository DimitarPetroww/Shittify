const { Schema, model } = require("mongoose")

const schema = new Schema({
   name: {type: String, required: true},
   image: {type: String, required: true},
   imageId: {type: String, required: true},
   songs: [{type: Schema.Types.ObjectId, ref: "Song", default: []}],
   usersLiked: [{type: Schema.Types.ObjectId, ref: "User", default: []}],
   owner: {type: Schema.Types.ObjectId, ref: "User", required: true}
})

module.exports = model("Playlist", schema)