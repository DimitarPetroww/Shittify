const express = require('express');
const cp = require("cookie-parser")

module.exports = (app) => {
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    app.use(cp())
    // app.use(cors({
    //     origin: config.origin,
    //     credentials: true,
    // }))
    // app.use(auth())
};