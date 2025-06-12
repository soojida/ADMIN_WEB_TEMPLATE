import { useCheckboxStore } from "@/stores/components/useCheckboxStore";

const useCheckbox = () => {
  const { checkedItems, setCheckedItems } = useCheckboxStore();

  // 개별 선택 핸들러
  const handleItemCheck = (id: any, isChecked: boolean) => {
    setCheckedItems((prev: any) => {
      if (isChecked) {
        return prev.includes(id) ? prev : [...prev, id]; // 중복 방지
      } else {
        return prev.filter((checkedId: any) => checkedId !== id); // 체크 해제
      }
    });
  };

  // 전체 선택 핸들러
  const handleAllCheck = (items: any, isChecked: boolean) => {
    setCheckedItems(() => (isChecked ? items.map((item: any) => item.id) : []));
  };

  // 전체 선택 여부 판별
  const isAllChecked = (items: any) => {
    if (!items || items.length === 0) return false;
    return items.every((item: any) => checkedItems.includes(item.id));
  };

  return {
    checkedItems,
    isAllChecked,
    handleItemCheck,
    handleAllCheck,
  };
};

export default useCheckbox;
