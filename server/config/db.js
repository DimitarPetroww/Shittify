const mongoose = require('mongoose');

module.exports = async () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = mongoose.connection
        db.on("error", (err) => {
            reject(err.message)
        })
        db.on("open", () => {
            resolve("connected!")
        })
    })
}