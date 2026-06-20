import { z } from "zod";

const genderSchema = z
  .enum(["", "male", "female"])
  .refine(
    (value): value is "male" | "female" => value !== "",
    "性別は必須です",
  );

export const registerSchema = z.object({
  name: z
    .string()
    .min(1, "必須です")
    .max(20, "20文字以内で入力してください")
    .regex(/^[^\x01-\x7E]+$/, "全角で入力してください"),
  gender: genderSchema,

  email: z.string().min(1, "必須です").email("メール形式が不正です"),

  prefecture: z.string().min(1, "必須です"),
  address1: z.string().min(1, "必須です"),
  address2: z.string().optional(),

  tel: z
    .string()
    .min(1, "必須です")
    .regex(/^[0-9\-]+$/, "半角数字とハイフンのみ")
    .regex(/^\d{2,4}-\d{2,4}-\d{3,4}$/, "電話番号の形式が不正です"),

  note: z.string().optional(),
});

export type RegisterForm = z.output<typeof registerSchema>;
export type RegisterFormInput = z.input<typeof registerSchema>;
