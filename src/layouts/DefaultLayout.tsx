import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";

type DefaultLayoutProps = {
  className?: string;
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
};

const DefaultLayout = ({
  className,
  header,
  children,
  footer,
}: DefaultLayoutProps) => {
  return (
    <LayoutContainer className={className}>
      <LayoutInner>
        {header && <LayoutHeader>{header}</LayoutHeader>}
        <LayoutContents>{children}</LayoutContents>
      </LayoutInner>
      {footer && <LayoutFooter>{footer}</LayoutFooter>}
    </LayoutContainer>
  );
};

export default React.memo(DefaultLayout);

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const LayoutInner = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 24px;
  width: 100%;
  height: 100%;
  padding: 24px;
  overflow: auto;
`;
const LayoutHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  h2 {
    font-size: 18px;
    font-weight: 500;
  }

  span {
    position: relative;
    font-size: 15px;
    font-weight: 400;
    z-index: 1;

    &:before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 10px;
      padding: 0 4px;
      background: ${({ theme }) => transparentize(0.1, theme.color.primary)};
      position: absolute;
      left: -4px;
      bottom: 0;
      z-index: -1;
    }
  }
`;
const LayoutContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const LayoutFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 32px;
  flex: 0 0 62px;
  border-top: 1px solid ${({ theme }) => theme.color.gray200};

  // 자식 요소가 2개일 경우 적용 (버튼 그룹 정렬)
  &:has(> *:nth-child(2):last-child) {
    justify-content: space-between;
  }
`;
