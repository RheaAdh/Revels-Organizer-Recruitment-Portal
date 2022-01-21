import React, { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import Admin from "./components/Admin";
import { Toaster } from "react-hot-toast";
import AuthProvider, { useAuth } from "./context/AuthContext";
import Landing from "./components/Landing";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const auth = useAuth();

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            exact
            path="/category/:category"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
        </Routes>
        <Toaster />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
