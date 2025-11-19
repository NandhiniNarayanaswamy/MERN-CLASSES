import { useEffect, useState } from "react";
function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("error fetching the data"))
    }, [])
    return (
        <>
            <div>
                <h2>users</h2>
                <ul>
                    {data.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default App
