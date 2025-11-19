//************************************************** >> fetch() << ************************************************** */
// fetch("https://mimic-server-api.vercel.app/quotes?_limit=5")
//     .then(getting => getting.json())
//     .then(data => console.log(data));

//******************************************* >> fetch using async &await << ****************************** */
// async function fetching() {
//     try {
//         let response = await fetch("https://mimic-server-api.vercel.app/quotes?_limit=4")
//         let data = await response.json() //even converting to js object takes time so we used await here
//         console.log(data);
//     }
//     catch (error) {
//         console.log(error);

//     }


// }
// fetching()

//************************************************POST() eg-1************************************************ */
// fetch("https://mimic-server-api.vercel.app/quotes", {
//     method: "POST",
//     headers: {
//         "content-type": "application/json"
//     },
//     body: JSON.stringify({
//         id: 40,
//         author: "Nandhini Narayanaswamy",
//         quote: "No one will help you, supports you, protects you & lift you in lift, you should do all things by yourself"
//     })
// })
//     .then(async response => {
//         if (!response.ok) {
//             // Read error as text instead of JSON
//             let errorMsg = await response.text();
//             throw new Error(errorMsg);
//         }
//         return response.json(); // Parse JSON only when success
//     })
//     .then(data => console.log("✅ Updated post:", data))
//     .catch(err => console.error("❌ Error:", err.message));

//************************************************POST() CRUD eg-1************************************************ */
//get method
async function fetching() {
    try {
        let response = await fetch("https://mimic-server-api.vercel.app/quotes?_limit=4")
        let data = await response.json() //even converting to js object takes time so we used await here
        console.log(data);
    }
    catch (error) {
        console.log(error);

    }


}
fetching()
//post method
async function postquotes() {
    let response = await fetch("https://mimic-server-api.vercel.app/quotes", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            quote: "you can and you will",
            author: "nandhini"
        })
    })
    let data = await response.json()
    console.log(data);

}
postquotes()

//put method -change everything doesn't mean whole api eg: id:4 while data related to that means author and quotes

async function updating() {
    let response = await fetch("https://mimic-server-api.vercel.app/quotes/1", {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            author: "Nandhini Narayanaswamy",
            quote: "one life one chance"
        })
    })
    let data = await response.json()
    console.log(data);

}
updating()

//Delete method
async function deleting(id) {
    const response = await fetch("https://mimic-server-api.vercel.app/quotes/" + id, {
        method: "DELETE"
    })
    let data = await response.json()
    alert("data deleted")

}
deleting(7)

//patch methos - change the particular thing eg: i wanted to change author
async function changingparticulr(id) {
    let response = await fetch("https://mimic-server-api.vercel.app/quotes/" + id, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            author: "Narayanaswamy"
        }),
    })
    let data = await response.json()
    console.log(data);
    alert("data changed")

}
changingparticulr(9)


