const express = require("express")
const route = express.Router()
route.get("/", (req, res) => {
    res.json({ message: "recived data" })
})
route.post("/", (req, res) => {
    const { name, email } = req.body
    if (!name || !email) {
        res.status(404).json({ error: "Name or email is missing" })
    }
    res.status(201).json({
        message: "Data recived",
        users: {
            name: name,
            email: email
        }
    })
})
module.exports = route
