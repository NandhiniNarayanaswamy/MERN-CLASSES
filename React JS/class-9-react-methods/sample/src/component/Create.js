import { useState } from "react";
function Create({ users, setUsers }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        if (!name || !email) {
            alert("please enter all feilds")
        }
        const newID = users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 11;
        const newUser = { id: newID, name, email }
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users",
                {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(newUser)
                })
            const data = await response.json();
            setUsers([...users, { ...data, id: newUser.id }])
            alert("Data posted successfully")
        } catch (error) {
            console.log("error Posting data");

        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} />
                <input type="email" value={email} placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">ADD USER</button>
            </form>
        </>
    )
}
export default Create