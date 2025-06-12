// 공통
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

// 아이콘
import { SlArrowDown } from "react-icons/sl";

// 함수
import { useDropdown } from "@/hooks/components/dropdown/useDropdown";
import { transparentize } from "polished";

export type DropdownProps = {
  // 드롭다운 선택된 내용
  label?: string;
  // 클래스명
  className?: string;
  // 클릭했을 때 호출할 함수
  onClick?: (id: string) => void;
  // 선택 항목 리스트
  items: string[];
  // 아이디
  id?: string;
  // 플레이스홀더
  placeholder?: string;
  // 비활성화 여부
  disabled?: boolean;
  // 데이터
  value?: string | number;
  // 선택 이벤트
  onSelect?: () => void;
};

const Dropdown = ({
  label,
  onClick,
  className,
  items,
  id,
  placeholder = "선택해주세요",
  disabled = false,
}: DropdownProps) => {
  const {
    dropdownRef,
    tempRef,
    elWidth,
    isOpen,
    selectedItem,
    onHandleItemClick,
    onHandleDropdownClick,
  } = useDropdown({ label, items, onClick, id, disabled });
  const [currentLabel, setCurrentLabel] = useState(label || placeholder);

  useEffect(() => {
    if (selectedItem) {
      setCurrentLabel(selectedItem);
    }
  }, [selectedItem]);

  return (
    <DropdownForm
      id={id}
      ref={dropdownRef}
      onClick={disabled ? () => {} : () => onHandleDropdownClick()}
      className={disabled ? className : className}
      $isOpen={isOpen}
      width={elWidth}
    >
      <DropdownLabel
        htmlFor={id}
        className="dropdown__label"
        $isOpen={isOpen}
        placeholder={placeholder}
      >
        {currentLabel}
        <SlArrowDown style={{ fontSize: "10px" }} />
      </DropdownLabel>

      {isOpen && (
        <DropdownList className="dropdown__list" $isOpen={isOpen}>
          {items.map((item, idx) => {
            return (
              <DropdownItem
                className="dropdown__item"
                key={idx}
                onClick={() => onHandleItemClick(item)}
              >
                {item}
              </DropdownItem>
            );
          })}
        </DropdownList>
      )}
      <HiddenText ref={tempRef}>
        {(items ?? []).reduce(
          (longest, item) => (item?.length > longest.length ? item : longest),
          ""
        )}
      </HiddenText>
    </DropdownForm>
  );
};
export default React.memo(Dropdown);

const DropdownForm = styled.div<{ $isOpen: boolean; width?: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: ${({ width }) => width};
  height: 38px;
  font-size: 13px;
  border: 1px solid ${({ theme }) => theme.color.blueGray100};
  border-radius: ${({ $isOpen }) => ($isOpen ? "4px 4px 0 0 " : "4px")};
  background: ${({ theme }) => theme.color.white};
  cursor: pointer;
  box-sizing: border-box;

  &:disabled,
  &.disabled {
    color: ${({ theme }) => theme.color.gray300};
    background: ${({ theme }) => theme.color.gray100};
    border-color: ${({ theme }) => theme.color.gray200};
    cursor: not-allowed;

    label {
      color: ${({ theme }) => theme.color.gray300};
    }

    &:hover {
      color: ${({ theme }) => theme.color.gray400};
      background: ${({ theme }) => theme.color.gray100};
      border-color: ${({ theme }) => theme.color.gray200};
      cursor: not-allowed;
    }

    svg {
      fill: ${({ theme }) => theme.color.gray300};
    }
  }

  &.focus {
    border: 1px solid ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 0 3px #edf4ff;
  }
`;
const DropdownLabel = styled.label<{ $isOpen: boolean; placeholder?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  height: 38px;
  padding: 0 12px;
  white-space: nowrap;
  color: ${({ theme, placeholder }) =>
    placeholder === "" ? theme.color.gray300 : theme.color.gray900};
  ${({ $isOpen }) =>
    $isOpen
      ? css`
          svg {
            transform: rotate(180deg);
          }
        `
      : css``};
`;
const DropdownList = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  top: 36px;
  left: 0;
  z-index: 100;
  padding: 6px 0;
  margin-left: -1px;
  width: 100%;
  max-height: 250px;
  overflow: auto;
  max-width: 100%;

  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.blueGray100};
  box-sizing: content-box;
  border-radius: ${({ $isOpen }) => ($isOpen ? "0 0 4px 4px" : "4px")};
`;
const DropdownItem = styled.li`
  padding: 8px;
  margin: 0 4px;
  text-align: left;
  box-sizing: border-box;
  white-space: nowrap;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => transparentize(0.9, theme.color.primary)};
    border-radius: 4px;
  }
`;

// 숨겨진 텍스트를 사용하여 가장 긴 아이템의 너비 측정
const HiddenText = styled.span`
  position: absolute;
  visibility: hidden;
  white-space: nowrap;
  font-size: 13px;
  padding: 0 12px;
`;
