import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { RegisterForm } from "../schema/registerSchema";

type RegisterFormInitial = Omit<RegisterForm, "gender"> & {
  gender: "male" | "female" | string;
};

const initialData: RegisterFormInitial = {
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
  data: RegisterFormInitial;
  setData: (v: Partial<RegisterFormInitial>) => void;
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
