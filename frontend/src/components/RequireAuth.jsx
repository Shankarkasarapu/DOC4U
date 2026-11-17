import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import GetUserId from '../data/GetUserID';

// Blocks a page for visitors who are not logged in and sends them to /login.
// The page they wanted is remembered so login can bring them straight back.
const RequireAuth = ({ children }) => {
  const location = useLocation();
  if (GetUserId()) return children;
  try {
    sessionStorage.setItem('redirect_after_login', location.pathname + location.search);
  } catch (e) { /* storage blocked: they just land on home after login */ }
  return <Navigate to="/login" replace state={{ from: location.pathname, message: 'Please log in to continue' }} />;
};

export default RequireAuth;
