const cloudinary = require("cloudinary").v2

function cloudinaryUpload(file) {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(file, {folder: "Shittify"}, (err, response) => {
            if (err) return reject(err);
            return resolve(response.url);
        })
    });
}

module.exports = {
    cloudinaryUpload
}