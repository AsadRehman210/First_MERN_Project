import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const authorizationToken = `Bearer ${token}`

    // const API = process.env.REACT_APP_URL_API
    const API = "http://localhost:5000"

    // token store
    const storeTokenInLS = (tokenValue) => {
        setToken(tokenValue)
        return localStorage.setItem("token", tokenValue)

    }
    // token available
    const isLoggedIn = !!token;

    // token remove
    const logoutUser = () => {
        setToken("")
        return localStorage.removeItem("token");
    }

    // Authentication.. to get the currently login user Data

    useEffect(() => {
        const userInformation = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(`${API}/api/auth/userData`, {
                    headers: {
                        Authorization: authorizationToken
                    }
                })

                setUser(response.data);
                setIsLoading(false)
            } catch (error) {
                console.log("Eror in User fetching Data")
                setUser("");
                setIsLoading(false)

            }

        }
        userInformation()
    }, [token]);





    return <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, logoutUser, user, authorizationToken, isLoading, API }}>
        {children}
    </AuthContext.Provider>

}

export const useAuth = () => {
    return useContext(AuthContext)
}