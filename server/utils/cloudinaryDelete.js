const cloudinary = require("cloudinary").v2

function cloudinaryDelete(id, type = "image") {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.destroy(id, {  resource_type: type }, (err, response) => {
            if (err) return reject(err);
            return resolve();
        })
    });
}

module.exports = {
    cloudinaryDelete
}