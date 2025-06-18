// 공통
import { useNavigate } from "react-router-dom";

// 레이아웃
import DefaultLayout from "@/layouts/DefaultLayout";

// 컴포넌트
import ButtonGroup from "@/components/atoms/button/ButtonGroup";
import TableLayout from "@/layouts/common/TableLayout";
import VerticalTable from "@/components/atoms/table/VerticalTable";
import Button from "@/components/atoms/button/Button";
import Tab from "@/components/atoms/tab/Tab";

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
              // 1행
              {
                headers: [
                  {
                    value: "datepicker (날짜)",
                    type: "datepicker",
                    // placeholder: "내용을 입력해주세요.",
                    colspan: 2,
                  },
                  {
                    value: "timepicker (시간)",
                    type: "timepicker",
                    placeholder: "전체",
                    items: ["전체"],
                  },
                ],
              },
              // 2행
              {
                headers: [
                  {
                    value: "datepickerRange (날짜 범위)",
                    type: "datepickerRange",
                    // placeholder: "내용을 입력해주세요.",
                    colspan: 2,
                  },
                  {
                    value: "timepickerRange (시간 범위)",
                    type: "timepickerRange",
                    placeholder: "전체",
                    items: ["전체"],
                  },
                ],
              },
              // 3행
              {
                group: "group (병합)",
                headers: [
                  {
                    value: "radio (라디오)",
                    type: "radio",
                    radios: [
                      {
                        label: "라디오1",
                        value: "1",
                      },
                      {
                        label: "라디오2",
                        value: "2",
                        defaultChecked: true,
                      },
                    ],
                  },
                  {
                    value: "checkbox (체크)",
                    type: "checkbox",
                    checkboxs: [
                      {
                        label: "체크1",
                      },
                      {
                        label: "체크2",
                      },
                    ],
                  },
                ],
              },
              {
                headers: [
                  {
                    value: "input (텍스트)",
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
              // 1행
              {
                headers: [
                  {
                    value: "file (파일선택)",
                    type: "file",
                    label: "파일 선택",
                    placeholder: "파일을 선택해주세요. (.jpg, .jpeg, .png)",
                  },
                  {
                    value: "dropdown (드롭다운)",
                    type: "dropdown",
                    placeholder: "전체",
                    items: ["전체", "개별"],
                  },
                ],
              },
              // 2행
              {
                headers: [
                  {
                    value: "textarea (긴문장)",
                    type: "textarea",
                    placeholder: "내용을 입력해주세요.",
                  },
                  {
                    value: "image (썸네일)",
                    type: "image",
                    placeholder: "내용을 입력해주세요.",
                  },
                ],
              },
            ]}
          />
        }
      />
      {/* 탭 컨텐츠 영역입니다. */}
      <Tab
        shape="round"
        tabItems={[
          {
            tabItem: "탭 제목",
            content: (
              <VerticalTable
                // 해당 형식을 사용하여, const로 테이블 바디 영역을 작업해주세요.
                body={[
                  // 1행
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
                  // 2행
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
            ),
          },
          { tabItem: "탭 제목", content: "탭 컨텐츠" },
        ]}
      ></Tab>
    </DefaultLayout>
  );
};

export default SampleDetailPage;
