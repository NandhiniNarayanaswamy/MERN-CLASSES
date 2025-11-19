
import { useState } from "react";
const Update = ({ user, users, setUsers }) => {
    const [name, setName] = useState(user?.name)
    const [email, setEmail] = useState(user?.email)
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user?.id) return
        const updateuser = { ...user, name, email }
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`,
                {
                    method: "PATCH",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(updateuser)
                }
            )
            const data = await response.json();
            setUsers(users.map((u) => u.id === user.id ? { ...u, ...data } : u))
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="Submit">update</button>
            </form>
        </>
    )

}

export default Update