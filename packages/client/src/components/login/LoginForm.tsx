import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../api/auth";
import { LoginResponse } from "../../api/types";

const loginSchema = z.object({
  loginId: z.string().min(1, "IDを入力してください"),
  password: z.string().min(1, "パスワードを入力してください"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = async (values: LoginFormValues) => {
    try {
      const res = await loginApi(values.loginId, values.password);
      const data: LoginResponse = res.data;

      if (data.authResult === false) {
        alert(data.message);
        return;
      }

      login(data.accessToken, data.refreshToken);
      navigate("/login/member");
    } catch {
      alert("サーバーエラーが発生しました");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
    >
      <h1 className="text-2xl font-bold mb-6 text-center">ログイン</h1>

      {/* ID */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">ID</label>
        <input
          {...register("loginId")}
          placeholder="ID"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.loginId && (
          <p className="text-red-500 text-sm mt-1">{errors.loginId.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="mb-6">
        <label className="block mb-1 font-medium">Password</label>
        <input
          {...register("password")}
          placeholder="Password"
          type="password"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* ログインボタン */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
      >
        {isSubmitting ? "送信中..." : "ログイン"}
      </button>
    </form>
  );
};
