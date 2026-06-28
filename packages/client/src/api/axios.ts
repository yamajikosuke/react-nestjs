import axios from "axios";
import { useAuthStore } from "../store/authStore";

export const api = axios.create({
  baseURL: "/api",
  headers: { "Content-Type": "application/json" },
});

// ① リクエストに accessToken を付与
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ② 401 が返ってきたら refresh → retry
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    // 401 以外はそのまま返す
    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }

    // refresh 中の多重実行を防ぐ
    if (originalRequest._retry) {
      return Promise.reject(error);
    }
    originalRequest._retry = true;

    try {
      const refreshToken = useAuthStore.getState().refreshToken;

      if (!refreshToken) {
        useAuthStore.getState().logout();
        return Promise.reject(error);
      }

      // refresh API を呼ぶ
      const refreshRes = await api.post("/refresh", {
        refreshToken,
      });

      const newAccessToken = refreshRes.data.accessToken;
      const newRefreshToken = refreshRes.data.refreshToken;

      // Zustand に保存
      useAuthStore.getState().login(newAccessToken, newRefreshToken);

      // retry 用に Authorization を付け替える
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

      // 元のリクエストを再送
      return api(originalRequest);
    } catch (e) {
      // refresh 失敗 → ログアウト
      useAuthStore.getState().logout();
      return Promise.reject(e);
    }
  },
);
