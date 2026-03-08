const express = require("express")//We are importing the Express library
const route = express.Router();//This creates a mini app (a small router).
route.get("/", (req, res) => {
    res.send("Hii Nandhini from routes")
})
router.get("/:id", (req, res) => res.send(`user id: ${req.params.id}`))
module.exports = route

/*
🧩 2️⃣ What is express.Router()?
const router = express.Router();
👉 router is like a mini app.
It is used to:
Group related routes
Keep code clean
Organize large projects
It DOES NOT start a server.
It is only for defining routes.

A router is called a mini app because:
It can have its own routes
It can have its own middleware
It behaves like app
But it cannot start a server

🏢 Main building → app
🏬 Small department inside → router

🧠 Very Simple Final Understanding
app = Boss
router = Manager
Boss delegates work to managers.

🎯 One-Line Definition
A mini app (router) is a small, modular route handler that works like Express app but is attached to the main app.
 */

/*
router.get("/:id", (req, res) => res.send(`user id: ${req.params.id}`))
🧩 Part 1: router.get()
get means:
👉 When someone sends a GET request
(GET request = when you open something in browser)
Example:
http://localhost:5000/users/10
Browser sends a GET request.

🧩 Part 2: "/:id"

This is the important part.
: means dynamic value.
So :id means:
👉 "Accept anything in this place and store it in variable called id"
Example URLs that match this:
/users/5
/users/100
/users/abc

🧩 Part 3: (req, res) =>

This is a function.
req → request object (information coming from user)
res → response object (what we send back)

🧩 Part 4: req.params.id

This is the MOST IMPORTANT part.
When you use :id in URL,
Express automatically stores it inside:
req.params
So:
If URL is: /users/10
Then:req.params = { id: "10" }
so, req.params.id  // gives 10

🧩 Part 5: Template String
`user id: ${req.params.id}`
This is called template string (backticks ).
It means:
👉 Insert the value inside ${}
If id = 10
It becomes:
user id: 10
 */