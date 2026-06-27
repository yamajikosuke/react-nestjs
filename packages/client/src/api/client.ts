import { ApiError } from "./types";
import { useAuthStore } from "../store/authStore";
import { refreshApi } from "./auth";

export const apiFetch = async <T>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<T | ApiError> => {
  const res = await fetch(input, init);

  // 成功
  if (res.ok) {
    return res.json() as Promise<T>;
  }

  // 401 → Refresh Token を使って再取得
  if (res.status === 401) {
    const { refreshToken, updateAccessToken, logout } = useAuthStore.getState();

    if (!refreshToken) {
      return { status: 401, message: "ログインが必要です" };
    }

    // Refresh API を叩く
    const refreshResult = await refreshApi(refreshToken);

    // Refresh 失敗
    if ("status" in refreshResult) {
      logout();
      return { status: 401, message: "再ログインが必要です" };
    }

    // Refresh 成功 → accessToken 更新
    updateAccessToken(refreshResult.accessToken);

    // 元のリクエストを retry（Authorization を付け直す）
    const retryRes = await fetch(input, {
      ...init,
      headers: {
        ...init?.headers,
        Authorization: `Bearer ${refreshResult.accessToken}`,
      },
    });

    if (retryRes.ok) {
      return retryRes.json() as Promise<T>;
    }

    return {
      status: retryRes.status,
      message: "再リクエストに失敗しました",
    };
  }

  // その他のエラー
  const errorJson = await res.json().catch(() => null);

  return {
    status: res.status,
    message: errorJson?.message ?? "サーバーエラーが発生しました",
  };
};
