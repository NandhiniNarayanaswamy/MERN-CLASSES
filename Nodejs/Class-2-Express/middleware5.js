const express = require("express")
const app = express();
const PORT = 5000;
const checkapi = ((req, res, next) => {
    const apikey = req.query.apikey
    if (apikey == 12345) {
        next();
    } else {
        res.send("you are not admin")
    }

})

app.get("/admin", checkapi, (req, res) => {
    res.send("WELCOME TO ADMIN")
})
app.listen(5000, () => {
    console.log("Server is running");

})
/*
🌟 What is ? in URL?
? is used to start query parameters in a URL.
Query parameters = extra information sent to the server.
💡 Why we need ?
Because that is how the web standard works.
After ?, we send extra data in:  key=value
🧪 What Happens Inside Express?
http://localhost:5004/admin?apiKey=12345
Express automatically puts it inside:
req.query
so,
req.query = { apiKey: "12345" }
That’s why your middleware does:
const apiKey = req.query.apiKey;
🌟 Multiple Query Parameters
You can send many values:
http://localhost:5004/admin?apiKey=12345&name=Nandhini&role=admin
then,
req.query = {
  apiKey: "12345",
  name: "Nandhini",
  role: "admin"
}
🧠 Very Simple Understanding
? means:
👉 “Hey server, I’m sending extra data.”
http://localhost:5004/admin?apiKey=12345
Break it:

/admin → Route
? → Start of query parameters
apiKey=12345 → Query parameter
Here:
key = apiKey
value = 12345

💡 Why Do We Use Query Parameters?

To send small data like:
Search values
Filters
API keys
Page numbers
Sort options

🛒 Real-Life Example

Imagine an online shopping website:
https://shop.com/products?category=shoes&color=black
Query parameters:
category=shoes
color=black
This tells the server:
👉 Show only black shoes.

🌟 What This Line Means
app.get("/admin", checkApikey, handler)
This means:
When someone visits /admin:

1️⃣ First → run checkApikey
2️⃣ If allowed → run the final function
3️⃣ If not allowed → stop

🧠 Why We Put checkApikey There?
Because we want to protect the admin route.
We don’t want everyone to access /admin.
So we check:
👉 "Do you have the correct API key?"
 */