import { useState, useEffect } from "react";
import axios from "axios"
function App() {
    const [students, setStudent] = useState([])
    const [editID, setEditId] = useState(null)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [uname, setUname] = useState("")
    const [uemail, setUemail] = useState("")
    //fetched data from API
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setStudent(response.data))
            .catch(error => console.log(error))
    }, [])

    //Add Student(POST)
    const handleAdd = async () => {
        if (!name || !email) {
            alert("please do fill all filed")
            return;
        }
        const NewStudent = { name, email }
        const response = await axios.post("https://jsonplaceholder.typicode.com/users", NewStudent)
        setStudent([...students, { id: Date.now(), ...NewStudent }])
        setName("")
        setEmail("")
    }

    const handleEdit = (student) => {
        setEditId(student.id)
        setUname(student.name)
        setUemail(student.email)
    }

    const handleUpdate = async (id) => {
        try {
            await axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, { name: uname, email: uemail })
            setStudent(students.map(student => student.id === id ? { ...student, name: uname, email: uemail } : student))
        } catch (error) {
            console.log(error);
        }
        setEditId(null)
        setUname("")
        setUemail("")
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            setStudent(students.filter((student) => student.id !== id))
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div>
                <h4>Student Management System</h4>
                <>
                    <input type="text" value={name} placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} />
                    <input type="email" value={email} placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
                    <button onClick={() => handleAdd()}>Add Student</button>
                </>
            </div>
            <div>
                <h2>Student List</h2>
                <ul>
                    {students.map((student) => (
                        <li key={student.id}>
                            {editID === student.id ? (
                                <>
                                    <input type="name" value={uname} onChange={(e) => setUname(e.target.value)} />
                                    <input type="email" value={uemail} onChange={(e) => setUemail(e.target.value)} />
                                    <button onClick={() => handleUpdate(student.id)}>Save</button>
                                    <button onClick={() => setEditId(null)}>Cancell</button>
                                </>

                            ) : (
                                <>
                                    <span>{student.name}</span>
                                    <div>
                                        <button onClick={() => handleEdit(student)}>Edit</button>
                                        <button onClick={() => handleDelete(student.id)}>Delete</button>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default App

/*
✅ What is Axios?
Axios is a library used to make API calls.
API call means:
➡️ sending data to backend
➡️ getting data from backend
➡️ getting data from a server
➡️ sending login/register details, fetching posts, products, etc.

🔥 Why do we use Axios?
Because JavaScript has a built-in function called fetch(), but Axios makes things much easier.

📦 Install Axios
npm install axios
Then import:
import axios from "axios";

✅ Does Axios need res.json()?
NO.
Axios automatically converts the response to JSON.
That means you do NOT need to write:
res.json()

🔍 When does Axios convert to JSON?
Immediately after it receives the response from the server.
eg:
axios.get("/api/user")
  .then(res => console.log(res.data))
Here:
res = full response
res.data = already converted JSON
Axios automatically reads the JSON body from the server and converts it for you.
*/