const fs = require("fs")
fs.mkdir("component", (err) => {
    if (err) {
        console.log(err);

    }
    console.log("created folder");

})