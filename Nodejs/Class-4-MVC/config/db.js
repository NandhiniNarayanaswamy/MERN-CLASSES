import mongoose from "mongoose"
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/StudentsDB")
        console.log("mongoDB connected")
    } catch (error) {
        console.log(error);

    }
}
module.exports = connectDB

