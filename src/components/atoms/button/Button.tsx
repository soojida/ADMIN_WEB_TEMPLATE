// 공통
import React from "react";
import styled from "styled-components";

// 유틸리티
import { getIconSizeStyle } from "@/utils/components/button/getIconSizeStyle";
import { getDirectionStyle } from "@/utils/components/button/getDirectionStyle";
import { getShapeStyle } from "@/utils/components/button/getShapeStyle";
import { getSizeStyle } from "@/utils/components/button/getSizeStyle";
import { getVariantStyle } from "@/utils/components/button/getVariantStyle";

export type ButtonProps = {
  // 버튼 안의 내용
  children?: React.ReactNode;
  // 버튼의 색상 설정
  variant?:
    | "primary"
    | "secondary"
    | "gray"
    | "primary-outline"
    | "primary-dark"
    | "dark"
    | "";
  // 버튼의 크기 설정
  size?: "xsmall" | "small" | "medium" | "large";
  // 버튼의 모양 설정
  shape?: "square" | "round" | "round50";
  // 아이콘의 위치 설정 (텍스트와 함께 쓰일 경우 사용 권장)
  direction?: "left" | "right";
  // 인라인 스타일 커스텀
  style?: React.CSSProperties;
  // 아이콘
  icon?: React.ReactNode;
  // 클래스명
  className?: string;
  // 버튼 클릭 이벤트
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  // 비활성 여부
  disabled?: boolean;
};

const Button = ({
  children,
  variant,
  size = "medium",
  shape = "round",
  direction = "left",
  style,
  icon,
  className,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <ButtonStyle
      className={className}
      variant={variant}
      size={size}
      shape={shape}
      direction={direction}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {children}
    </ButtonStyle>
  );
};

export default React.memo(Button);

export const ButtonStyle = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  gap: 4px;
  cursor: pointer;
  word-break: keep-all;
  border: 0;
  outline: 0;
  ${({ size }) => getSizeStyle(size)}
  ${({ shape }) => getShapeStyle(shape)}
  ${({ variant }) => getVariantStyle(variant)}
  ${({ direction }) => getDirectionStyle(direction)}

  &.w-full {
    width: 100%;
  }

  &:disabled {
    color: ${({ theme }) => theme.color.gray300};
    background: ${({ theme }) => theme.color.gray100};
    border-color: ${({ theme }) => theme.color.gray200};

    svg {
      fill: ${({ theme }) => theme.color.gray300};
    }
  }
  &.icon {
    height: auto;
    ${({ size }) => getIconSizeStyle(size)}
  }
`;
