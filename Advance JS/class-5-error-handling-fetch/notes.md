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