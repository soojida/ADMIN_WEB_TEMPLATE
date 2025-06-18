// 공통
import React from "react";
import styled from "styled-components";

type CardProps = {
  // 클래스명
  className?: string;
  // 카드 내용
  children: React.ReactNode;
  // 카드 방향성 (기본값 column)
  direction?: string;
};

const Card = ({ className, children, direction = "column" }: CardProps) => {
  return (
    <CardForm className={className} direction={direction}>
      {children}
    </CardForm>
  );
};

export default React.memo(Card);

const CardForm = styled.div<CardProps>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "column" ? "column" : "row"};
  flex-wrap: wrap;
  gap: 16px;
  padding: 24px;
  background: ${({ theme }) => theme.color.background};
  border: 1px solid ${({ theme }) => theme.color.gray200};
  border-radius: 4px;
`;
