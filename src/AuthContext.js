import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // INIT USER FROM LOCALSTORAGE (SAFE + STABLE)
  useEffect(() => {
    const initAuth = () => {
      try {
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
        }
      } catch (err) {
        localStorage.removeItem("user");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  // LOGIN FUNCTION
  const login = (data) => {
    if (!data) return;

    const safeUser = {
      ...data,
      role: data.role || "user",
    };

    localStorage.setItem("user", JSON.stringify(safeUser));
    setUser(safeUser);
  };

  // LOGOUT FUNCTION
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};