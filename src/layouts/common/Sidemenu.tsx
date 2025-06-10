// 공통
import React from "react";
import styled from "styled-components";

// 컴포넌트
import SidemenuItem from "@/components/templates/\bsidemenu/SidemenuItem";

// 상수
import { sidemenuConst } from "@/constants/components/SidemenuConst";

export type SideMenuLists = {
  // 메뉴의 제목
  title?: string;
  // 메뉴의 아이콘
  icon?: React.ReactNode;
  /// 메뉴 항목의 경로
  path?: string;
  // 하위 메뉴 항목들 (배열 형태)
  children?: SideMenuLists[];
};

const Sidemenu = () => {
  return (
    <SidemenuLayout>
      <SideMenuList>
        {sidemenuConst.map((menu: any, idx: number) => {
          return <SidemenuItem key={idx} item={menu} />;
        })}
      </SideMenuList>
    </SidemenuLayout>
  );
};

export default React.memo(Sidemenu);

const SidemenuLayout = styled.div`
  position: relative;
  width: 240px;
  height: 100%;
  padding: 16px 12px;
  overflow: auto;
  border-right: 1px solid ${({ theme }) => theme.color.gray200};
  flex: 0 0 240px;
`;

const SideMenuList = styled.ul``;
