// 공통
import React from "react";
import styled from "styled-components";

// 컴포넌트
import Input from "../form/Input";
import Dropdown from "../dropdown/Dropdown";
import RadioField, { RadioOption } from "../form/RadioField";
import Textarea from "../form/Textarea";
import Editor from "../form/Editor";

type TableCell = {
  // 테이블 타입
  type?:
    | "input"
    | "text"
    | "dropdown"
    | "textarea"
    | "datepicker"
    | "radio"
    | "file"
    | "editor";
  // 테이블 값
  value?: string;
  // 테이블 placeholder
  placeholder?: string;
  // 비활성화 여부
  disabled?: boolean;
  // colspan 병합 개수
  colspan?: number;
  // rowspan 병합 개수
  rowspan?: number;
  // tdRowspan 병합 개수
  tdRowspan?: number;
  // tdColspan 병합 개수
  tdColspan?: number;
  // 필수 여부
  necessary?: boolean;
  // 테이블 설명
  desc?: string;
  // 드롭다운 컴포넌트 데이터
  items?: string[];
  // 라디오 컴포넌트 데이터
  radios?: RadioOption[];
  // 라벨의 속성
  label?: string;
};

type TableGroup = {
  group?: string;
  necessary?: boolean;
  headers: TableCell[];
};

type VerticalTableProps = {
  // 클래스명
  className?: string;
  // col 태그 그룹화
  colgroup?: React.ReactNode;
  // 바디 컨텐츠
  body?: TableGroup[];
  // 테이블 헤더 정렬
  headerAlign?: "left" | "center" | "right";
  // 테이블 바디 정렬
  contentsAlign?: "left" | "center" | "right";
};

const VerticalTable = ({
  className,
  colgroup,
  body = [],
  headerAlign = "center",
  contentsAlign = "center",
}: VerticalTableProps) => {
  /**
   * @param cell
   * @returns
   */
  const renderCell = (cell: any) => {
    switch (cell.type) {
      case "input":
        return (
          <Input
            className={cell.className}
            placeholder={cell.placeholder}
            disabled={cell.disabled}
            value={cell.dataValue}
          />
        );
      case "file":
        return (
          <Input
            className={cell.className}
            type={cell.type}
            onChange={cell.onChange}
            labelProps={{ label: cell.label }}
            placeholder={cell.placeholder}
            value={cell.dataValue || ""}
            disabled={cell.disabled}
          />
        );
      case "dropdown":
        return (
          <Dropdown
            id={cell.id}
            items={cell.items}
            placeholder={cell.placeholder}
            value={cell.dataValue}
            disabled={cell.disabled}
            onSelect={cell.event?.onSelect}
          />
        );
      case "radio":
        return <RadioField radios={cell.radios} />;
      case "textarea":
        return (
          <Textarea
            placeholder={cell.placeholder}
            disabled={cell.disabled}
            onChange={cell.event?.onChange}
            value={cell.dataValue}
          />
        );
      case "editor":
        return <Editor />;
      default:
        return cell.value;
    }
  };
  return (
    <Table className={className}>
      {colgroup && colgroup}
      <Tbody
        as="tbody"
        $headerAlign={headerAlign}
        $contentsAlign={contentsAlign}
      >
        {body?.map((group: any, groupIndex: number) => (
          <React.Fragment key={groupIndex}>
            {group.group ? (
              // group이 있을 경우, 'rowspan'을 사용하여 그룹으로 병합
              <tr>
                <th
                  align={headerAlign}
                  rowSpan={group.headers.length}
                  colSpan={1}
                  className={
                    group.necessary !== undefined && group.necessary
                      ? "necessary"
                      : ""
                  }
                >
                  {group.group}
                </th>
                {group.headers.map((header: any, idx: number) => (
                  <React.Fragment key={idx}>
                    <th
                      align={headerAlign}
                      colSpan={header.colspan || 1}
                      rowSpan={header.rowspan}
                      className={
                        header.necessary !== undefined && header.necessary
                          ? "necessary"
                          : ""
                      }
                    >
                      {header.value} {header.desc && <p>{header.desc}</p>}
                    </th>
                    <td className={header.type} rowSpan={header.tdRowspan}>
                      {renderCell(header)}
                    </td>
                  </React.Fragment>
                ))}
              </tr>
            ) : (
              // group이 없을 경우, headers를 1행으로 출력
              <tr key={groupIndex}>
                {group.headers.map((header: any, idx: number) => (
                  <React.Fragment key={idx}>
                    <th
                      align={headerAlign}
                      colSpan={header.colspan || 1}
                      rowSpan={header.rowspan ? header.rowspan : 1}
                      className={
                        header.necessary !== undefined && header.necessary
                          ? "necessary"
                          : ""
                      }
                    >
                      {header.value} {header.desc && <p>{header.desc}</p>}
                    </th>
                    <td rowSpan={header.tdRowspan} colSpan={header.tdColspan}>
                      {renderCell(header)}
                    </td>
                  </React.Fragment>
                ))}
              </tr>
            )}
          </React.Fragment>
        ))}
      </Tbody>
    </Table>
  );
};

export default React.memo(VerticalTable);

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
`;

const Tbody = styled.tbody<{ $headerAlign: string; $contentsAlign: string }>`
  th,
  td {
    padding: 8px;
    height: 42px;
    vertical-align: middle;
    line-height: 1.2;
    font-size: 13px;
    border: 1px solid ${({ theme }) => theme.color.gray200};
  }
  th {
    width: 20%;
    text-align: ${(props) =>
      props.$headerAlign === "center"
        ? "center"
        : props.$headerAlign === "left"
          ? "left"
          : "right"};
    background: ${({ theme }) => theme.color.gray100};

    p {
      margin-top: 8px;
      word-break: keep-all;
      color: ${({ theme }) => theme.color.primary};
    }
    &.necessary {
      &:before {
        content: "*";
        display: inline-block;
        margin-right: 4px;
        color: ${({ theme }) => theme.color.error};
      }
    }
  }
  td {
    width: 30%;
    text-align: ${(props) =>
      props.$contentsAlign === "center"
        ? "center"
        : props.$contentsAlign === "left"
          ? "left"
          : "right"};

    &.image {
      vertical-align: top;
    }
  }
`;
