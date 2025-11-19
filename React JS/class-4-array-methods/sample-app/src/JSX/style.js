//--------------------applying css concept----------------------//
import "./App.css" //external
function App() {
    //internal
    const bodyStyle = {
        backgroundColor: "black",
        color: "red",
        textAlign: "center",

    }
    return (
        <>
            <body style={bodyStyle}>
                <h1 className="headStyle">Nandhini Narayanasamy</h1> //external
                <p style={{ color: "red", backgroundColor: "salmon", padding: "20px", fontSize: "20px" }}>She is a Best Software engineer</p> //inline
                <p id="para">She a Motivational speaker tooo...</p> external
            </body >
        </>
    )
}
export default App