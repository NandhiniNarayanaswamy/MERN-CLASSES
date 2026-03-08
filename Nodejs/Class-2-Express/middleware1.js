//   POST
//  -------
const express = require("express")  //imports the Express library.
const app = express() //creates an Express application.  app is your server.
app.use(express.json()) //this Converts JSON → JS object - This is called middleware.  Stores that data inside req.body. Without this line: req.body will be undefined.
app.post("/api/data", (req, res) => {
  console.log(req.body);
  res.json({ message: "Recived", reciveddata: req.body }) // it will give(send) in json formate
})
app.listen(5002, () => {
  console.log("server is running");
})

/*
app.use(express.json()) 
If client sends this JSON:
{
  "name": "Nandhini",
  "age": 22
}
After express.json() runs:
req.body = {
  name: "Nandhini",
  age: 22
}
So this line allows your server to understand JSON data.

app.post("/api/data", (req, res) => {
🔹 What this does:
Creates a POST route.
URL is /api/data
It runs when someone sends a POST request to -> http://localhost:5002/api/data

what is app.use()?
app.use() is a method in Express.js that is used to apply middleware to your application.
In simple words 👇
app.use() tells Express: “Run this code for every request before reaching the route.”
🔹 What is Middleware? (Beginner Friendly)
Middleware is a function that runs in between:
Request  →  Middleware  →  Route  →  Response
It can:
Read request data
Modify request or response
Stop the request
Pass control to the next step
*/