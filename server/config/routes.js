const user = require("../controllers/user")

module.exports = (app) => {
    app.use("/api/user", user)
};