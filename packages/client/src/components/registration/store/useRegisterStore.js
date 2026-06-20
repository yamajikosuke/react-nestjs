import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
const initialData = {
    name: "",
    gender: "",
    email: "",
    prefecture: "",
    address1: "",
    address2: undefined,
    tel: "",
    note: undefined,
};
export const useRegisterStore = create()(persist((set) => ({
    data: initialData,
    setData: (v) => set((state) => ({
        data: { ...state.data, ...v },
    })),
    clear: () => set({ data: initialData }),
}), {
    name: "register", // sessionStorage のキー
    storage: createJSONStorage(() => sessionStorage),
    partialize: (state) => ({ data: state.data }), // 保存対象を限定
}));
