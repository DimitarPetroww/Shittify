async function request(URL, options = {}) {
    try {
        const r = await fetch(URL, Object.assign(options, { credentials: "include" }))
        const data = await r.json()
        if (!r.ok) {
            throw new Error(data.message)
        }
        return data
    } catch (e) {
        throw e
    }
}

export {
    request
}