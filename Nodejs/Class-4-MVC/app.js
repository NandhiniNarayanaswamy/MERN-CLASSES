1//every thing in File

const express = require("express")
const connectDB = require("./config/db.js")
const StudentRoute = require("./routes/StudentRoute.js")
const mongoose = require("mongoose")
const app = express()
const port = 5004

connectDB();
app.use(express.json())
app.use("/student", StudentRoute)
app.listen(port, () => {
    console.log("Server is running");

})