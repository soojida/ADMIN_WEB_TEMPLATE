// 공통
import { ButtonProps } from "@/components/atoms/button/Button";
import { css } from "styled-components";

// 아이콘 혼합 사용 시, 아이콘 위치
export const getDirectionStyle = (direction: ButtonProps["direction"]) => {
  switch (direction) {
    case "right":
      return css`
        flex-direction: row-reverse;
      `;
    default:
      return css`
        flex-direction: row;
      `;
  }
};
