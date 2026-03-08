//  req -> contains the details about the incoming request.
// res -> sends the response to the client
// next -> passes the control to the next middleware in the chain

const express = require("express");

const app = express();

//middlware to log the request details

app.use((req, res, next) => {
    console.log(`method ${req.method}, URL: ${req.url}`);
    console.log("middleware 1")
    next(); //passes the control to the next middlware 
})

app.use((req, res, next) => {
    console.log(`method ${req.method}, URL: ${req.url}`);
    console.log("middleware 2")
    next(); //passes the control to the next middlware 
})
// middlware
app.get("/about", (req, res) => {
    res.send("hello hi how are you")
})

app.listen(5004, () => {
    console.log("server is running")
})
/*
✅ First Understand: What is Middleware?

Middleware is just a function that runs between request and response.

When client sends request →
Server does some work →
Then sends response.

Middleware runs in between these steps.
✅ First Middleware
app.use((req, res, next) => {
👉 app.use() means:
"Run this function for every request."
👉 This function has 3 parameters:
req → Request object (contains request details)
res → Response object (used to send response)
next → Function to pass control to next middleware

✅ When Do We Use next()?

We use next() when:

1️⃣ The middleware is NOT ending the request

If your middleware is just:
Logging
Authentication check
Modifying request
Checking token
Validating data

2️⃣ When You Want Multiple Middlewares To Run

If you have:
Logger middleware
Auth middleware
Route handler
Each middleware must call next() to move forward.

❌ When Do We NOT Use next()?
When you already sent response:
res.send("Done");
*/