import { useAuthStore } from "../../store/authStore";
import { LogoutButton } from "./LogoutButton";

export const MemberPage = () => {
  const accessToken = useAuthStore((s) => s.accessToken);

  return (
    <div>
      <h1>メンバーページ</h1>

      <p>Access Token:</p>
      <pre>{accessToken}</pre>

      <LogoutButton />
    </div>
  );
};
