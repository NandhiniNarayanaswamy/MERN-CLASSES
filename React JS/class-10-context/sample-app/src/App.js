import LevelOne from "./component/LevelOne"
import { UserProvider } from "./usercontext/context/UserContext"
function App() {
  return (
    <UserProvider>
      <LevelOne />
    </UserProvider>
  )
}
export default App

/*
🔥 What would happen if you do this
function App() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

Step-by-step what React sees:

1. Render App

2. Inside App, render <UserProvider>

3. Inside UserProvider, render <App />

4. That App again renders <UserProvider>

5. Inside that, again <App />

6. 🔁 Infinite loop
*/