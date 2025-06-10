// 아이콘
import { LuUsersRound } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { RiHome9Line } from "react-icons/ri";

// 레이아웃
import { SideMenuLists } from "@/layouts/common/Sidemenu";

export const sidemenuConst: SideMenuLists[] = [
  {
    title: "홈",
    icon: <RiHome9Line />,
    children: [
      {
        title: "홈 스윗 홈",
        path: "/home",
      },
    ],
  },
  {
    title: "대시보드",
    icon: <RxDashboard />,
  },
  {
    title: "회원 관리",
    icon: <LuUsersRound />,
  },
  {
    title: "설정",
    icon: <FiSettings />,
  },
];
