import mongoose from "mongoose" // "Bring the mongoose package into this file so we can use it."
const connectDB = (DATABASE_URL) => {
    mongoose.connect(DATABASE_URL)
    console.log("Database Connected Successfully");
}
export default connectDB

// /*
// const connectDB=(DATABASE_URL)=>{
//     mongoose.connect(DATABASE_URL)
//     console.log("Database connected successfully");

// }
// This function:

// 1️⃣ Takes a database URL
// 2️⃣ Connects your app to MongoDB
// 3️⃣ Prints success message
// */






