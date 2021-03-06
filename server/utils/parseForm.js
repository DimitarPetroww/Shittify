function parseForm(req, form) {
    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) {
                return reject(err)
            }
            resolve([fields, files]);
        });
    })
}

module.exports = {
    parseForm
}