import React, { useState } from 'react'

export const AuthContext = React.createContext();

function AuthProvider(props) {
    const [logged, setlogged] = useState(false);
    
    const AuthContextData = { logged, setlogged };
    return (
        <AuthContext.Provider value={AuthContextData}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
