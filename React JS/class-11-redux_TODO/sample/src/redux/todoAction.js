export const add_todo = (text) => {
    return {
        type: "ADD_TODO",
        payload: text
    }
}
export const toggle_todo = (id) => {
    return {
        type: "TOGGLE_TODO",
        payload: id
    }
}
export const delete_todo = (id) => {
    return {
        type: "DELETE_TODO",
        payload: id
    }
}