import { createContext } from "react";

export const UserContext = createContext();


const UserProvider = ({children}) => {
    let nombre = 'tomas';

    return <UserContext.Provider value={nombre}>{children}</UserContext.Provider>
};

export default UserProvider;