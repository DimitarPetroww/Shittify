const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const router = require("express").Router()

const authService = require("../services/auth")

router.post("/register", async (req, res) => {
    const data = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        repeatPassword: req.body.repeatPassword
    }
    if (Object.values(data).some(x => x == "")) {
        res.status(400)
        return res.json({ message: "All fields are required" })
    }
    if (data.password !== data.repeatPassword) {
        res.status(400)
        return res.json({ message: "Passwords must match" })
    }
    try {
        const hashedPassword = await bcrypt.hash(data.password, Number(process.env.SALT_ROUNDS))
        const user = await authService.createUser({ email: data.email, username: data.username, password: hashedPassword })
        const temp = { email: user.email, _id: user._id, username: user.username }

        const token = jwt.sign(temp, process.env.TOKEN_SECRET)
        res.cookie(process.env.COOKIE_NAME, token, { httpOnly: true })
        res.json(temp)
    } catch (error) {
        res.status(400)
        res.json({ message: error.message })
    }
})

module.exports = router