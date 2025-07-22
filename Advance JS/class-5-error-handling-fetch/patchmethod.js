fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'PUT', //patch HTTP METHOD TO update partial DATA 
    headers: {
        "Content-Type": "application/json", //content type
    },
    body: JSON.stringify({ title: "New Post updated" }) //only whatever i wnated to update not every field

})
    .then(response => {
        return response.json()
    })

    .then(data => console.log("Updated Response with patch", data))
    .catch(error => console.log("Error patching the data", error.message));