// 공통
import { useEffect, useRef, useState } from "react";

// 컴포넌트
import { DropdownProps } from "@/components/atoms/dropdown/Dropdown";

export const useDropdown = ({ label, items, onClick, id }: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const tempRef = useRef<HTMLDivElement>(null); // 문자열 길이 측정을 위한 임시 ref
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [elWidth, setElWidth] = useState<string>("auto");
  const [selectedItem, setSelectedItem] = useState<string | undefined>(label);

  useEffect(() => {
    // 초기 너비가 가장 긴 아이템의 길이를 찾아 너비값 설정
    if (tempRef.current) {
      const longestWidth = tempRef.current.offsetWidth + 40;
      setElWidth(`${longestWidth}px`);
    }
    if (dropdownRef.current) {
      const width = dropdownRef.current.offsetWidth;
      setElWidth(width + "px");
    }
    document.addEventListener("mousedown", onHandlClickOutside);
    return () => {
      document.removeEventListener("mousedown", onHandlClickOutside);
    };
  }, [items]);

  /**
   * @param e 선택한 항목
   * @returns 드롭다운이거나 선택한 항목이외의 영역 클릭시, 드롭다운 목록 닫기
   */
  const onHandlClickOutside = (e: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  /**
   * @param item 항목
   * @returns 드롭다운 항목 클릭시, 클릭된 항목 저장 및 드롭다운 리스트 닫힘
   */
  const onHandleItemClick = (item: string) => {
    if (items.includes(item)) {
      setSelectedItem(item);
    } else {
      setSelectedItem(undefined);
    }
    setIsOpen(true);
  };

  /**
   * @returns 드롭다운 목록 열기 제어
   */
  const onHandleDropdownClick = () => {
    setIsOpen((prev) => !prev);
    if (onClick) {
      onClick(id);
    }
  };

  return {
    dropdownRef,
    tempRef,
    elWidth,
    isOpen,
    selectedItem,
    onHandleItemClick,
    onHandleDropdownClick,
  };
};
