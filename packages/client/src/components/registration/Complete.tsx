import { useRegisterStore } from "./store/useRegisterStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Complete = () => {
  const navigate = useNavigate();
  const clear = useRegisterStore((s) => s.clear);

  useEffect(() => {
    clear(); // 完了画面に来たら Store をクリア
  }, []);

  return (
    <div>
      <h2>登録が完了しました</h2>
      <p>ありがとうございました。</p>

      <button onClick={() => navigate("/registration")}>トップへ</button>
    </div>
  );
};
