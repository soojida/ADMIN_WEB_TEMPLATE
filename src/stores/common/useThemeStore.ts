import { create } from "zustand";

type ThemeStore = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  setIsDarkMode: (value: boolean) => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  isDarkMode: false, // false: 라이트 모드 / ture: 다크 모드
  toggleTheme: () => set((state: any) => ({ isDarkMode: !state.isDarkMode })),
  setIsDarkMode: (value: boolean) => set({ isDarkMode: value }),
}));
