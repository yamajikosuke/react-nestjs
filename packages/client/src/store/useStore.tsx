import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Count = {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
  resetCount: () => void;
};

type TextState = {
  text: string;
  setText: (newText: string) => void;
};

type CheckBoxState = {
  isChecked: boolean;
  setChecked: (checked: boolean) => void;
};

export const useStore = create<Count>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  resetCount: () => set({ count: 0 }),
}));

export const useTextStore = create<TextState>()(
  devtools((set) => ({
    text: "",
    setText: (newText: string) => set({ text: newText }),
  })),
);

export const useCheckBoxStore = create<CheckBoxState>()(
  devtools((set) => ({
    isChecked: false,
    setChecked: (checked: boolean) => set({ isChecked: checked }),
  })),
);
