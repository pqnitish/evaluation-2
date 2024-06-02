 import { createContext,useState } from "react";
 export const AuthContext = createContext();
 export default function AuthContextProvider({children}){
    const [authDetails, setAuthDetails] = useState({
        isAuthenticated: false,
        token:null,
        email:null,
    });
    const login = ()=>{
        setAuthDetails({
            isAuthenticated:true,
            token:token,
            email:email,
        });
    };
    const logout = (token,email)=>{
        setAuthDetails({
            isAuthenticated:false,
            token:null,
        });
    };

    return(
        <AuthContext.Provider value={{authDetails,login,logout}}>
            {children}

        </AuthContext.Provider>
    )
}