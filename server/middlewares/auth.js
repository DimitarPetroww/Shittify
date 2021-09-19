const jwt = require("jsonwebtoken")

module.exports = () => (req, res, next) => {
    const token = req.cookies[process.env.COOKIE_NAME];
    try {
        const user = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = user
    } catch (error) {
        res.clearCookie(process.env.COOKIE_NAME);
    }

    next()
}