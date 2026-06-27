import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useEffect, useState } from "react";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isLoggedIn, accessToken, refreshToken } = useAuthStore();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Zustand の persist が復元されるまで待つ
    const timer = setTimeout(() => {
      setChecking(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // persist 復元中は何も表示しない（チラつき防止）
  if (checking) return null;

  // 未ログイン
  if (!isLoggedIn) return <Navigate to="/login" replace />;

  // トークンが欠けている
  if (!accessToken || !refreshToken) {
    return <Navigate to="/login" replace />;
  }

  // すべて OK
  return children;
};
