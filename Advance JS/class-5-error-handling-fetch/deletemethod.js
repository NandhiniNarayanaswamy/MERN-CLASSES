fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'DELETE', //DELETE METHOD TO DELETE THE DATA
})
    .then(response => {
        return response.json()
    })

    .then(data => console.log("DELETE", data))
    .catch(error => console.log("Error deleting the data", error.message));