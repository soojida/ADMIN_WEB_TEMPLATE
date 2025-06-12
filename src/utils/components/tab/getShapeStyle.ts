// 공통
import { css } from "styled-components";

// 컴포넌트
import { TabProps } from "@/components/atoms/tab/Tab";

export const getShapeStyle = (shape: TabProps["shape"]) => {
  switch (shape) {
    case "round":
      return css`
        border-radius: 4px 4px 0 0;
      `;
    case "square":
      return css`
        border-radius: 0;
      `;
    default:
      return css`
        border-radius: 4px;
      `;
  }
};
