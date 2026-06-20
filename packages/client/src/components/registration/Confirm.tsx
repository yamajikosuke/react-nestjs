import { useRegisterStore } from "./store/useRegisterStore";
import { useNavigate } from "react-router-dom";
import { useLeaveConfirm } from "./hooks/useLeaveConfirm";

export const Confirm = () => {
  const navigate = useNavigate();
  const { data } = useRegisterStore();

  const genderLabel =
    data.gender === "male" ? "男" : data.gender === "female" ? "女" : "-";
  const rows = [
    { label: "名前", value: data.name || "-" },
    { label: "性別", value: genderLabel },
    { label: "メール", value: data.email || "-" },
    { label: "都道府県", value: data.prefecture || "-" },
    { label: "住所1", value: data.address1 || "-" },
    { label: "住所2", value: data.address2 || "-" },
    { label: "電話番号", value: data.tel || "-" },
    { label: "備考", value: data.note || "-" },
  ];

  useLeaveConfirm();

  const handleRegister = () => {
    // 本来は API 登録処理など
    navigate("/registration/complete");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-amber-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-2xl rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-cyan-100/40 backdrop-blur sm:p-8">
        <div className="mb-8 border-b border-slate-100 pb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Registration
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            入力内容の確認
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            内容を確認して問題なければ登録を完了してください。
          </p>
        </div>

        <dl className="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 px-4 py-3 sm:grid-cols-[9rem_1fr] sm:gap-3 sm:px-5"
            >
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 sm:text-sm">
                {row.label}
              </dt>
              <dd className="text-sm text-slate-900 sm:text-[15px]">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-col-reverse items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex min-w-32 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            戻る
          </button>
          <button
            onClick={handleRegister}
            className="inline-flex min-w-32 items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            登録する
          </button>
        </div>
      </div>
    </div>
  );
};
