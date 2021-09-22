const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const formidable = require("formidable")
const router = require("express").Router()

const userService = require("../services/user")
const { parseForm } = require("../utils/parseForm")
const { cloudinaryUpload } = require("../utils/cloudinaryUpload")


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
        const user = await userService.createUser({ email: data.email, username: data.username, password: hashedPassword, photoUrl: "" })
        const temp = { email: user.email, _id: user._id, username: user.username, photoUrl: user.photoUrl }

        const token = jwt.sign(temp, process.env.TOKEN_SECRET)
        res.cookie(process.env.COOKIE_NAME, token, { httpOnly: true })
        res.json(temp)
    } catch (error) {
        res.status(400)
        res.json({ message: error.message })
    }
})
router.post("/login", async (req, res) => {
    const data = {
        email: req.body.email,
        password: req.body.password,
    }
    if (Object.values(data).some(x => x == "")) {
        res.status(400)
        return res.json({ message: "All fields are required" })
    }
    try {
        const user = await userService.findUserByEmail(data.email)
        if (!user) {
            throw new Error("Wrong email or password")
        }
        const isMatch = await bcrypt.compare(data.password, user.password)
        if (!isMatch) {
            throw new Error("Wrong email or password")
        }
        const temp = { email: user.email, _id: user._id, username: user.username, photoUrl: user.photoUrl }
        const token = jwt.sign(temp, process.env.TOKEN_SECRET)

        res.cookie(process.env.COOKIE_NAME, token, { httpOnly: true })
        res.json(temp)
    } catch (error) {
        res.status(400)
        res.json({ message: error.message })
    }
})
router.post("/logout", async (req, res) => {
    res.clearCookie(process.env.COOKIE_NAME)
    res.json({})
})
router.post("/upload", async (req, res) => {
    const form = formidable()
    try {
        const [data, { file }] = await parseForm(req, form)
        const fileUrl = await cloudinaryUpload(file.path)
        const user = await userService.uploadPhoto(req.user._id, fileUrl)
        res.json(user)
    } catch (error) {
        res.status(400)
        res.json({ message: error.message })
    }
})
router.post("/rename", async (req, res) => {
    const username = req.body.username
    if(username === "") {
        res.status(400)
        return res.json({ message: "Username is required" })
    }
    try {
        const user = await userService.changeName(req.user._id, username)
        res.json(user.username)
    } catch (error) {
        res.status(400)
        res.json({ message: error.message })
    }
})

module.exports = router