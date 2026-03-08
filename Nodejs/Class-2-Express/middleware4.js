const express = require("express")
const app = express();
const userRoute = require("./routes/users")
app.use("/users", userRoute)
app.listen(5000, () => {
    console.log("server is running");

})

/*
app is the main application.

It:
Starts the server (app.listen)
Receives all requests
Connects all routes and middleware
Think of it like:
🏢 Main building

🧠 How It Works Internally
When you write:
app.use("/users", userRoutes);
What happens?
Request comes to server
app checks URL
If it starts with /users
It forwards request to that router (mini app)
So router handles only its part.
*/