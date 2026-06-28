import { api } from "./axios";
import { LoginResponse, LogoutResponse, RefreshResponse } from "./types";

// ログイン API
export const loginApi = (loginId: string, password: string) =>
  api.post<LoginResponse>("/login", { loginId, password });

// ログアウト API
export const logoutApi = () => api.post<LogoutResponse>("/logout");

// Refresh Token API（interceptor が内部で使う）
export const refreshApi = (refreshToken: string) =>
  api.post<RefreshResponse>("/refresh", { refreshToken });

// /api/me を叩いてログイン状態を確認する API
export const meApi = () => {
  return api.get("/api/me");
};
