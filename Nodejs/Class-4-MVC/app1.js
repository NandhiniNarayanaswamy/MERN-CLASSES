1//every thing in File

const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 5004
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/StudentsDB")
    .then(() => console.log("mongoDB connected"))
    .catch((error) => console.log(error));

const StudentShema = mongoose.Schema({
    id: Number,
    Name: String,
    age: Number,
    Course: String
})

const Student = new mongoose.model("student", StudentShema)
app.post("/student", async (req, res) => {
    const student = new Student(req.body)
    await student.save()
    res.json(req.body)
})

app.get("/student", async (req, res) => {
    const student = await Student.find()
    res.json(student)
    console.log(student);

})

app.get("/student/:id", async (req, res) => {
    const student = await Student.findById(req.params.id)
    res.json(student)
})

app.put("/student/:id", async (req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(student)
})

app.delete("/student/:id", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id)
    res.json({ message: "Data was Deleted" })
})

app.listen(port, () => {
    console.log("Server is running");

})