import { useAuthStore } from "../../store/authStore";
import { logoutApi } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await logoutApi();

    if ("status" in result) {
      alert("ログアウトに失敗しました");
      return;
    }

    // LogoutResponse（成功）
    if (result.success === true) {
      logout();
      navigate("/login", { replace: true });
    }
  };

  return <button onClick={handleLogout}>ログアウト</button>;
};
