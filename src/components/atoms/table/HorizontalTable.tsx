// 공통
import React from "react";
import styled from "styled-components";

// 함수
import { useTable } from "@/hooks/components/table/useTable";
import Pagination from "../pagination/Pagination";
import Checkbox from "../form/Checkbox";
import useCheckbox from "@/hooks/components/checkbox/useCheckbox";

type HeaderItem = {
  grandChild?: HeaderItem[];
  key: any | string[];
  value: React.ReactNode;
  colspan?: number;
  children?: HeaderItem[];
};
type DataItem = {
  [key: string]: React.ReactNode | any;
};
export type HorizontalTableProps = {
  // 클래스명
  className?: string;
  // 테이블 푸터 내용
  footer?: React.ReactNode;
  // 테이블 헤더 데이터
  headers: HeaderItem[] | undefined;
  // 테이블 바디 데이터
  items: DataItem[] | any;
  // 테이블 바디 데이터 커스텀
  renderBodyRows?: (item?: any, key?: any) => React.ReactNode;
  // 테이블 헤더 클릭 이벤트
  onClickHeader?: (header?: HeaderItem) => void;
  // 테이블 바디 클릭 이벤트
  onClickRow?: (item?: DataItem) => void;
  // 테이블 너비값 설정
  colgroup?: React.ReactNode;
  // 테이블 데이터가 없는 경우 메세지
  noDataMessage?: string | React.ReactNode;
  // 테이블 헤더 정렬
  headerAlign?: "left" | "center" | "right";
  // 테이블 바디 정렬
  contentsAlign?: "left" | "center" | "right";
  // 페이지네이션 표출 여부
  pagination?: boolean;
  // 체크박스 표출 여부
  checkbox?: boolean;
  // 테이블 스크롤 여부
  scroll?: boolean;
};
const HorizontalTable = ({
  className,
  footer,
  headers = [],
  items,
  renderBodyRows,
  onClickHeader,
  onClickRow,
  colgroup,
  noDataMessage = "결과가 없습니다.",
  headerAlign = "center",
  contentsAlign = "center",
  pagination = false,
  checkbox = false,
  scroll = false,
}: HorizontalTableProps) => {
  const { checkedItems, isAllChecked, handleItemCheck, handleAllCheck } =
    useCheckbox();
  const { headerKeys, childrenCells, grandChildCells, childrenCount } =
    useTable({
      headers,
    });

  const renderHorizontalHeader = (headers: HeaderItem[]) => {
    return (
      <>
        {/* 첫번째(1depth) 단계 헤더 셀 */}
        <tr>
          {checkbox && (
            <th rowSpan={childrenCount + 1} align="center" className="checkbox">
              {/* 전체 체크박스 */}
              <TableCheckbox
                checked={isAllChecked(items)}
                onChange={(e) => handleAllCheck(items, e.target.checked)}
              />
            </th>
          )}
          {headers.map((header, index) => {
            return header.children ? (
              // 1) 헤더 영역의 하위 자식 요소가 있는 경우
              <th
                key={header.key || `header-${index}`}
                align={headerAlign}
                // colSpan={header.children ? childrenCount || 1 : undefined}
                colSpan={
                  header.children ? header.children.length || 1 : undefined
                }
                onClick={() => onClickHeader && onClickHeader(header)}
              >
                {header.value}
              </th>
            ) : (
              // 2) 헤더 영역의 하위 자식 요소가 없는 경우
              <th
                key={header.key || `header-${index}`}
                align={headerAlign}
                rowSpan={3}
                onClick={() => onClickHeader && onClickHeader(header)}
              >
                {header.value}
              </th>
            );
          })}
        </tr>
        {/* 두번째(2epth) 단계(children) 헤더 셀 */}
        <tr>
          {headers.flatMap((header, headerIdx) =>
            header.children
              ? header.children.map((child, childIdx) =>
                  child.grandChild ? (
                    // 1) 두번째 헤더 영역의 하위 자식 요소가 있는 경우
                    <th
                      key={child.key || `child-${headerIdx}-${childIdx}`}
                      colSpan={grandChildCells[child.key] || 1}
                    >
                      {child.value}
                    </th>
                  ) : (
                    // 2) 두번째 헤더 영역의 하위 자식 요소가 없는 경우
                    <th
                      key={child.key || `child-${headerIdx}-${childIdx}`}
                      rowSpan={childrenCells[header.key]}
                    >
                      {child.value}
                    </th>
                  )
                )
              : []
          )}
        </tr>
        {/* 세번째(3depth) 단계(grandchild) 헤더 셀 */}
        <tr className="grand">
          {headers.flatMap((header) =>
            header.children
              ? header.children.map((child, i) =>
                  child.grandChild
                    ? child.grandChild.map((grand: any) => (
                        <th key={grand.key || `grand-${i}`}>{grand.value}</th>
                      ))
                    : []
                )
              : []
          )}
        </tr>
      </>
    );
  };
  const renderHorizontalContents = (items: DataItem[]) => {
    return items.length !== 0 ? (
      // 1) 컨텐츠(데이터)가 있는 경우
      items.map((item, index) => (
        <tr key={item.key || `item-${index}`}>
          {checkbox && (
            <td>
              <TableCheckbox
                id={item.id}
                checked={checkedItems.includes(item.id)}
                onChange={(e) => {
                  handleItemCheck(item.id, e.target.checked);
                }}
              />
            </td>
          )}
          {headerKeys.map((key: any) => {
            return (
              <td
                key={`header-key-${key}`}
                align={contentsAlign}
                onClick={() => onClickRow && onClickRow(item)}
              >
                {renderBodyRows ? renderBodyRows(item[key], key) : item[key]}
              </td>
            );
          })}
        </tr>
      ))
    ) : (
      // 2) 컨텐츠(데이터)가 없는 경우
      <tr>
        <td align="center" colSpan={headerKeys.length + 1}>
          {noDataMessage}
        </td>
      </tr>
    );
  };
  return (
    <HorizontalTableScroll
      $scroll={scroll}
      className={
        scroll === (undefined || false) ? className : `${className} scroll`
      }
    >
      <HorizontalTableForm className={className}>
        {colgroup && <colgroup>{colgroup}</colgroup>}
        <Thead $headerAlign={headerAlign}>
          {renderHorizontalHeader(headers)}
        </Thead>
        <Tbody $contentsAlign={contentsAlign}>
          {renderHorizontalContents(items)}
        </Tbody>
        {footer && <Tfoot>{footer}</Tfoot>}
      </HorizontalTableForm>
      {pagination && <TablePagination />}
    </HorizontalTableScroll>
  );
};
export default React.memo(HorizontalTable);

const HorizontalTableScroll = styled.div<{ $scroll: boolean }>`
  width: 100%;
  overflow-y: ${({ $scroll }) =>
    $scroll === (undefined || false) ? "inherit" : "auto"};
  max-height: ${({ $scroll }) =>
    $scroll === (undefined || false) ? "100%" : "405px"};

  &.scroll {
    border-top: 1px solid ${({ theme }) => theme.color.gray200};
    border-bottom: 1px solid ${({ theme }) => theme.color.gray200};
    table {
      border-top: 0;
      border-bottom: 0;

      th {
        border-top: 0;
      }
    }
    thead {
      position: sticky;
      top: 0;
      z-index: 99;
    }
  }
`;

const HorizontalTableForm = styled.table`
  width: -webkit-fill-available;
  height: auto;
  border-collapse: separate;
  table-layout: fixed;
  border: 1px solid ${({ theme }) => theme.color.gray200};
  border-top: 0;

  th,
  td {
    padding: 6px 8px;
    height: 42px;
    vertical-align: middle;
    line-height: 1.2;
    font-size: 13px;
  }
`;
const Thead = styled.thead<{ $headerAlign: string }>`
  position: sticky;
  top: 0;
  z-index: 99;
  background: ${({ theme }) => theme.color.background};

  tr {
    th {
      text-align: ${(props) =>
        props.$headerAlign === "center"
          ? "center"
          : props.$headerAlign === "left"
            ? "left"
            : "right"};
      border-top: 1px solid ${({ theme }) => theme.color.gray200};

      &:not(:first-child) {
        border-left: 1px solid ${({ theme }) => theme.color.gray200};
      }

      &.checkbox {
        width: 50px;
      }
    }
    /* 세번째 단계(grand)가 있는 경우의 스타일 */
    &.grand {
      th {
        border-left: 1px solid ${({ theme }) => theme.color.gray200};
      }
    }

    & + tr {
      th:first-child {
        border-left: 1px solid ${({ theme }) => theme.color.gray200};
      }
    }
  }
`;
const Tbody = styled.tbody<{ $contentsAlign: string }>`
  position: relative;
  background: ${({ theme }) => theme.color.white};

  tr {
    border-top: 1px solid ${({ theme }) => theme.color.gray200};

    td {
      text-align: ${(props) =>
        props.$contentsAlign === "center"
          ? "center"
          : props.$contentsAlign === "left"
            ? "left"
            : "right"};
      border-top: 1px solid ${({ theme }) => theme.color.gray200};

      &:not(:first-child) {
        border-left: 1px solid ${({ theme }) => theme.color.gray200};
      }
    }

    &.active {
      background: ${({ theme }) => theme.color.primary};
    }
  }
`;
const Tfoot = styled.tfoot``;
const TablePagination = styled(Pagination)`
  margin-top: 16px;
`;
export const TableCheckbox = styled(Checkbox)`
  justify-content: center;
`;
