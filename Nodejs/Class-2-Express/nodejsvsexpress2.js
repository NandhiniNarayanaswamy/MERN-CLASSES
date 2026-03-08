// //--node js--//  // node routing (manual routing) in node js
// const http = require("http")
// const url = require("url")
// const app = http.createServer((req, res) => {
//     const path = url.parse(req.url).pathname
/* if user opens browser page http://localhost:5001/about?name=nandhini
req.url === "/about?name=nandhini"
req.url is just a string
url.parse(req.url)  => this converts string to object
.pathname extracts only the route

*/
//     if (path === "/") {
//         res.writeHead(200, { "content-type": "text/plain" })
//         res.end("Home page")
//     } else if (path === "/about") {
//         res.writeHead(200, { "content-type": "text/plain" })
//         res.end("About page")
//     } else {
//         res.writeHead(404, { "content-type": "text/plain" })
//         res.end("Page not found")
//     }
// })
// app.listen(5000, () => {
//     console.log("server is running");

// })

const express = require("express")
const app = express()
app.get("/", (req, res) => res.send("Home page express"))
app.get("/about", (req, res) => res.send("About page express"))
app.use((req, res) => { res.send("page not found") })  /*
app.use(...)
app.use() runs for every request
If no path is given, it applies to all routes 
if no routes is match it will run
*/
app.listen(5001, () => {
    console.log("server is running");
})