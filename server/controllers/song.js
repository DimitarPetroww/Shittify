const formidable = require("formidable")
const { cloudinaryUpload } = require("../utils/cloudinaryUpload")
const { parseForm } = require("../utils/parseForm")

const router = require("express").Router()

router.post("/create", async (req, res) => {
    const form = formidable()
    try {
        const [fields, files] = await parseForm(req, form)
        const image = await cloudinaryUpload(files.image.path)
        const audio = await cloudinaryUpload(files.audio.path, "video")
        console.log(fields);
    } catch (e) {
        res.status(400)
        res.json({ message: e.message })
    }
})


module.exports = router