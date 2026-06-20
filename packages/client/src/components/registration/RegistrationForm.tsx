import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterForm } from "./schema/registerSchema";
import { useRegisterStore } from "./store/useRegisterStore";
import { useLeaveConfirm } from "./hooks/useLeaveConfirm";

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const { data, setData } = useRegisterStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      ...data,
      gender: data.gender ?? "",
    },
  });

  // 画面離脱防止
  useLeaveConfirm();

  const onSubmit: SubmitHandler<RegisterForm> = (values) => {
    // const onSubmit = (values: RegisterForm) => {
    setData(values);
    navigate("/registration/confirm");
  };

  const inputClassName =
    "mt-2 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200";
  const getTextInputClassName = (hasError: boolean) =>
    `${inputClassName} mb-2 ${
      hasError
        ? "border-rose-500 bg-rose-50/40 focus:border-rose-500 focus:ring-rose-200"
        : ""
    }`;
  const getSelectClassName = (hasError: boolean) =>
    `${inputClassName} mb-2 ${
      hasError
        ? "border-rose-500 bg-rose-50/40 focus:border-rose-500 focus:ring-rose-200"
        : ""
    }`;
  const getRadioLabelClassName = (hasError: boolean) =>
    `inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
      hasError
        ? "border-rose-500 text-rose-700"
        : "border-slate-300 text-slate-700 hover:border-cyan-400 hover:text-cyan-700"
    }`;
  const labelClassName = "text-sm font-semibold tracking-wide text-slate-700";
  const requiredBadgeClassName =
    "ml-2 inline-flex items-center rounded-md bg-rose-600 px-2 py-0.5 text-[11px] font-semibold leading-none tracking-wide text-white";
  const errorClassName = "mt-1 text-xs font-medium text-rose-600";

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-amber-50 px-4 py-8 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-2xl rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-cyan-100/40 backdrop-blur sm:p-8"
      >
        <div className="mb-8 border-b border-slate-100 pb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Registration
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            会員登録フォーム
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            入力内容は確認画面で最終チェックできます。
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className={labelClassName}>
              名前
              <span className={requiredBadgeClassName}>必須</span>
            </label>
            <input
              className={getTextInputClassName(!!errors.name)}
              placeholder="例）山田 太郎"
              {...register("name")}
            />
            <p className={errorClassName}>{errors.name?.message}</p>
          </div>

          <div>
            <p className={labelClassName}>
              性別
              <span className={requiredBadgeClassName}>必須</span>
            </p>
            <div className="mt-2 flex flex-wrap gap-4">
              <label className={getRadioLabelClassName(!!errors.gender)}>
                <input
                  type="radio"
                  value="male"
                  {...register("gender")}
                  className={`h-4 w-4 text-cyan-600 ${
                    errors.gender
                      ? "border-rose-500 focus:ring-rose-400"
                      : "border-slate-300 focus:ring-cyan-500"
                  }`}
                />
                男
              </label>
              <label className={getRadioLabelClassName(!!errors.gender)}>
                <input
                  type="radio"
                  value="female"
                  {...register("gender")}
                  className={`h-4 w-4 text-cyan-600 ${
                    errors.gender
                      ? "border-rose-500 focus:ring-rose-400"
                      : "border-slate-300 focus:ring-cyan-500"
                  }`}
                />
                女
              </label>
            </div>
            <p className={errorClassName}>{errors.gender?.message}</p>
          </div>

          <div>
            <label className={labelClassName}>
              メール
              <span className={requiredBadgeClassName}>必須</span>
            </label>
            <input
              className={getTextInputClassName(!!errors.email)}
              type="email"
              placeholder="example@example.com"
              {...register("email")}
            />
            <p className={errorClassName}>{errors.email?.message}</p>
          </div>

          <div>
            <label className={labelClassName}>
              都道府県
              <span className={requiredBadgeClassName}>必須</span>
            </label>
            <select
              className={getSelectClassName(!!errors.prefecture)}
              {...register("prefecture")}
            >
              <option value="">選択してください</option>
              <option value="東京">東京</option>
              <option value="神奈川">神奈川</option>
              <option value="大阪">大阪</option>
            </select>
            <p className={errorClassName}>{errors.prefecture?.message}</p>
          </div>

          <div>
            <label className={labelClassName}>
              住所1
              <span className={requiredBadgeClassName}>必須</span>
            </label>
            <input
              className={getTextInputClassName(!!errors.address1)}
              placeholder="例）渋谷区神南1-1-1"
              {...register("address1")}
            />
            <p className={errorClassName}>{errors.address1?.message}</p>
          </div>

          <div>
            <label className={labelClassName}>住所2</label>
            <input
              className={getTextInputClassName(false)}
              placeholder="例）マンション名・部屋番号"
              {...register("address2")}
            />
          </div>

          <div>
            <label className={labelClassName}>
              電話番号
              <span className={requiredBadgeClassName}>必須</span>
            </label>
            <input
              className={getTextInputClassName(!!errors.tel)}
              type="tel"
              placeholder="例）03-1234-5678"
              {...register("tel")}
            />
            <p className={errorClassName}>{errors.tel?.message}</p>
          </div>

          <div>
            <label className={labelClassName}>備考</label>
            <textarea
              className={`${inputClassName} min-h-28 resize-y`}
              placeholder="ご要望があればご記入ください"
              {...register("note")}
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-w-32 items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-300 disabled:opacity-100"
          >
            {isSubmitting ? "送信中..." : "送信"}
          </button>
        </div>
      </form>
    </div>
  );
};
