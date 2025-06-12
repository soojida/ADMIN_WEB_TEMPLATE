// 공통
import { useNavigate } from "react-router-dom";

// 레이아웃
import DefaultLayout from "@/layouts/DefaultLayout";

// 컴포넌트
import ButtonGroup from "@/components/atoms/button/ButtonGroup";
import TableLayout from "@/layouts/common/TableLayout";
import VerticalTable from "@/components/atoms/table/VerticalTable";
import Button from "@/components/atoms/button/Button";

const SampleDetailPage = () => {
  const navigate = useNavigate();

  return (
    <DefaultLayout
      // 페이지 제목 노출 시, 사용합니다.
      header="페이지 제목"
      // 페이지 푸터 영역 노출 시, 사용합니다.
      footer={
        // 단일 푸터 요소 사용 시, <></> 빈 태그 제거 후 사용 권장합니다.
        <>
          <Button variant="primary" onClick={() => navigate("/sample")}>
            목록으로
          </Button>
          <ButtonGroup
            buttons={[
              { text: "편집", variant: "primary" },
              { text: "저장", variant: "primary" },
            ]}
          />
        </>
      }
    >
      {/* 목록/테이블 영역입니다. */}
      <TableLayout
        // 타이틀이 있는 경우 사용합니다.
        title="테이블 제목"
        // 테이블 표출 영역입니다.
        table={
          <VerticalTable
            // 해당 형식을 사용하여, const로 테이블 바디 영역을 작업해주세요.
            body={[
              // 1행 2열
              {
                headers: [
                  {
                    value: "타이틀",
                    type: "input",
                    placeholder: "내용을 입력해주세요.",
                    colspan: 2,
                  },
                  {
                    value: "타이틀",
                    type: "dropdown",
                    placeholder: "전체",
                    items: ["전체"],
                  },
                ],
              },
              // 2행 2열
              {
                group: "타이틀",
                headers: [
                  {
                    value: "타이틀",
                    type: "input",
                    placeholder: "내용을 입력해주세요.",
                  },
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
                    tdColspan: 3,
                  },
                ],
              },
            ]}
          />
        }
      />
      {/* 목록/테이블 영역입니다. */}
      <TableLayout
        // 타이틀이 있는 경우 사용합니다.
        title="테이블 제목"
        // 테이블 표출 영역입니다.
        table={
          <VerticalTable
            // 해당 형식을 사용하여, const로 테이블 바디 영역을 작업해주세요.
            body={[
              // 1행 2열
              {
                headers: [
                  {
                    value: "타이틀",
                    type: "input",
                    placeholder: "내용을 입력해주세요.",
                  },
                  {
                    value: "타이틀",
                    type: "dropdown",
                    placeholder: "전체",
                    items: ["전체"],
                  },
                ],
              },
              // 2행 2열
              {
                headers: [
                  {
                    value: "타이틀",
                    type: "input",
                    placeholder: "내용을 입력해주세요.",
                  },
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
    </DefaultLayout>
  );
};

export default SampleDetailPage;
