export const increment = () => {
    return { type: "INCREMENT" }
}
/*This simply RETURNS a small object:

{ type: "INCREMENT" } to dispatch () */
export const decrement = () => {
    return { type: "DECREMENT" }
}