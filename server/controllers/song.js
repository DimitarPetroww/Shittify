const formidable = require("formidable")
const songService = require("../services/song")
const { cloudinaryUpload } = require("../utils/cloudinaryUpload")
const { cloudinaryDelete } = require("../utils/cloudinaryDelete")
const { parseForm } = require("../utils/parseForm")

const router = require("express").Router()

router.get("/", async (req, res) => {
    const search = req.query.search || ""
    try {
        const songs = await songService.getSongs(search)
        res.json(songs)
    } catch (e) {
        res.status(400)
        res.json({ message: e.message })
    }
})
router.get("/:id", async (req, res) => {
    try {
        const song = await songService.getOne(req.params.id)
        res.json(song)
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
        const [audio, audioId] = await cloudinaryUpload(files.audio.path, "video")
        const song = await songService.createSong({ ...fields, image, imageId, audio, audioId, owner: req.user._id })

        res.json(song)
    } catch (e) {
        res.status(400)
        res.json({ message: e.message })
    }
})
router.put("/:id/like", async (req, res) => {
    const userId = req.user._id
    const songId = req.params.id

    try {
        const song = await songService.likeSong(songId, userId)
        res.json(song)
    } catch (e) {
        res.status(400)
        res.json({ message: e.message })
    }
})
router.put("/:id/unlike", async (req, res) => {
    const userId = req.user._id
    const songId = req.params.id

    try {
        const song = await songService.unlikeSong(songId, userId)
        res.json(song)
    } catch (e) {
        res.status(400)
        res.json({ message: e.message })
    }
})
router.delete("/:id", async (req, res) => {
    try {
        const song = await songService.getOne(req.params.id)
        await cloudinaryDelete(song.imageId)
        await cloudinaryDelete(song.audioId, "video")
        await songService.deleteSong(song)

        res.json(song)
    } catch (e) {
        res.status(400)
        res.json({ message: e.message })
    }
})
router.patch("/:id/change-image", async (req, res) => {
    const form = formidable()
    try {
        const song = await songService.getOne(req.params.id)
        await cloudinaryDelete(song.imageId)
        const [_, { file }] = await parseForm(req, form)
        const [fileUrl, publicId] = await cloudinaryUpload(file.path)
        const temp = await songService.changePhoto(song, fileUrl, publicId)
        res.json(temp)
    } catch (error) {
        res.status(400)
        res.json({ message: error.message })
    }
})

module.exports = router