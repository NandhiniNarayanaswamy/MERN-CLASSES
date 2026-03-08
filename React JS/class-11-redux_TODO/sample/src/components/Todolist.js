import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_todo, delete_todo, toggle_todo } from "../redux/todoAction";
function Todolist() {
    const [text, setText] = useState("")
    const todos = useSelector((state => state.todos))
    const dispatch = useDispatch()

    const handleAdd = () => {
        if (text) {
            dispatch(add_todo(text))
        }
        setText("")
    }
    return (
        <>
            <div class="w-96 mx-auto mt-10 p-8 bg-white/20 backdrop-blur-md shadow-xl rounded-2xl">
                <h2>TODO List</h2>
                <input
                    type="text" value={text} placeholder="Enter your Task" onChange={(e) => setText(e.target.value)}
                />
                <button onClick={() => { handleAdd() }}>ADD</button>
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>
                            <span onClick={() => dispatch(toggle_todo(todo.id))}
                                style={{ textDecoration: todo.complete ? "line-through" : "none", cursor: "pointer" }}
                            >{todo.text}</span>
                            <button onClick={() => dispatch(delete_todo(todo.id))}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Todolist