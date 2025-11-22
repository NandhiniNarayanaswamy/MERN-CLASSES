const Increment = "INCREMENT";
const Decrement = "DECREMENT";
const InitialState = { count: 0 }
const CounterReducer = (state = InitialState, action) => {
    switch (action.type) {
        case Increment:
            return { count: state.count + 1 }
        case Decrement:
            return { count: state.count - 1 }
        default:
            return state
    }
}
export default CounterReducer