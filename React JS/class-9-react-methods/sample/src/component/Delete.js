
const Delete = ({ userId, users, setUsers }) => {
    const handleDelete = async () => {
        if (!userId) return
        try {
            await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,
                {
                    method: "DELETE"
                }
            )
            setUsers(users.filter((use) => use.id !== userId))
            alert("User deleteed successfully")
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}
export default Delete