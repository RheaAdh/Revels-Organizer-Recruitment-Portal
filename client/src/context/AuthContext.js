import axios from "axios";
import React, { useContext, createContext, useState, useEffect } from "react";
import { TOKEN_ID } from "../utils/constants";

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const restoreUser = async () => {
    console.log("restore user");
    console.log(user);
    const token = localStorage.getItem(TOKEN_ID);
    if (token) {
      try {
        const token = localStorage.getItem(TOKEN_ID);
        const res = await axios.get(
          `http://localhost:5000/admin/user/${token}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("im here");
        console.log(res);
        if (res.data.success) {
          setUser(res.data.data);
          console.log("im here setuser");
          console.log(user);
        } else console.log("oops");
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    restoreUser();
  }, []);

  const logout = async () => {
    try {
      setUser(null);
      localStorage.removeItem(TOKEN_ID);
    } catch (err) {
      throw err;
    }
  };

  const value = {
    user,
    logout,
    restoreUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
