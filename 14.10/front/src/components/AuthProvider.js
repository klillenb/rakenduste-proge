import React, { createContext, useState } from "react"

const UserContext = createContext()
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    return(
        <UserContext.Provider value={[currentUser, setCurrentUser]}>
            {children}
        </UserContext.Provider>
    )
}