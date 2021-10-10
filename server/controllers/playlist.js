const formidable = require("formidable")
const playlistService = require("../services/playlist")
const { cloudinaryUpload } = require("../utils/cloudinaryUpload")
const { parseForm } = require("../utils/parseForm")

const router = require("express").Router()

router.get("/", async (req, res) => {
    const search = req.query.search || ""
    try {
        const playlists = await playlistService.getPlaylists(search)
        res.json(playlists)
    } catch (e) {
        res.status(400)
        res.json({ message: e.message })
    }
})
router.get("/:id", async (req, res) => {
    try {
        const playlist = await playlistService.getOne(req.params.id)
        res.json(playlist)
    } catch (e) {
        res.status(400)
        res.json({ message: e.message })
    }
})
router.put("/:id/like", async (req, res) => {
    const userId = req.user._id
    const playlistId = req.params.id

    try {
        const playlist = await playlistService.likePlaylist(playlistId, userId)
        res.json(playlist)
    } catch (e) {
        res.status(400)
        res.json({ message: e.message })
    }
})
router.put("/:id/unlike", async (req, res) => {
    const userId = req.user._id
    const playlistId = req.params.id

    try {
        const playlist = await playlistService.unlikePlaylist(playlistId, userId)
        res.json(playlist)
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
router.post("/:id/add-song", async (req, res) => {
    const song = req.body
    const playlistId = req.params.id
    try {
        const playlist = await playlistService.addSongToPlaylist(playlistId, song)
        res.json(playlist)
    }catch(e) {
        res.status(400)
        res.json({ message: e.message })
    }
})

module.exports = router