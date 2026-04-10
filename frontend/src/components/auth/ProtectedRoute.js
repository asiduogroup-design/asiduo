import { Navigate, useLocation } from "react-router-dom";
import { getStoredAuth } from "../../utils/auth";

const ProtectedRoute = ({ children, roles = [] }) => {
  const location = useLocation();
  const auth = getStoredAuth();

  if (!auth?.token || !auth?.user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  if (roles.length > 0 && !roles.includes(auth.user.role)) {
    const fallbackPath = auth.user.role === "admin" ? "/admin" : "/user";
    return <Navigate to={fallbackPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
