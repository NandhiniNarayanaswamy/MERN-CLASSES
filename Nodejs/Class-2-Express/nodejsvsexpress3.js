// const http = require("http")
// const url = require("url")
// const app = http.createServer((req, res) => {
//     const path = url.parse(req.url).pathname
//     if (path === "/api/users") {
//         res.writeHead(200, { "content-type": "application/json" })
//         res.end(JSON.stringify(
//             [
//                 { id: 1, name: "venkat" },
//                 { id: 2, name: "Nandhu" },
//                 { id: 3, name: "rani" }
//             ]
//         ))
//     }
//     else if (path === "/about") {
//         res.writeHead(200, { "content-type": "text/plain" })
//         res.end("about page")
//     } else {
//         res.writeHead(404, { "content-type": "text-plain" })
//         res.end("page not found")
//     }
// })
// app.listen(5000, () => {
//     console.log("server is running");

// })


//express
// const express = require("express")
// const app = express()
// app.get("/api/user", (req, res) => res.send(
//     [
//         { id: 1, name: "nandhu" },
//         { id: 2, name: "Venkatesh" },
//         { id: 3, name: "Rani" }
//     ]
// ))
// app.get("/about", (req, res) => res.send("about page express"))
// app.use((req, res) => {
//     console.log("page not found");
// })
// app.listen(5000, () => {
//     console.log("server is running");
// })