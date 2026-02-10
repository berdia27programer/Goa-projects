import { createContext, useState } from "react";
import { getLocal, setLocal } from "../utils/LocalStorage";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    
    const register = formData => {
        const users = getLocal("users") || [];
        const exists = users.find(obj => obj.email === formData.email);

        if (exists) {
            alert("Email already registered");
            return;
        }

        setLocal("users", [...users, formData]);
        alert("Registration successful!");;
    }

    const login = formData => {
        const users = getLocal("users") || [];

        const exists = users.find(obj => obj.email === formData.email && obj.password === formData.password);

        if (!exists) {
            alert("Credentials are incorrect");
            return;
        }

        setUser(exists);
        alert("Login successful!");
    }

    const logout = () => {
        setUser(null)
        alert("You succesfuly Logged out from this account!")
    }

    return (
        <AuthContext.Provider value={{ register, login, user, logout }}>
            {children}
        </AuthContext.Provider>
    );
};