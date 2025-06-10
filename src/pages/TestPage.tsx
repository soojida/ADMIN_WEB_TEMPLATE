// 레이아웃
import DefaultLayout from "@/layouts/DefaultLayout";

// 컴포넌트
import ButtonGroup from "@/components/atoms/button/ButtonGroup";

/* 👀 DefaultLayout.tsx를 기반으로 ~Page.tsx 구성하며,
    사용 방법을 위해 해당 영역에 노출 시킴.
    실 프로젝트 진행시 해당 컴포넌트 제거 후 outlet으로 연동 */
const TestPage = () => {
  return (
    <DefaultLayout
      header="페이지 제목"
      footer={
        <ButtonGroup
          buttons={[
            { text: "취소", variant: "primary" },
            { text: "저장", variant: "primary" },
          ]}
        />
      }
    >
      페이지 컨텐츠 영역
    </DefaultLayout>
  );
};

export default TestPage;
