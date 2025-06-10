// 공통
import { useEffect } from "react";

/**
 * @param ref 외부 클릭을 감지하고자 하는 DOM 요소의 ref
 * @param onClickOutside 외부 클릭 시 실행할 콜백 함수
 */
const useClickOutside = (
  ref: React.RefObject<HTMLElement | null>,
  onClickOutside: () => void
) => {
  useEffect(() => {
    // 마우스 클릭 이벤트 발생 시 실행될 핸들러
    const handleClickOutside = (e: MouseEvent) => {
      // ref가 존재하고, 클릭한 타겟이 해당 ref 영역 밖일 경우 이벤트 실행
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClickOutside();
      }
    };

    // 컴포넌트 마운트 시 리스너 실행
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // 컴포넌트 마운트 시 리스터 제거
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};

export default useClickOutside;
