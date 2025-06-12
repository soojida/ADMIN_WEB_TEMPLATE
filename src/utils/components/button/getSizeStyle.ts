// 공통
import { ButtonProps } from "@/components/atoms/button/Button";
import { css } from "styled-components";

// 기본 버튼 사이즈
export const getSizeStyle = (size: ButtonProps["size"]) => {
  switch (size) {
    case "xsmall":
      return css`
        height: 24px;
        padding: 0 12px;
        font-size: 12px;
      `;
    case "small":
      return css`
        height: 32px;
        padding: 0 12px;
      `;
    case "medium":
      return css`
        height: 38px;
        padding: 0 18px;
      `;
    case "large":
      return css`
        height: 40px;
        font-size: 15px;
        padding: 0 18px;
      `;
    default:
      return css`
        width: auto;
        height: auto;
      `;
  }
};
