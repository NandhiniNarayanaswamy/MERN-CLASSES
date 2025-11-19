import { useState } from "react"

function CreateUser({ users, setUser }) {
    const [name, setName] = useState("")
    const [email, setMail] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
        setName("")
        setMail("")
        if (!name || !email) {
            alert("Please fill all the feilds");
            return;
        }
        const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
        const newUser = { id: newId, name, email }
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users",
                {
                    method: "POST",
                    headers: {
                        "content-Type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                }
            );
            const data = await response.json();
            setUser([...users, { ...data, id: newUser.id }])
            
            alert("Data added successfully")
        } catch (error) {
            console.log(error);

        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} />
                <input type="email" value={email} placeholder="Enter you email" onChange={(e) => setMail(e.target.value)} />
                <button type="submit">Add User</button>
            </form>
        </>
    )
}
export default CreateUser