// 공통
import React from "react";
import styled from "styled-components";

type ErrorMessageProps = {
  // 아이콘
  icon?: React.ReactNode;
  // 에러메세지
  children?: React.ReactNode;
  // 클래스명
  className?: string;
  // 스타일
  style?: React.CSSProperties;
};

const ErrorMessage = ({ className, icon, children }: ErrorMessageProps) => {
  return (
    <ErrorMessageStyle className={className}>
      {icon && icon}
      {children}
    </ErrorMessageStyle>
  );
};
export default React.memo(ErrorMessage);

const ErrorMessageStyle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  margin-top: 16px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.error};

  &.success {
    color: ${({ theme }) => theme.color.primary};
  }

  svg {
    font-size: 14px;
  }
`;

export const InputErrorMessage = styled(ErrorMessage)`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;
