const router = require("express").Router()

router.post("/create", async (req, res) => {
    console.log(req.body);
})


module.exports = router