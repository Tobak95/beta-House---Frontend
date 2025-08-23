import React from "react";
import { useAppContext } from "../hooks/useAppContext";
import { Navigate, Outlet } from "react-router-dom";
import SuspenseLoader from "./layout/SuspenseLoader";


const ProtectedRoutes = () => {
  const { user, loading } = useAppContext();
  if (loading) {
    return <SuspenseLoader/>;
  }

  if (!user) {
    return <Navigate to={"/sign-in"} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
