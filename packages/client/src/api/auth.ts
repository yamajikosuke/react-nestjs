import { apiFetch } from "./client";
import { LogoutResponse, ApiError, RefreshResponse } from "./types";
import { useAuthStore } from "../store/authStore";

export const refreshAccessToken = async () => {
  const refreshToken = useAuthStore.getState().refreshToken;

  if (!refreshToken) return null;

  const result = await apiFetch<{ accessToken: string }>("/api/refresh", {
    method: "POST",
    body: JSON.stringify({ refreshToken }),
    headers: { "Content-Type": "application/json" },
  });

  if ("status" in result) {
    useAuthStore.getState().logout();
    return null;
  }

  useAuthStore.getState().updateAccessToken(result.accessToken);
  return result.accessToken;
};

export const logoutApi = async (): Promise<LogoutResponse | ApiError> => {
  return apiFetch<LogoutResponse>("/api/logout", {
    method: "POST",
  });
};

export const refreshApi = (refreshToken: string) =>
  apiFetch<RefreshResponse>("/api/refresh", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  });
