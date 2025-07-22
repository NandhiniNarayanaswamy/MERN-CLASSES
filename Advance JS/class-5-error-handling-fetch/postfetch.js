//fetch is a built-in JavaScript function that is used to make HTTP requests (like GET, POST, PUT, DELETE) to a server or API.
//fetch(url, options)
//options=>	An object {} with settings like method, headers, body, etc.	❌ Optional (only needed for POST, PUT, etc.)


fetch("https://jsonplaceholder.typicode.com/posts/", {
    /*
    This starts a fetch request to the URL.
    📍 The URL is a test API (jsonplaceholder.typicode.com) that lets you try POST/GET/PUT requests.
    You're sending the request to the /posts endpoint. */
    method: "POST",
    /*This line is saying:
    "I want to send data to the server using the POST method." */
    headers: {
        "Content-Type": "application/json",
        /*
        This tells the server:
        “Hey! The data I’m sending is in JSON format.”
        "Content-Type": "application/json" is required when sending JSON so the server knows how to read it.
         */
    },
    body: JSON.stringify(
        /*
        This is the actual data you are sending to the server.
        It's being sent as a string using JSON.stringify() because fetch expects the body in string format.
        You are posting:
        a title
        a body
        a userId */
        {
            title: "New Post",
            body: "this is new post",
            userId: 1
        })
})
    .then(Response => {
        return Response.json()
    })
    /*
    ✅ When the server responds, this block handles the response.
    response.json() is used to convert the raw response into a usable JavaScript object.
    ⚠️ Without this, the response would be a stream, not usable directly. */
    .then(data => console.log("post Response", data))
    /*
    ✅ This runs after the data is fully converted to JSON.
    It prints the returned data to the console. */
    .catch(error => console.log("Error posting the data", error.message));