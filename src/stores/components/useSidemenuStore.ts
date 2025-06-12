import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// 상태 타입 정의
type SidemenuState = {
  selectedMenu: string;
  setSelectedMenu: (menu: string) => void;
  openMenu: string;
  setToggleMenu: (menu: string) => void;
};

// 선택된 메뉴 localStorage 저장, 새로고침 시 메뉴 유지
export const useSidemenuStore = create<SidemenuState>()(
  persist(
    (set) => ({
      selectedMenu: "/", // 초기 선택된 메뉴의 path
      setSelectedMenu: (menu: string) => {
        set({ selectedMenu: menu });
      },
      openMenu: "", // 열려 있는 메뉴
      setToggleMenu: (menu: string) => {
        set((state) => ({
          openMenu: state.openMenu === menu ? "" : menu,
        }));
      },
    }),
    {
      name: "menu-storage", // localStorage에 저장될 이름
      storage: createJSONStorage(() => localStorage), // localStorage를 저장소로 설정
    }
  )
);
