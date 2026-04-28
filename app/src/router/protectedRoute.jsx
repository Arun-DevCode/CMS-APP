import React from "react";
import { Navigate } from "react-router"; // 1. Added missing import

function ProtectedRoute({ children }) {
  // 2. Capitalized name
  const isTokenFound = localStorage.getItem("accessToken");

  // 3. If no token, redirect to sign-in immediately
  if (!isTokenFound) {
    return <Navigate to="/sign-in" replace />;
  }

  // 4. If token exists, render the protected content
  return children;
}

export default ProtectedRoute;
