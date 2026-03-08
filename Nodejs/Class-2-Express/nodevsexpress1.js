
//---express js ----//
// const express = require("express")
// const app = express() // It creates an Express application (server). app is your main server object.
// const PORT = 5001
// app.get("/", (req, res) => {
//     res.send("HIII Nandhu")
// })
// app.listen(PORT, () => {
//     console.log("server is running");

// })

// ---- nodejs ----//
const http = require("http")
const app = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" })
    res.end("HII Nodejs")
})
app.listen(5000, () => {
    console.log("Server is runnning");

})