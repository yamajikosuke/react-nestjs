import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { RegisterForm } from "../schema/registerSchema";

export type RegisterFormDraft = Omit<RegisterForm, "gender"> & {
  gender: "" | "male" | "female";
};

const initialData: RegisterFormDraft = {
  name: "",
  gender: "",
  email: "",
  prefecture: "",
  address1: "",
  address2: undefined,
  tel: "",
  note: undefined,
};

type State = {
  data: RegisterFormDraft;
  setData: (v: Partial<RegisterFormDraft>) => void;
  clear: () => void;
};

export const useRegisterStore = create<State>()(
  persist(
    (set) => ({
      data: initialData,
      setData: (v) =>
        set((state) => ({
          data: { ...state.data, ...v },
        })),
      clear: () => set({ data: initialData }),
    }),
    {
      name: "register", // sessionStorage のキー
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ data: state.data }), // 保存対象を限定
    },
  ),
);
