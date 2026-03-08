// built in packages...node js is providing built in packages

//http module

//import the built in http module

const http = require('http');

// create the server
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" })
    res.end(`
        <html>
        <head><title>Sample node js app</title></head>
        <body>
        <h2> Login Form </h2>
        <form>
           <label>Username: </label>
           <input type = "text" name = "username" /> <br><br>
           <label>password: </label>
           <input type = "password" name = "password" /> <br><br>
        </form>
        </body>
        
        `)

});

//define the port number
const PORT = 5001;


//start the server
server.listen(PORT, () => {
    console.log(`server is runnning at the port ${PORT}`)
})