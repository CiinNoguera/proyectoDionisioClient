import { createContext, useEffect, useState } from "react";
import { getMeFetch } from "../api/getMeFetch";

export const UserContext = createContext();


const UserProvider = ({children}) => {

    // cuando se carga la pagina el usuario no existe...
    const [user, setUser] = useState(null);
    const [ loading, setLoading] = useState(true);

    // mantener la sesion...
    useEffect(() => {
    // utilizar IIFE para hacer la funcion async
       (async () => {
        const token = localStorage.getItem('token');
        await login(token)
        setLoading(false)
       })()
    }, []);
    

    // login
    const login = async (token) => {
        try{
            const user = await getMeFetch(token)
            setUser(user)
            console.log(user)
        } catch(error) {
            console.log(error);
        }
    };

    // si se esta cargando la pag, que no se muestre nada..
    if (loading) return null

    const data = {
        user, 
        setUser,
        login,
    };

    return <UserContext.Provider value={data}>
        {children}
        </UserContext.Provider>
};

export default UserProvider;