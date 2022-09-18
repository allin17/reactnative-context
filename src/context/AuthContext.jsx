import React, {createContext, useState} from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})

    const signIn = (login, password) => {
        const obj = {
            login,
            password
        }
        setUser(obj)
    }

    const signOut = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}
