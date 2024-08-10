import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router';

function protectedRoute() {
    const isLoggedin = false;
  return
  <> 
  { isLoggedin ? <Outlet/> : <Navigate to="/login" /> }
  </>;
}

export default protectedRoute;