// we have to use fetch method to fetch the data from the server

// 5 star
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        return response.json(); //converting the response to json
        console.log(response);

    })

    .then(data => console.log("response data of the server", data))
    .catch(error => console.log("Error fetching the data", error.message));