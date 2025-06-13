// 공통
import { css } from "styled-components";
import { TextAreaProps } from "@/components/atoms/form/Textarea";

// textarea 사이즈 조정 제어
export const getResizeStyle = (resize: TextAreaProps["resize"]) => {
  switch (resize) {
    case "none":
      return css`
        resize: none;
      `;
    case "vertical":
      return css`
        resize: vertical;
      `;
    case "horizontal":
      return css`
        resize: horizontal;
      `;
    case "auto":
      return css`
        resize: auto;
      `;
    default:
      return css``;
  }
};
