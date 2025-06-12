// 공통
import React from "react";

// 컴포넌트
import Modal from "@/components/templates/modal/Modal";
import ButtonGroup from "@/components/atoms/button/ButtonGroup";
import TableLayout from "../common/TableLayout";
import VerticalTable from "@/components/atoms/table/VerticalTable";

const SampleModal = () => {
  return (
    <Modal
      // 모달의 타이틀이 있는 경우 사용합니다.
      title="모달 제목"
      // 모달의 총 너비값을 제어할 경우 사용합니다. (기본 설정 너비값이 컨텐츠 보다 좁거나 넓은 경우 사용)
      width="620px"
      // 모달의 푸터 영역이 있는 경우 사용합니다.
      footer={
        <ButtonGroup
          buttons={[
            { text: "취소", variant: "primary-outline" },
            { text: "저장", variant: "primary" },
          ]}
        />
      }
    >
      {/* 모달 컨텐츠 영역입니다. */}
      <TableLayout
        // 타이틀이 있는 경우 사용합니다.
        title="테이블 제목"
        // 테이블 표출 영역입니다.
        table={
          <VerticalTable
            // 해당 형식을 사용하여, const로 테이블 바디 영역을 작업해주세요.
            body={[
              {
                headers: [
                  {
                    value: "타이틀",
                    type: "input",
                    placeholder: "내용을 입력해주세요.",
                  },
                ],
              },
              {
                headers: [
                  {
                    value: "타이틀",
                    type: "input",
                    placeholder: "내용을 입력해주세요.",
                  },
                ],
              },
            ]}
          />
        }
      />
    </Modal>
  );
};

export default React.memo(SampleModal);
