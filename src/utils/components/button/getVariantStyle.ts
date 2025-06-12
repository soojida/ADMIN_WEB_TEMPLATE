// 공통
import { ButtonProps } from "@/components/atoms/button/Button";
import { css } from "styled-components";

// 버튼 색상
export const getVariantStyle = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "primary":
      return css`
        color: ${({ theme }) => theme.color.white};
        background: ${({ theme }) => theme.color.primary};
      `;
    case "secondary":
      return css`
        color: ${({ theme }) => theme.color.white};
        background: ${({ theme }) => theme.color.secondary};
      `;
    case "gray":
      return css`
        color: ${({ theme }) => theme.color.gray600};
        background: ${({ theme }) => theme.color.background};
        border: 1px solid ${({ theme }) => theme.color.blueGray100};
      `;
    case "primary-outline":
      return css`
        color: ${({ theme }) => theme.color.primary};
        background: ${({ theme }) => theme.color.white};
        border: 1px solid ${({ theme }) => theme.color.primary};
      `;
    case "primary-dark":
      return css`
        color: ${({ theme }) => theme.color.white};
        background: ${({ theme }) => theme.color.gray900};
      `;
    case "dark":
      return css`
        color: ${({ theme }) => theme.color.white};
        background: ${({ theme }) => theme.color.gray900};
      `;
    default:
      return css`
        color: ${({ theme }) => theme.color.gray900};
      `;
  }
};
