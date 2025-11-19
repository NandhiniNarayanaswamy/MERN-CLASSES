🎯 Error-handling
*********************
=> Error handling in JavaScript is the process of anticipating, catching, and responding to errors that occur while a program is running.
=> JavaScript provides built-in mechanisms to catch and handle errors gracefully instead of crashing the application.

🔧 Common Errors in JavaScript
*********************************
✅ Syntax Error: Typing mistakes or incorrect syntax
let a = ; → Missing value
-----------------------------------------------------------------
✅ Reference Error: Using variables that haven't been declared
console.log(x); // x is not defined
-----------------------------------------------------------------
✅ Type Error: Performing an operation on an incompatible type
null.toString()
-----------------------------------------------------------------
✅ Range Error: Using a number that’s outside an allowable range
new Array(-1)
------------------------------------------------------------------

❓ Why Do We Need to Handle Errors in JavaScript?
*************************************************

🚨 1. Prevent Application Crashes
=>If you don’t handle errors, one small mistake (like dividing by zero or accessing undefined data) can crash the entire app or stop further execution.
😓 2. Provide Clear Feedback to Users
Instead of confusing system messages, you can show meaningful error messages.
-------------------------------------------------------------------------
try {
  loginUser("wrong@email.com", "1234");
} catch (err) {
  alert("Invalid login. Please try again.");
}
-------------------------------------------------------------------
🛠️ 3. Debugging & Logging
Error handling lets you log details that help developers debug.
------------------------------------------------------
catch (error) {
  console.error("ERROR:", error.message);
  // Log to a monitoring service, etc.
}
------------------------------------------------------
🔁 4. Ensure Smooth User Experience
🧹 5. Cleanup Tasks

-----------------------------------------------------fetch-------------------------------------------------------
fetch("https://mimic-server-api.vercel.app/quotes/1")
    .then(response => response.json())
    .then(data => console.log(data));
    /*Example 3: Using async/await (cleaner way)

Instead of chaining .then(), we can use async/await:

async function getPost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getPost();

explanation 
🔎 Why do we write await response.json()?
Step 1: fetch()
let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");


fetch() makes a request to the server.

It returns a Promise.

Using await makes JavaScript “pause” until the server sends back the Response object.
👉 At this point, response is a Response object (the sealed package 📦).

Step 2: response.json()
let data = await response.json();


The JSON data is inside response.body as a stream (raw text).

To actually read and parse it into a JavaScript object, you call response.json().

But response.json() itself is asynchronous because:

It needs to read the body (which can be big, streaming in chunks).

It needs to parse the JSON text into a real object.

👉 That’s why it also returns a Promise.

Step 3: Why await again?

Since response.json() returns a Promise, you need await (or .then()) to get the actual result.

Without await, data would just be a Promise, not the real object.*/

---------------------------------------------------------------------------------------------------------
we are converting json to normal js object using .json() i thought sice you are using response.json() it is converting to json formate
ChatGPT said:

Aha! 👌 Now I see your confusion.
You are 100% right to ask this — the name response.json() makes it sound like we are “converting into JSON format”, but actually it’s the opposite.

Let’s clear this up step by step.

🔎 What response.json() really does

When the server replies, the data is already in JSON format (as plain text string).

But JSON is just text — JavaScript can’t use it directly.

response.json() parses (converts) that JSON text → into a normal JavaScript object.

So:

Server sends → JSON string (text)

response.json() → turns it into JavaScript object

