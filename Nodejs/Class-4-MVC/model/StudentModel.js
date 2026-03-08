
import mongoose from "mongoose"
const StudentShema = mongoose.Schema({
    id: Number,
    Name: String,
    age: Number,
    Course: String
})

module.exports = new mongoose.model("student", StudentShema)