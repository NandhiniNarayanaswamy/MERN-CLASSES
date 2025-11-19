async function loggin(id) {
    setTimeout((id) => {
        if (id === 123) {
            return "welcome to the board"
        } else {
            return "invalis loggin id"
        }
    }, 2000)
}
async function result() {
    let value = await loggin(123)
    console.log(value);

}
/*2. Why can’t we just return inside setTimeout?

Because setTimeout is not await-aware.
When you write return "welcome" inside setTimeout, it doesn’t “magically” connect back to the outer async function. It just exits the small callback.

That’s why we need to manually connect it using Promise and resolve.

3. Correct thinking

You are right:

async function already gives back a Promise.

But if you want to use setTimeout (or any async thing like API request), you must tell JavaScript when that Promise should resolve.

👉 That’s what new Promise((resolve, reject) => {...}) does. It lets you control when the Promise resolves. */