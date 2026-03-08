// built in packages...node js is providing built in packages

//http module

//import the built in http module

const http = require('https');

// create the server
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Hello hi guys")

});

//define the port number
const PORT = 5001;


//start the server
server.listen(PORT, () => {
    console.log(`server is runnning at the port ${PORT}`)
})