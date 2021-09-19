const express = require('express');
const cp = require("cookie-parser")
const cors = require("cors");
const auth = require('../middlewares/auth');

module.exports = (app) => {
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    app.use(cp())
    app.use(cors({
        origin: process.env.origin,
        credentials: true,
    }))
    app.use(auth())
};