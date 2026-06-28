import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;

  login: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
  updateAccessToken: (token: string) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      isLoggedIn: false,

      login: (accessToken, refreshToken) =>
        set({
          accessToken,
          refreshToken,
          isLoggedIn: true,
        }),

      logout: () =>
        set({
          accessToken: null,
          refreshToken: null,
          isLoggedIn: false,
        }),

      updateAccessToken: (token) =>
        set({
          accessToken: token,
        }),
    }),
    {
      name: "auth-storage", // localStorage のキー名
    },
  ),
);
