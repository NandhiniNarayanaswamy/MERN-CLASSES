import { createContext, useContext } from "react";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
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
export const useUser = () => useContext(UserContext)