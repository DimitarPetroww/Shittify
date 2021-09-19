const express = require("express")
const path = require("path")
const dotenv = require("dotenv")

const app = express()
dotenv.config({
    path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`)
})

async function init() {
    try {
        await require("./config/db")()
        require("./config/cloudinary")()
        require("./config/express")(app)
        require("./config/routes")(app)
        app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}...`));
    }catch(e) {
        console.log(e.message);
    }
}
init()
