//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% >> FOREACH NORMAL ACCESSING << %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5//

function App() {
    let arr = [1, 2, 3, 4, 5]
    let access = () => {
        arr.forEach((single) => {
            console.log(single);
        })


    }
    return (
        <>
            <ul>
                {arr.forEach((single) => <li>{arr}</li>  //forEach does not return anything || need to use map if i want to return anything
                )}

                <button onClick={access}>Access</button>
            </ul>
        </>
    )
}
export default App