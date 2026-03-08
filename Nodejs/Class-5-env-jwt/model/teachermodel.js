const mongoose = require("mongoose")
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
module.exports = TeacherMod