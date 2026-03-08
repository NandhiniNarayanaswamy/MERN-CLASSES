import LevelOne from "./usercontext/component/LevelOne"
import { UserProvider } from "./usercontext/context/UserContext"
function App() {
    return (
        <>
            <UserProvider>
                <LevelOne />
            </UserProvider>
        </>
    )
}
export default App

//levelone is nested with one another
//You wrap the tree (LevelOne and everything under it) with <UserProvider>.
// That means all nested components can access user via the context.