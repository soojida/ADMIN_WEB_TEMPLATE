// 공통
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { transparentize } from "polished";

// 아이콘
import { RiArrowRightSLine } from "react-icons/ri";

// 레이아웃
import { SideMenuLists } from "@/layouts/common/Sidemenu";

// 함수
import { useSidemenu } from "@/hooks/components/sidemenu/useSidemenu";

type SideMenuItemProps = {
  // 컨텐츠 요소 객체
  item?: SideMenuLists;
  // 클래스명
  className?: string;
};

const SidemenuItem = ({
  item = {} as SideMenuLists, // undefined 인 경우 빈 객체로 설정
  className,
}: SideMenuItemProps) => {
  const { isActive, isOpen, handleClickMenuItem } = useSidemenu(item);
  const childrenMenuRef = useRef<HTMLUListElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>("0px");

  // 리스트 펼침 시, 동적 최대 높이값을 산출하여 자연스러운 transition 적용
  useEffect(() => {
    if (childrenMenuRef.current) {
      setMaxHeight(
        isOpen ? `${childrenMenuRef.current.scrollHeight}px` : "0px"
      );
    }
  }, [isOpen]);

  return (
    <MenuItemForm className={`${isActive ? "active" : ""} ${className || ""}`}>
      <MenuItemInner onClick={() => handleClickMenuItem(item)}>
        <MenuItemArea>
          {item.icon && <MenuItemIcon>{item.icon}</MenuItemIcon>}
          <MenuItemTitle>{item.title}</MenuItemTitle>
        </MenuItemArea>
        {item.children && (
          <MenuItemToggleIcon open={isOpen}>
            <RiArrowRightSLine />
          </MenuItemToggleIcon>
        )}
      </MenuItemInner>

      {item.children && (
        <ChildrenMenuList
          item={item}
          open={isOpen}
          className="sub-menu-list"
          ref={childrenMenuRef}
          $maxHeight={maxHeight}
        >
          {item.children.map((child: any, idx: number) => (
            <SidemenuItem key={`${child.title}-${idx}`} item={child} />
          ))}
        </ChildrenMenuList>
      )}
    </MenuItemForm>
  );
};

export default React.memo(SidemenuItem);

const MenuItemForm = styled.li`
  cursor: pointer;
`;
const MenuItemInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  height: 36px;
  margin: 2px 0;
  padding: 0 12px 0 16px;
  line-height: 25px;
  transition: transform 0.25s ease;
`;

const MenuItemArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MenuItemIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const MenuItemToggleIcon = styled.span<{ open: boolean }>`
  display: flex;
  font-size: 20px;
  transform: ${({ open }) => (open ? "rotate(90deg)" : "rotate(0)")};
  transition: transform 0.25s ease;
`;

const MenuItemTitle = styled.span`
  color: ${({ theme }) => theme.color.gray900};
  font-size: 15px;
  font-weight: 500;
`;

const ChildrenMenuList = styled.ul<{
  open: boolean;
  $maxHeight: any;
  item: SideMenuLists;
}>`
  max-height: ${({ open, $maxHeight }) => (open ? $maxHeight : "0px")};
  overflow: hidden;
  transition: max-height 0.15s ease;

  li {
    padding-left: ${({ item }) => (item.icon ? "26px" : "12px")};
    border-radius: 6px;
    transition: all 0.25s ease;
    &.active {
      background: ${({ theme }) => theme.color.primary};

      ${MenuItemTitle} {
        color: ${({ theme }) => theme.color.primary};
        font-weight: 500;
      }
    }

    ${MenuItemTitle} {
      color: ${({ theme }) => theme.color.gray600};
      font-size: 14px;
      font-weight: 400;
    }
    &:not(.active):hover {
      background: ${({ theme }) => transparentize(0.6, theme.color.gray200)};
    }
  }
`;
