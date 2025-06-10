// 공통
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// 상태 관리
import { useSidemenuStore } from "@/stores/components/useSidemenuStore";

export const useSidemenu = (item: any) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setSelectedMenu, selectedMenu, openMenu, setToggleMenu } =
    useSidemenuStore();

  useEffect(() => {
    // URL이 변경될 때 상태 업데이트
    setSelectedMenu(location.pathname);
  }, [location.pathname, setSelectedMenu]);

  // 현재 선택된 메뉴인지 확인
  const isActive =
    selectedMenu === item.path || // 현재 선택된 메뉴의 path가 저장된 selectedMenu와 동일한 경우
    (item.children?.some((child: any) => child.path === selectedMenu) ?? false); //하위 메뉴가 있는 경우 하위 메뉴 중 selectedMenu와 path가 일치하는 경우 true

  // 현재 메뉴가 열려 있는지 확인
  const isOpen = openMenu === item.title;

  /**
   * @param {Object} item 클릭한 메뉴 아이템
   * @returns 메뉴 클릭 이벤트 핸들러
   */
  const handleClickMenuItem = (item: any) => {
    // children 이 있는 경우, 하위 메뉴 토글
    if (item.children) {
      setToggleMenu(item.title);
    } else {
      // path가 존재하면 해당 페이지로 이동하고 메뉴 활성화
      if (item.path) {
        navigate(item.path);
        setSelectedMenu(item.path);
      }
    }
  };

  return {
    isActive,
    isOpen,
    handleClickMenuItem,
  };
};
