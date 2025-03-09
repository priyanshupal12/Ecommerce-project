import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token');
  const tokenExpiration = localStorage.getItem('tokenExpiration');  // Assuming you store expiration time

  // Check if token exists and if it's expired
  const isTokenExpired = tokenExpiration && Date.now() > tokenExpiration;

  if (!token || isTokenExpired) {
    // If no token or token is expired, redirect to login page
    localStorage.removeItem('token');  // Clear invalid token
    localStorage.removeItem('tokenExpiration');  // Clear expiration time
    return <Navigate to="/login" />;
  }

  // If token exists and is valid, render the protected element
  return element;
};

export default ProtectedRoute;

