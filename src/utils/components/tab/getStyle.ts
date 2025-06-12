// 공통
import { css } from "styled-components";

// 컴포넌트
import { TabProps } from "@/components/atoms/tab/Tab";

export const getStyle = (tabStyle: TabProps["tabStyle"]) => {
  switch (tabStyle) {
    case "background":
      return css`
        color: ${({ theme }) => theme.color.white};
        background: ${({ theme }) => theme.color.primary};
      `;
    case "border":
      return css`
        background: ${({ theme }) => theme.color.white};
        border: 1px solid ${({ theme }) => theme.color.blueGray100};
        color: ${({ theme }) => theme.color.primary};
        &:after {
          background: ${({ theme }) => theme.color.primary};
        }
        &:not(:first-child) {
          border-left: 1px solid ${({ theme }) => theme.color.blueGray100};
        }
      `;
    default:
      return css`
        color: ${({ theme }) => theme.color.gray900};
        border: 1px solid ${({ theme }) => theme.color.blueGray100};
        border-bottom: 0;
        background: ${({ theme }) => theme.color.white};
      `;
  }
};
