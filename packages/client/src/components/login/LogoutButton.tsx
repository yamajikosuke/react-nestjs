import { useAuthStore } from "../../store/authStore";
import { logoutApi } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // axios 版 logoutApi を呼ぶ
      const res = await logoutApi();

      // 成功レスポンスは res.data に入る
      if (res.data.success === true) {
        logout(); // Zustand のトークン削除
        navigate("/login", { replace: true }); // ログイン画面へ
      }
    } catch (e) {
      // axios は失敗時に throw するのでここに来る
      alert("ログアウトに失敗しました");
    }
  };

  return <button onClick={handleLogout}>ログアウト</button>;
};
