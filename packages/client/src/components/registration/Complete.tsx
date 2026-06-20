import { useRegisterStore } from "./store/useRegisterStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Complete = () => {
  const navigate = useNavigate();
  const clear = useRegisterStore((s) => s.clear);

  useEffect(() => {
    clear(); // 完了画面に来たら Store をクリア
  }, [clear]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-amber-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-xl rounded-3xl border border-slate-200 bg-white/90 p-6 text-center shadow-xl shadow-cyan-100/40 backdrop-blur sm:p-10">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-600">
          ✓
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
          Registration
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          登録が完了しました
        </h1>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">
          ご登録ありがとうございます。入力内容を保存しました。
        </p>

        <div className="mt-8">
          <button
            onClick={() => navigate("/registration")}
            className="inline-flex min-w-32 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            フォームへ戻る
          </button>
        </div>
      </div>
    </div>
  );
};
