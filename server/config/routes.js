const user = require("../controllers/user")
const song = require("../controllers/song")
const playlist = require("../controllers/playlist")


module.exports = (app) => {
    app.use("/api/user", user),
    app.use("/api/songs", song)
    app.use("/api/playlists", playlist)

};