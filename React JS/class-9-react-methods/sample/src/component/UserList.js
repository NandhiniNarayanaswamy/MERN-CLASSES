import Update from "./Update"
import Delete from "./Delete"
function UserList({ users, setUsers }) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (<tr key={user?.id}>
                        <td>{user?.id}</td>
                        <td>{user?.name}</td>
                        <td>{user?.email}</td>
                        <td>
                            <Update user={user} users={users} setUsers={setUsers} />
                            <Delete userId={user?.id} users={users} setUsers={setUsers} />

                        </td>
                    </tr>
                    ))}


                </tbody>
            </table>
        </>
    )
}
export default UserList