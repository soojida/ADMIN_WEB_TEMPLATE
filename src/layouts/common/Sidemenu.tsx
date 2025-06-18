// 공통
import React, { useState } from "react";
import styled from "styled-components";

// 컴포넌트
import SidemenuItem from "@/components/templates/sidemenu/SidemenuItem";
import Button from "@/components/atoms/button/Button";

// 상수
import { sidemenuConst } from "@/constants/components/SidemenuConst";

// 아이콘
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

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
  // 사이드 메뉴 접힘/펼침 상태값 변경
  const [isMenuFolded, setIsMenuFolded] = useState<boolean>(true);

  return (
    <>
      <SidemenuLayout folded={isMenuFolded}>
        <SideMenuList>
          {sidemenuConst.map((menu: any, idx: number) => {
            return <SidemenuItem key={idx} item={menu} />;
          })}
        </SideMenuList>
      </SidemenuLayout>
      <FoldingButton
        folded={isMenuFolded}
        onClick={() => setIsMenuFolded((state) => !state)}
        icon={
          isMenuFolded ? (
            <IoIosArrowBack
              style={{
                fontSize: "15px",
              }}
            />
          ) : (
            <IoIosArrowForward
              style={{
                fontSize: "15px",
              }}
            />
          )
        }
      />
    </>
  );
};

export default React.memo(Sidemenu);

const SidemenuLayout = styled.div<{ folded: boolean }>`
  position: relative;
  width: 240px;
  height: 100%;
  left: ${({ folded }) => (folded ? "0" : "-240px")};
  flex: 0 0 ${({ folded }) => (folded ? "240px" : "0")};
  overflow: auto;
  border-right: 1px solid ${({ theme }) => theme.color.gray200};
  background: ${({ theme }) => theme.color.white};
  transform: translateX(${({ folded }) => (folded ? "0" : "-100%")});
  transition:
    transform 0.3s ease,
    flex 0.3s ease;
`;

const SideMenuList = styled.ul`
  padding: 16px 12px;
  height: 100%;
`;
const FoldingButton = styled(Button)<{ folded: boolean }>`
  position: absolute;
  top: 50%;
  left: ${({ folded }) => (folded ? "240px" : "0")};
  transform: translateY(-50%);
  z-index: 10;
  width: 24px;
  height: 52px;
  padding: 0;
  margin-left: -1px;
  border-radius: 0 4px 4px 0;
  border: 1px solid ${({ theme }) => theme.color.blueGray100};
  background-color: white;
  transition: left 0.3s ease;
`;
