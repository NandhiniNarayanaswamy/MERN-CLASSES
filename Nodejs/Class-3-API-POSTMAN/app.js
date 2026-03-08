const express = require("express")
const app = express()
app.use(express.json())
const users = [
    { id: 1, name: "Nandhu", age: 90 },
    { id: 2, name: "siva", age: 80 },
]
app.get("/api/users", (req, res) => {
    res.json(users)
})
app.get("/api/users/:id", (req, res) => { //: is dynamic value from url v can take
    const userid = parseInt(req.params.id)
    const usersdata = users.find(user => user.id === userid)
    if (!usersdata) {
        return res.status(404).json({ message: "user not found" })
    }
    res.json(usersdata)

})
//posting the data
app.post("/api/users", (req, res) => {
    const { name, age } = req.body
    const newuser = {
        id: users.length + 1,
        name, age
    }
    users.push(newuser)
    res.status(201).json(newuser)
})

//deleting the data
app.delete("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const index = users.findIndex(user => user.id === id)
    if (index == -1) {
        res.status(404).json({ message: "user not found" })
    }
    const deleteuser = users.splice(index, 1) // array.splice(startIndex, deleteCount)
    res.json(deleteuser[0])
})

//patch the data only few changes
app.patch("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const userfind = users.find((user) => user.id === id)
    if (!userfind) {
        res.status(404).json({ message: "user not found" })
    }
    const { name, age } = req.body
    if (name !== undefined) { //if name is provided then only update
        userfind.name = name
    }
    if (age !== undefined) {
        userfind.age = age
    }
    res.json(userfind)
})

//put method
app.put("/api/users/:id", (req, res) => {
    //convert the ID from URL to number
    const id = parseInt(req.params.id);

    //extract name, age from the body

    const { name, age } = req.body;

    // find the index of the user with the given ID
    const index = users.findIndex(user => user.id === id);

    //if user is not found, return 404
    if (index == -1) {
        return res.status(404).json({ message: "user is not found" })
    }

    // replace the entire user object
    users[index] = { id, name, age };

    //return the updated user
    res.json(users[index])
})
app.listen(5001, () => {
    console.log("server is runnuuing");

})
/*
🧠 Step 2: What this condition means
if (!usersdata)
This means:
"If usersdata is falsy"
Falsy values in JavaScript:
undefined
null
0
""
false
In this case, if .find() didn’t find anything → usersdata is undefined.
So !usersdata becomes:
!undefined  // true
*/