import { createStore } from "redux";
//We import reducer so store can use it
import CounterReducer from "./CounterReducer";
const store = createStore(CounterReducer)
/*👉 YES.
But behind the scenes, Redux does A LOT:
✔ It stores the initial state
✔ It listens for actions
✔ It calls the reducer when an action is dispatched
✔ It updates the state
✔ It notifies all listeners (components) */
// store calls the reducer:
// counterReducer(currentState, action)
export default store
/*Redux store cannot work without a reducer.
Why?
Because the reducer tells Redux how to update the state.
A store needs two things:
✔ the current state
✔ instructions on how to update that state
Those instructions are inside the reducer. */