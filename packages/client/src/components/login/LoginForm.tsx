import { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../../api/client";
import { LoginResponse, ApiError } from "../../api/types";

export const LoginForm = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const onSubmit = async () => {
    setError("");

    const res = await apiFetch<LoginResponse>("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ loginId, password }),
    });

    // ① ApiError（500 など）
    if ("status" in res) {
      if (res.status === 500) {
        setError("サーバーエラーが発生しました（500）");
      } else {
        setError(res.message);
      }
      return;
    }

    // ② LoginFailure（401）
    if (res.authResult === false) {
      setError("ID またはパスワードが違います（401）");
      return;
    }

    // 成功（LoginResponse 型）
    login(res.accessToken, res.refreshToken);
    navigate("/login/member");
  };

  return (
    <div>
      <h1>ログイン</h1>

      <input
        value={loginId}
        onChange={(e) => setLoginId(e.target.value)}
        placeholder="ID"
      />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />

      <button onClick={onSubmit}>ログイン</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
