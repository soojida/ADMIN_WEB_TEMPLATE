// 레이아웃
import DefaultLayout from "@/layouts/DefaultLayout";

// 컴포넌트
import ButtonGroup from "@/components/atoms/button/ButtonGroup";
import Card from "@/components/templates/card/Card";
import CardItem from "@/components/templates/card/CardItem";
import TableLayout from "@/layouts/common/TableLayout";
import HorizontalTable from "@/components/atoms/table/HorizontalTable";
import Dropdown from "@/components/atoms/dropdown/Dropdown";
import Input from "@/components/atoms/form/Input";
import Button from "@/components/atoms/button/Button";

/* 👀 DefaultLayout.tsx를 기반으로 ~Page.tsx 구성하며,
    사용 방법을 위해 해당 영역에 노출 시킴.
    실 프로젝트 진행시 해당 컴포넌트 제거 후 outlet으로 연동 */
const SamplePage = () => {
  return (
    <DefaultLayout
      // 페이지 제목 노출 시, 사용합니다.
      header="페이지 제목"
      // footer={
      //   <ButtonGroup
      //     buttons={[
      //       { text: "취소", variant: "primary" },
      //       { text: "저장", variant: "primary" },
      //     ]}
      //   />
      // }
    >
      {/* 검색 영역입니다. */}
      <Card>
        <CardItem
          // 두번째 행 버튼 표출 시, 사용 합니다.
          buttonIdx={1}
          // 버튼 표출 시, 사용 합니다.
          button={<Button variant="primary">검색</Button>}
          // 해당 형식을 사용하여, const로 검색 항목 작업해주세요.
          cells={[
            [
              {
                label: "검색어",
                item: (
                  <>
                    <Dropdown
                      id="searchQuery"
                      items={["전체", "전체"]}
                      placeholder="전체"
                    />
                    <Input
                      style={{ width: "340px" }}
                      placeholder="검색어를 입력해주세요."
                      onChange={() => {}}
                    />
                  </>
                ),
              },
              {
                label: "검색어",
                item: (
                  <>
                    <Input
                      style={{ width: "340px" }}
                      placeholder="검색어를 입력해주세요."
                      onChange={() => {}}
                    />
                  </>
                ),
              },
            ],
            [
              {
                label: "검색어",
                item: (
                  <>
                    <Input
                      style={{ width: "340px" }}
                      placeholder="검색어를 입력해주세요."
                      onChange={() => {}}
                    />
                  </>
                ),
              },
            ],
          ]}
        />
      </Card>
      {/* 목록/테이블 영역입니다. */}
      <TableLayout
        // 타이틀이 있는 경우 사용합니다.
        title="테이블 제목"
        // 타이틀 우측에 배치되며, 버튼 및 정렬(드롭다운) 표출 시 사용합니다.
        utils={
          <ButtonGroup
            buttons={[
              { text: "등록", variant: "primary" },
              // { text: "엑셀 다운로드", variant: "secondary" },
            ]}
          />
        }
        // 테이블 표출 영역입니다.
        table={
          <HorizontalTable
            checkbox={true}
            pagination={true}
            // 해당 형식을 사용하여, const로 테이블 헤더 및 바디 영역을 작업해주세요.
            headers={[
              {
                key: "",
                value: "타이틀",
              },
              {
                key: "",
                value: "타이틀",
              },
              {
                key: "",
                value: "타이틀",
                children: [
                  { key: "", value: "서브타이틀" },
                  {
                    key: "",
                    value: "서브타이틀",
                  },
                ],
              },
              {
                key: "",
                value: "타이틀",
                children: [
                  { key: "", value: "서브타이틀" },
                  {
                    key: "",
                    value: "서브타이틀",
                  },
                ],
              },
            ]}
            items={[]}
            // 데이터가 없는 경우에 대한 메세지입니다.
            noDataMessage="데이터가 없습니다."
          />
        }
      />
    </DefaultLayout>
  );
};

export default SamplePage;
