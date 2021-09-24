const user = require("../controllers/user")
const song = require("../controllers/song")

module.exports = (app) => {
    app.use("/api/user", user),
    app.use("/api/song", song)
};