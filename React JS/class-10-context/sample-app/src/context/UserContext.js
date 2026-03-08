import { createContext, useContext } from "react"
const userContext = createContext()
const userProvider = ({ children }) => {
    const user = {
        name: "Nandhini",
        Password: '1234'
    }
    return (
        <useContext.provider value={user}>
            <children />
        </useContext.provider>
    )
}
export const useUser = () => useContext(createContext)
//useContext() is a React hook that lets you read the value from a context.
// //You are saying:

// “Give me the value stored inside UserContext.”
/*❓why we need to assign userContext = createContext() con't v directly use createContext()?
✅ 1. createContext() creates a “Context Box”
When you write:
createContext();
React creates a context object that contains:
Provider
Consumer (for older React)
The data that you will store
But createContext itself doesn’t have a name.
To use the context later, you must store it somewhere.

Now you have a box with a name:
You can access the data
You can provide the data
You can consume the data
Without giving it a name, you cannot use it again.


❓ what is .provider?
✔ Provider = A component that gives (provides) data to all child components.
Because without Provider, your data (name, password, etc.) cannot be shared.
Provider = giver
value={} = what it gives
Consumers (child components) = receivers

🧩 Visual: What createContext() returns
const UserContext = {
   Provider: function ComponentThatGivesData() {...},
   Consumer: function ComponentThatGetsDataOldWay() {...},
   // internal hidden things
}

✔ children = all the components (or elements) nested inside another component.
👉 children means whatever you put between a component’s opening and closing tags.

Example:

<UserProvider>
   <LevelOne />
</UserProvider>


Here:
<LevelOne /> is the children of <UserProvider>.
*/