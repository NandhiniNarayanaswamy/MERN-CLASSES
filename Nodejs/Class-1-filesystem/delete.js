const fs = require("fs")
fs.unlink("./sample.txt", (err) => {
    if (err) {
        console.log(err);

    }
    console.log("file has deleted");

})