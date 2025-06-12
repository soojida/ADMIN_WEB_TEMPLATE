import { create } from "zustand";

type CheckboxStore = {
  checkedItems: any[];
  setCheckedItems: (value: any) => void;
};

export const useCheckboxStore = create<CheckboxStore>((set) => ({
  checkedItems: [],
  setCheckedItems: (value: any) =>
    set((state) => ({ checkedItems: [...value(state.checkedItems)] })),
}));
