import { increment, decrement } from "../redux/CounterAction";
import { useSelector, useDispatch } from "react-redux";
function Counter() {
    const count = useSelector(state => state.count)
    /*🔥 useSelector = Reads data from the Redux store
Think of the Redux store as a global storage room.
useSelector() is like a key that lets a component go inside the storage room and pick the item it needs.
The function (state) => state.something tells Redux what part of the state you want.
🎯 Example from your code
const count = useSelector((state) => state.count)
This means:
state is the entire Redux store state
Example:
{
  count: 0
}
state.count is the count value inside that store.
So count becomes whatever is in the Redux store.
✔ Why useSelector is needed?
Without Redux:
You pass state as props through many components → ❌ very messy.
With Redux:
Any component can read the store directly:
const count = useSelector(state => state.count);
No props needed. No passing data from parent → child → child → child.
✔ When store updates?
useSelector automatically re-renders the component with new data.
Example:
You click increment → dispatch sends action → reducer updates state
Store changes
Component using useSelector updates automatically */
    const dispatch = useDispatch()
    /*useDispatch() gives you a function called dispatch()
Redux has only ONE way to change state = dispatch an action.
So inside a component, we must get this function from Redux.
    To use dispatch() inside a React component, you must import useDispatch from react-redux. 
 🔥 Why from react-redux, not redux?
Because:
redux is only for creating store + reducers.
react-redux is the bridge between React and Redux.
useDispatch and useSelector belong to react-redux because they allow React components to talk to the Redux store.
🧠Easy explanation
Redux = brain (store + reducer)
React = face (UI)
react-redux = connection (hooks to connect UI with store)
Hooks like
useDispatch()
useSelector()
belong to this connection library.*/
    return (
        <>
            <h2>COUNT IS :{count}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            {/* this vl be like dispatch({type:"INCREMENT"}) */}
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
    )
}
export default Counter