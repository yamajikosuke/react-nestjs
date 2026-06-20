import { create } from "zustand";
import { devtools } from "zustand/middleware";
export const useUrlStore = create((set) => ({
    url: "",
    setUrl: (url) => set({ url }),
}));
export const useStore = create((set) => ({
    count: 0,
    increaseCount: () => set((state) => ({ count: state.count + 1 })),
    decreaseCount: () => set((state) => ({ count: state.count - 1 })),
    resetCount: () => set({ count: 0 }),
}));
export const useTextStore = create()(devtools((set) => ({
    text: "",
    setText: (newText) => set({ text: newText }),
})));
export const useCheckBoxStore = create()(devtools((set) => ({
    isChecked: false,
    setChecked: (checked) => set({ isChecked: checked }),
})));
export const useFoodsStore = create()(devtools((set) => ({
    checkedFoods: [],
    setCheckedFoods: (checkedFoods) => set({ checkedFoods }),
})));
