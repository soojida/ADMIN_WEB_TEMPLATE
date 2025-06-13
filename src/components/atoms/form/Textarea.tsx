// 공통
import React from "react";
import { transparentize } from "polished";
import styled from "styled-components";

// 유틸리티
import { getResizeStyle } from "@/utils/components/textarea/getResizeStyle";

export type TextAreaProps = {
  // placeholder
  placeholder?: string;
  // 비활성화 여부
  disabled?: boolean;
  // teatarea 내용
  children?: React.ReactNode | string;
  // 선택값 반환 함수
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  // 적용값
  value?: string;
  // textarea 사이즈 조절
  resize?: "none" | "vertical" | "horizontal" | "auto";
  // textarea 높이값
  height?: string;
};

const Textarea = ({
  placeholder = "",
  disabled = false,
  children,
  onChange,
  value,
  resize = "none",
  height = "100px",
}: TextAreaProps) => {
  return (
    <TextareaForm
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      resize={resize}
      height={height}
    >
      {children}
    </TextareaForm>
  );
};

export default React.memo(Textarea);

const TextareaForm = styled.textarea<TextAreaProps>`
  width: 100%;
  height: ${({ height }) => (height === undefined ? "100%" : height)};
  max-height: ${({ height }) => (height === undefined ? "100%" : height)};
  padding: 12px;
  font-size: 13px;
  border: 1px solid ${({ theme }) => theme.color.blueGray100};
  border-radius: 4px;
  outline: 0;
  overflow: auto;

  ${({ resize }) => getResizeStyle(resize)}

  &:focus,
  &.focus {
    border: 1px solid ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 3px 0
      ${({ theme }) => transparentize(0.5, theme.color.primary)};
  }
  &.error {
    border: 1px solid ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 3px 0
      ${({ theme }) => transparentize(0.5, theme.color.primary)};
  }
  &:disabled {
    color: ${({ theme }) => theme.color.gray400};
    background: ${({ theme }) => theme.color.gray100};
  }

  &::placeholder {
    letter-spacing: -0.03rem;
    font-size: 13px;
    color: ${({ theme }) => theme.color.gray300};
  }
`;
