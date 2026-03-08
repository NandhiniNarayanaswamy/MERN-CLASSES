import { createContext, useContext } from "react";
const UserContext = createContext();
export const UserProvider = ({ children }) => { //➡️ whatever you put inside <UserProvider> ... </UserProvider>
    //➡️ will be placed inside the Provider
    const user = {
        name: "Nandhini",
        password: 1234
    }
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}
export const useUser = () => useContext(UserContext) // read data from usercontext  -> using useuser we can access datat any where


/*
createcontext = is like creating empty box
usecontext = read data from the createcontext
usercontext = {
provider: "..."
consumer:"..."
}
we are  or (passing) values to children

children is nested component
*/