import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const PrivateRute = ({ children }) => {
  const { status } = useSelector((state) => state.auth);

  return status === "authenticated" ? children : <Navigate to="/login" />;
};
