const fs = require("fs")
fs.mkdir("jullie", (err) => {
    if (err) {
        console.log("error");

    }
    console.log("file created");

})