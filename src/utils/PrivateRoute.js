import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ path, isAuthenticated, ...props }) {
    return isAuthenticated ? <Outlet {...props} /> : <Navigate to={path} />;
  }