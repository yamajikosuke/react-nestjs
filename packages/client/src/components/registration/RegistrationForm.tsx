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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>名前</label>
        <input {...register("name")} />
        <p>{errors.name?.message}</p>
      </div>

      <div>
        <label>性別</label>
        <label>
          <input type="radio" value="male" {...register("gender")} /> 男
        </label>
        <label>
          <input type="radio" value="female" {...register("gender")} /> 女
        </label>
        <p>{errors.gender?.message}</p>
      </div>

      <div>
        <label>メール</label>
        <input {...register("email")} />
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <label>都道府県</label>
        <select {...register("prefecture")}>
          <option value="">選択してください</option>
          <option value="東京">東京</option>
          <option value="神奈川">神奈川</option>
          <option value="大阪">大阪</option>
        </select>
        <p>{errors.prefecture?.message}</p>
      </div>

      <div>
        <label>住所1</label>
        <input {...register("address1")} />
        <p>{errors.address1?.message}</p>
      </div>

      <div>
        <label>住所2</label>
        <input {...register("address2")} />
      </div>

      <div>
        <label>電話番号</label>
        <input {...register("tel")} />
        <p>{errors.tel?.message}</p>
      </div>

      <div>
        <label>備考</label>
        <textarea {...register("note")} />
      </div>

      <button type="submit" disabled={isSubmitting}>
        送信
      </button>
    </form>
  );
};
