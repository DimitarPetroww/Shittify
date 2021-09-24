const formidable = require("formidable")
const songService = require("../services/song")
const { cloudinaryUpload } = require("../utils/cloudinaryUpload")
const { parseForm } = require("../utils/parseForm")

const router = require("express").Router()

router.post("/create", async (req, res) => {
    const form = formidable()
    try {
        const [fields, files] = await parseForm(req, form)
        if (Object.values(fields).some(x => x === "") || Object.keys(files).length === 0) {
            throw new Error("All fields are required")
        }
        const [image, imageId] = await cloudinaryUpload(files.image.path)
        const [audio, audioId] = await cloudinaryUpload(files.audio.path, "video")
        const song = await songService.createSong({ ...fields, image, imageId, audio, audioId, owner: req.user._id })

        res.json(song)
    } catch (e) {
        res.status(400)
        res.json({ message: e.message })
    }
})


module.exports = router