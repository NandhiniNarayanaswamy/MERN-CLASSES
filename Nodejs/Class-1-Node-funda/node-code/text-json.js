const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': "application/json" });

    const data = {
        productName: "Laptop",
        price: 1000,
        offer: "10%",
        stock: 10,
        timestamp: new Date().toISOString()
    }

    res.end(JSON.stringify(data));
})

server.listen(6001, () => {
    console.log("server is running")
})