import { useRegisterStore } from "./store/useRegisterStore";
import { useNavigate } from "react-router-dom";
import { useLeaveConfirm } from "./hooks/useLeaveConfirm";

export const Confirm = () => {
  const navigate = useNavigate();
  const { data } = useRegisterStore();

  useLeaveConfirm();

  const handleRegister = () => {
    // 本来は API 登録処理など
    navigate("/registration/complete");
  };

  return (
    <div>
      <h2>確認画面</h2>

      <p>名前：{data.name}</p>
      <p>性別：{data.gender === "male" ? "男" : "女"}</p>
      <p>メール：{data.email}</p>

      <button onClick={() => navigate(-1)}>戻る</button>
      <button onClick={handleRegister}>登録</button>
    </div>
  );
};
