function Child({ tochild }) {  //👉 This defines the Child component.
    // You’re using destructuring to get sendDataToParent from props.
    //  This means: sendDataToParent is a function the parent gave to you.


    const msg = "I am from child component"  //👉 You create a simple string called message that you want to send to the parent.
    return (
        <>
            <h3>child component</h3>
            <button onClick={() => tochild(msg)}>CLICK</button> {/* 👉 This shows a button. When clicked:
            It calls the sendDataToParent function
            And sends the message to the parent.
            So when you click the button, the parent receives "Hello from Child without useState!".*/}
        </>
    )
}
export default Child