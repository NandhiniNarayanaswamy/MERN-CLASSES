const express = require("express")
const app = express();
const userdata = require("./routes/hello")
app.use(express.json()) // in get we don't use this but
/*
🧠 Then Why Do We Still Add It?
Because in real backend applications:
Today → You have only GET
Tomorrow → You will add POST, PUT, PATCH
Instead of adding it later, developers add it once in app.js as a standard setup.
It doesn’t harm anything.
It just prepares your app for future POST requests.
*/
app.use("/admin/user", userdata)
app.use("/admin/data", userdata)
app.listen(5000, () => {
    console.log("server is running");

})