// 공통
import styled from "styled-components";
import { Outlet } from "react-router-dom";

// 레이아웃
import Header from "@/layouts/common/Header";
import Sidemenu from "@/layouts/common/Sidemenu";
import DefaultLayout from "@/layouts/DefaultLayout";

export const MainPage = () => {
  return (
    <Container id="container">
      <Header />
      <LayoutInner>
        <Sidemenu />
        <Outlet />
        {/* 👀 DefaultLayout.tsx를 기반으로 ~Page.tsx 구성하며,
            사용 방법을 위해 해당 영역에 노출 시킴.
            실 프로젝트 진행시 해당 컴포넌트 제거 후outlet으로 연동 */}
        <DefaultLayout>컨텐츠 표출 영역</DefaultLayout>
      </LayoutInner>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const LayoutInner = styled.div`
  display: flex;
  height: 100%;
`;
