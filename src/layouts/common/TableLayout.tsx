// 공통
import React from "react";
import styled from "styled-components";

// 컴포넌트
import Label from "@/components/atoms/label/Label";

type TableLayoutProps = {
  // 클래스명
  className?: string;
  // 테이블 타이틀
  title?: React.ReactNode;
  // 테이블 표출 영역
  table?: React.ReactNode;
  // 테이블 유틸리티
  utils?: React.ReactNode;
};
const TableLayout = ({ className, title, table, utils }: TableLayoutProps) => {
  return (
    <TableLayoutInner className={className}>
      {title && (
        <TableLayoutHeader>
          {/* 테이블 타이틀 */}
          <TableLabel>{title}</TableLabel>
          {/* 테이블 컨트롤러 또는 기타 유틸리티 */}
          {utils && <TableUtil>{utils}</TableUtil>}
        </TableLayoutHeader>
      )}
      {table && table}
    </TableLayoutInner>
  );
};

export default React.memo(TableLayout);

const TableLayoutInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const TableLayoutHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TableLabel = styled(Label)`
  font-size: 15px;
`;
const TableUtil = styled.div``;
