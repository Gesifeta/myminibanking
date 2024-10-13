import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import {jwtDecode} from "jwt-decode";

export const authenticateUser = () => {
  let loggedInUser = localStorage?.getItem("accessToken");
  const user = loggedInUser && jwtDecode(loggedInUser);
  if (user?.userid) {
    return <Outlet />;
  } else {
    localStorage.removeItem("token");
    return <Navigate to="/user/Login" />;
  }
};

export default authenticateUser;
