// 공통
import React from "react";
import styled from "styled-components";

// 컴포넌트
import Label, { LabelProps } from "@/components/atoms/label/Label";
import Button from "@/components/atoms/button/Button";

type Cell = {
  item?: React.ReactNode;
  label?: React.ReactNode;
};
type CardItemProps = {
  // 카드 아이템 내용
  cells: Cell[][];
  // 클래스명
  className?: string;
  // 라벨 property 바인딩
  labelProps?: LabelProps;
  // 버튼 표출
  button?: React.ReactNode;
  // 버튼의 표출 행 선택 (기본값 = 0 : 첫번째 행)
  buttonIdx?: number;
};

const CardItem = ({
  cells = [],
  className,
  labelProps,
  button,
  buttonIdx = 0,
}: CardItemProps) => {
  if (!cells.length) return null;

  return cells.map((cell, idx) => (
    <CardItemForm key={`${cell}-${idx}`} className={className}>
      {cell.map(({ item, label }, i) => (
        <CardItemInner key={`card-item-${i}`}>
          {label && <CardItemLabel {...labelProps}>{label}</CardItemLabel>}
          <CardItemCell>{item}</CardItemCell>
        </CardItemInner>
      ))}
      {buttonIdx === idx && button}
    </CardItemForm>
  ));
};

export default React.memo(CardItem);

const CardItemForm = styled.div`
  display: flex;
  gap: 16px;
  align-items: end;
  flex-wrap: wrap;
`;
const CardItemInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const CardItemCell = styled.div`
  display: flex;
  gap: 4px;
`;
const CardItemLabel = styled(Label)`
  padding-left: 2px;
  font-size: 13px;
  color: ${({ theme }) => theme.color.gray500};
  font-weight: 400;
`;
