"use client";

import { createContext, useContext, useState } from "react";
import { loginUser } from "../api/fakestore";

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: any) {
    const [user, setUser] = useState<any>(null);

    const login = async (username: string, password: string) => {
        const res = await loginUser(username, password);
        if (res.token) setUser({ username, token: res.token });
        return res;
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
