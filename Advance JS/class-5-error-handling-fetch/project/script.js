document.getElementById("fetchImages").addEventListener("click", fetchImages);

function fetchImages() {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = ''; //This clears the inside of the container (imageContainer), removing any old images before adding new ones

    fetch("https://api.unsplash.com/photos/random?count=10&client_id=ck1QzEwzjlBTQx91_pexPriWEM6bgWzUQLE1PejXamg")
        .then(response => response.json())  //.json() to convert it to a real JavaScript object.
                                            //response.json() returns a promise too.
        .then(data => {  
            //This runs after the JSON is successfully fetched from the API.
            //data is now a JavaScript array that contains 10 photo objects.
            //Each object in this array represents a photo with lots of details like URL, author, description, etc.
            data.forEach(photo => {
                //forEach() is a loop that goes through each photo in the array.
                //photo is just a variable name that holds one photo object from the array during each loop.
                //So if there are 10 photos, this part runs 10 times.
                const imgElement = document.createElement("img"); //create the element using javascript
                    /*This creates a new <img> tag in JavaScript.
                        It does not add it to the page yet.
                        You now have a new image element saved in the variable imgElement.
                        ➡️ Think of this like:
                        📷 "Hey, I’m creating a new empty photo frame!"*/

                imgElement.src = photo.urls.small;
                /*
                This sets the image URL for that <img> tag.
                photo is the current photo object from the loop.
                photo.urls.small gives you a small-sized image URL from Unsplash.
                Now the image will know what to display.
                ➡️ Think of this like:
                🖼️ "I'm loading this specific picture into the frame."
                */ 
                imageContainer.appendChild(imgElement)
                /*
                Now that the image has a URL, this line adds it to the page inside the container.
                imageContainer is probably a <div> in your HTML.
                You’re telling the browser
                🧱 “Put this image inside the box on the screen!”
                */

            })
        })


}