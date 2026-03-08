const express = require("express")
const connectDB = require("./config/db")
const teacherroutes = require("./routes/teacherroute")
const app = express();
app.use(express.json())
require("dotenv").config()
//connect to mongodb
connectDB();
//schema for table
app.use("/api/teacher", teacherroutes)
PORT = process.env.PORT
//post-add values


app.listen(PORT, () => { console.log("server is runing") })