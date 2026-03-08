// import express from "express" //👉 This imports Express library.
// import connectDB from "./db/connectdb.js"//👉 This imports your custom database connection function.
// import { createData } from "./models/Movie.js"
// const app = express()//👉 This creates your Express application.
// const port = 5004//👉 This sets the port number. Port is like a door number of your server.
// const DATABASE_URL = "mongodb://localhost:27017/Starting" //👉 This is your MongoDB connection string
// connectDB(DATABASE_URL)//👉 This calls your database connection function.
// createData()
// app.listen(port, () => { //👉 This starts your server.
//     console.log(`server is running at ${port}`);

// })





import express from "express"
import connectDB from "./db/connectdb.js"
// import { createData } from "./models/Movie.js"
import { alldoc } from "./models/Movie.js";
const app = express();
const port = 5004;
const DATABASE_URL = "mongodb://localhost:27017/myown"
connectDB(DATABASE_URL)
// createData()
alldoc()
app.listen(port, () => {
    console.log("Server is running");

})