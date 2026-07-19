import { z } from "zod";

export const userFormSchema = z.object({
  name: z.string().trim().min(1, "名前は必須です"),
  email: z
    .string()
    .trim()
    .min(1, "メールは必須です")
    .email("メールアドレスの形式が正しくありません"),
});

export type UserFormValues = z.infer<typeof userFormSchema>;
