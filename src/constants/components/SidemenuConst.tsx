// 아이콘
import { LuUsersRound } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";

// 레이아웃
import { SideMenuLists } from "@/layouts/common/Sidemenu";

export const sidemenuConst: SideMenuLists[] = [
  // 아이콘이 없는 경우 사용 예시
  {
    title: "메뉴1",
    children: [
      {
        title: "서브 메뉴",
        path: "/",
      },
      {
        title: "서브 메뉴",
      },
    ],
  },
  // 아이콘이 있는 경우 사용 예시
  {
    title: "메뉴2",
    icon: <RxDashboard />,
    children: [
      {
        title: "서브 메뉴",
        path: "/",
      },
      {
        title: "서브 메뉴",
      },
    ],
  },
  {
    title: "메뉴3",
    icon: <LuUsersRound />,
  },
  {
    title: "메뉴4",
    icon: <FiSettings />,
  },
];
