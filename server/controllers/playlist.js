const formidable = require("formidable")
const playlistService = require("../services/playlist")
const { cloudinaryUpload } = require("../utils/cloudinaryUpload")
const { parseForm } = require("../utils/parseForm")

const router = require("express").Router()

router.get("/", async (req, res) => {
    const search = req.query.search || ""
    try {
        const songs = await playlistService.getPlaylists(search)
        res.json(songs)
    } catch (e) {
        res.status(400)
        res.json({ message: e.message })
    }
})

router.post("/create", async (req, res) => {
    const form = formidable()
    try {
        const [fields, files] = await parseForm(req, form)
        if (Object.values(fields).some(x => x === "") || Object.keys(files).length === 0) {
            throw new Error("All fields are required")
        }
        const [image, imageId] = await cloudinaryUpload(files.image.path)
        const song = await playlistService.createPlaylist({ ...fields, image, imageId, owner: req.user._id })

        res.json(song)
    } catch (e) {
        res.status(400)
        res.json({ message: e.message })
    }
})


module.exports = router