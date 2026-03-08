const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";
const initialState = {
    todos: []
}
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { id: Date.now(), text: action.payload, complete: false }]
            }

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload ? { ...todo, complete: !todo.complete } : todo)
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            }
        default:
            return state
    }


}
export default todoReducer