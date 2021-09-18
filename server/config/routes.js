const auth = require("../controllers/auth")

module.exports = (app) => {
    app.use("/api/auth", auth)
};