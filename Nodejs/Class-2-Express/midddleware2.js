const express = require("express")
const app = express()
app.use(express.urlencoded({ extended: true })) // it coverts form data to js object and store in req.body
app.post("/submit-form", (req, res) => { //if /submit-form matches it run remaining
  console.log(req.body);
  res.json(`recived data:${JSON.stringify(req.body)}`) //1st JSON.stringify will run it convert object to string then res.json sends this string to json string

})
app.listen(5001, () => {
  console.log("server is running");
})

/*

🔹 What is urlencoded?

When you submit a normal HTML form, data looks like this:
name=Nandhini&age=22
This is called URL-encoded format.
express.urlencoded() converts it into:
{
  name: "Nandhini",
  age: "22"
}

🔹 What does { extended: true } mean?

It allows sending nested objects from forms.
eg:-
user[name]=Nandhini&user[age]=22
With extended: true, Express can convert it properly into:
{
  user: {
    name: "Nandhini",
    age: "22"
  }
}
For beginners, just remember:
extended: true → Allows complex form data.

------------------------------------------------------------------------------------------

Case 1️⃣ You pass an object ✅ (MOST COMMON)
res.json({ username: "Venkat" });
Browser receives:
{
  "username": "Venkat"
}
👉 This is JSON object, NOT string.
Case 2️⃣ You pass a string ❌
res.json("Hello");
Browser receives:
"Hello"
👉 This is a JSON string (notice quotes)
*/