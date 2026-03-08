const fs = require("fs")
fs.writeFile("sample.txt", "Nandhini Software engineer", (err) => {
    if (err) {
        console.log(err);

    }
    console.log("data written successfull");

})