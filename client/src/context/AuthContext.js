import axios from "axios";
import React, { useContext, createContext, useState, useEffect } from "react";
import { TOKEN_ID } from "../utils/constants";

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  const restoreCategory = async () => {
    const token = localStorage.getItem(TOKEN_ID);
    if (token) {
      try {
        const token = localStorage.getItem(TOKEN_ID);
        const res = await axios.get(
          `http://localhost:5000/admin/category/${token}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res);
        if (res.data.success) {
          setCategory(res.data.data);
          setLoading(false);
        } else {
          // CHANGE THIS
          alert("couldnt set category on login");
        }
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    restoreCategory();
  }, []);

  const logout = async () => {
    try {
      setCategory(null);
      localStorage.removeItem(TOKEN_ID);
    } catch (err) {
      throw err;
    }
  };

  const value = {
    category,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
