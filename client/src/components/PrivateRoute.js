import React, { useEffect } from "react";
import { Navigate, Route, useLocation } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const auth = useAuth();

  return auth.user ? children : <Navigate to="/admin" />;
}
