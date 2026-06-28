import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isLoggedIn, accessToken } = useAuthStore();

  if (!isLoggedIn || !accessToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
