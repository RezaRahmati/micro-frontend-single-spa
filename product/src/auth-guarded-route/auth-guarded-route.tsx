import { Navigate, Outlet } from "react-router-dom";

export const AuthGuardedRoute = ({
  }) => {
    const token = window.sessionStorage.getItem("token");
    if (!token) {
      const toUrl = `/auth/login?returnUrl=${window.location.pathname}`
      return <Navigate to={toUrl} replace />;
    }
  
    return <Outlet />;
  };