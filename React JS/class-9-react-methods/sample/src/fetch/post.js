
//API call without useEffect => interview question
import { useState } from "react";
function App() {
    const [title, setTitle] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();  // e is the event object if v submit form or click - page vl reload again to prevent that we use preventdefault. ifwe just give e it will give all the operation done on that button
        const newPost = {
            title,
            body: "nandhini posted new content",
            userId: 1,
        }
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts",
                {
                    method: "POST",
                    header: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newPost)
                }
            )
            const data = await response.json()
            console.log("created the user", data);

        } catch (error) {
            console.log(error);

        }

    };
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <button type="submit">onsubmit</button><br />
                </form>

                you typed:{title}
            </div>
        </>
    )
}
export default App