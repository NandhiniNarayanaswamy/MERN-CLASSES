import { useState, useEffect } from "react";
import axios from "axios"
import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";
function App() {
    //create the state variable to store the users
    const [users, setUsers] = useState([])
    //useEffect to do the API call
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");


                //generate the ID starting from 11
                setUsers(response.data.map((user, index) => ({ ...user, id: 11 + index })));   // here ...user is spread operator it copies all the user object
                /*eg: id data ={[
                { id: 1, title: "Post A" },
                { id: 2, title: "Post B" },
                { id: 3, title: "Post C" }
                ]}  ...user copies {id:1, title:"post A"} id: 11 + index =0  here it changes id =11 it goes on like this  */

            } catch (error) {
                console.log("Error fetching the user:", error);

            }
        };
        fetchUsers();
    }, [])
    return (
        <>
            <div>
                <h1>STUDENT MANAGEMENT SYSTEM</h1>
                <CreateUser setUsers={setUsers} users={users} />
                <UserList users={users} setUsers={setUsers} />
                {/* if you create a separate child component (CreateUser) and import it into App,
                it will work the same as if you had written that same code directly inside App,
                as long as you pass the required props (users, setUsers, etc.) correctly. */}
            </div>
        </>
    )
}
export default App