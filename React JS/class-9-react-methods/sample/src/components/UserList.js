
function UserList({ users, setUser }) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user?.id}>

                            <td>{user?.id}</td>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </>
    )
}
export default UserList

{/* 🧩 Definition
    ?. allows you to safely access properties of an object without throwing an error if the object is null or undefined. 
    🧠 Normal Property Access (without ?.)
    If you write:
    user.id
and if user happens to be undefined or null,
👉 JavaScript will throw an error:
TypeError: Cannot read properties of undefined (reading 'id')
✅ Using Optional Chaining
user?.id
This means:
“If user exists (is not null or undefined), then give me user.id. Otherwise, just return undefined.”
So no error will be thrown — the code keeps running smoothly.*/}