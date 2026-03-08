const express = require("express")
const mongoose = require("mongoose")
const app = express();
app.use(express.json())

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/TeacherDB")
    .then(() => { console.log("MongoDB is connected") })
    .catch((error) => console.log(error));

//schema for table
const TeacherSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        reuired: true
    },
    classs: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// create Model - table

const TeacherMod = new mongoose.model("Staff", TeacherSchema)

//post-add values

app.post("/api/teacher", async (req, res) => {
    try {
        const { Name, Age, classs } = req.body;
        const teacherr = new TeacherMod({ Name, Age, classs });
        await teacherr.save()
        res.status(201).json(teacherr)
    } catch (error) {
        res.status(400).json({ message: "error adding" })
    }
})
app.get("/api/teacher", async (req, res) => {
    try {
        const teaches = await TeacherMod.find()
        res.json(teaches)
    }
    catch (error) {
        console.log(error);

    }
})

app.put("/api/teacher/:id", async (req, res) => {
    const { id } = req.params;
    const updating = await TeacherMod.findByIdAndUpdate(id, req.body, { new: true })
    res.json(updating)
})

app.delete("/api/teacher/:id", async (req, res) => {
    const { id } = req.params;
    const deleting = await TeacherMod.findByIdAndDelete(id)
    res.json({ message: "data deleted" })
})
app.listen(5004, () => { console.log("server is runing") })