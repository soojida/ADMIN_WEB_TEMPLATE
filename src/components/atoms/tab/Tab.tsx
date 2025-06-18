// 공통
import React from "react";
import styled from "styled-components";

// 함수
import { useTab } from "@/hooks/components/tab/useTab";

// 유틸리티
import { getShapeStyle } from "@/utils/components/tab/getShapeStyle";
import { getStyle } from "@/utils/components/tab/getStyle";

export type TabProps = {
  // 탭을 클릭했을 때 호출할 함수
  onClick?: () => void;
  // 클래스명
  className?: string;
  // 탭의 모양 설정
  shape?: "square" | "round";
  // 탭의 스타일 설정
  tabStyle?: "background" | "border";
  // 외부에서 활성화된 탭 인덱스 전달
  isActive?: number;
  // 패널에 출력할 Item
  tabItems?: { tabItem: React.ReactNode | string; content: React.ReactNode }[];
  // 탭의 너비
  width?: string;
};

const Tab = ({
  tabItems = [],
  onClick,
  className,
  shape = "square",
  tabStyle,
  isActive = 0,
  width = "20%",
}: TabProps) => {
  const { activeTab, onHandleTabClick } = useTab({
    isActive,
    onClick,
  });

  return (
    <TabForm className="tab__form">
      <TabList shape={shape} className="tab__list" style={{ width: width }}>
        {tabItems.map(({ tabItem }, idx) => (
          <TabItem
            key={idx}
            shape={shape}
            tabStyle={activeTab === idx ? tabStyle : undefined}
            className={activeTab === idx ? `active ${className}` : className}
            onClick={() => onHandleTabClick(idx)}
          >
            {tabItem}
          </TabItem>
        ))}
      </TabList>
      <TabContents className="tab__content">
        {tabItems[activeTab].content}
      </TabContents>
    </TabForm>
  );
};

export default React.memo(Tab);

const TabForm = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${({ theme }) => theme.color.white};
`;

// 탭 아이템 스타일 영역
const TabList = styled.div<TabProps>`
  display: flex;
  ${({ shape }) => getShapeStyle(shape)}
`;

const TabItem = styled.div<TabProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 38px;
  padding: 0 16px;
  flex: 1;
  font-size: 14px;
  cursor: pointer;
  ${({ shape }) => getShapeStyle(shape)}
  ${({ tabStyle }) => getStyle(tabStyle)}
  color:  ${({ theme }) => theme.color.gray300};
  background: ${({ theme }) => theme.color.background};

  &:not(:first-child) {
    margin-left: 4px;
    border-left: 1px solid ${({ theme }) => theme.color.blueGray100};
  }
  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: -1px;
    width: 100%;
    z-index: 999;
    left: 0;
    right: 0;
    height: 2px;
  }

  &.active {
    ${({ tabStyle }) => getStyle(tabStyle)}
  }
`;

export const TabTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  height: 100%;
  font-size: 14px;
`;

const TabContents = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
  font-size: 15px;
  overflow: auto;
  border-top: 1px solid ${({ theme }) => theme.color.blueGray100};
`;
