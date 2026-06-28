import { useEffect, useState } from "react";
import { api } from "../../api/axios";
import { useAuthStore } from "../../store/authStore";
import { LogoutButton } from "./LogoutButton";

type MeResponse = {
  userId: string;
  name: string;
};

export const Header = () => {
  const [me, setMe] = useState<MeResponse | null>(null);

  // ★ Zustand のログイン状態を参照
  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    // ログインしていないなら /me を呼ばない
    if (!isLoggedIn) {
      setMe(null);
      return;
    }

    const fetchMe = async () => {
      try {
        const res = await api.get<MeResponse>("/me");
        setMe(res.data);
      } catch {
        setMe(null);
      }
    };

    fetchMe();
  }, [isLoggedIn]);

  return (
    <header className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">React Practice App</h1>

      <div className="flex items-center gap-4">
        {/* ★ ログイン時のみユーザー名を表示 */}
        {isLoggedIn && me && (
          <span className="font-medium">こんにちは、{me.name} さん</span>
        )}

        {/* ★ ログイン時のみ LogoutButton を表示 */}
        {isLoggedIn && <LogoutButton />}
      </div>
    </header>
  );
};
