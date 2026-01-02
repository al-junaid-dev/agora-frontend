import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    isAuthenticated: false,
    role: null,
    token: null,
  });

  const login = (token, role) => {
    localStorage.setItem("token", token);
    setUser({ isAuthenticated: true, role, token });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser({ isAuthenticated: false, role: null, token: null });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
