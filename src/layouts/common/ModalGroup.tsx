// 공통
import React from "react";

// 상태 관리
import { useModalStore } from "@/stores/components/useModalStore";

// 레이아웃
import SampleModal from "../modal/SampleModal";

const ModalGroup = () => {
  const { isVisible, name } = useModalStore();
  return (
    <div id="modalGroup">
      {isVisible && name === "sample" && <SampleModal />}
    </div>
  );
};

export default React.memo(ModalGroup);
