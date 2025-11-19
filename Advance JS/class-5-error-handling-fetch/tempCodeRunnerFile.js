fetch("https://mimic-server-api.vercel.app/quotes?_limit=5")
    .then(response => response.json())
    .then(data => console.log(data));