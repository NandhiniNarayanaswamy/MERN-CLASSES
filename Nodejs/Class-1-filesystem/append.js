const fs = require("fs")
fs.appendFile("./sample.txt", "/Bangalore", (err) => {
    if (err) {
        console.log(err);

    }
    console.log("data has append");

})