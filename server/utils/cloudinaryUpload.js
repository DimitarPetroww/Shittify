const cloudinary = require("cloudinary").v2

function cloudinaryUpload(file, type = "image") {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(file, { folder: "Shittify", resource_type: type }, (err, response) => {
            if (err) return reject(err);
            return resolve([response.url, response.public_id]);
        })
    });
}

module.exports = {
    cloudinaryUpload
}