// 공통
import { css } from "styled-components";

// 컴포넌트
import { ModalProps } from "@/components/templates/modal/Modal";

export const getBackgroundStyle = (background: ModalProps["background"]) => {
  switch (background) {
    case "dimmed":
      return css`
        &::before,
        &:after {
          background: rgba(0, 0, 0, 0.15);
        }
        background: rgba(0, 0, 0, 0.15);
      `;
    default:
      return css`
        &::before,
        &:after {
          background: none;
        }
        background: none;
      `;
  }
};
