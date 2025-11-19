import LevelOne from "./component/LevelOne"
import { UserProvider } from "./context/UserContext"
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