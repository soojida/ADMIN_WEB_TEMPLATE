// 공통
import styled from "styled-components";
import { Outlet } from "react-router-dom";

// 레이아웃
import Header from "@/layouts/common/Header";
import Sidemenu from "@/layouts/common/Sidemenu";

const MainPage = () => {
  return (
    <Container id="container">
      <Header />
      <LayoutInner>
        <Sidemenu />
        <Outlet />
      </LayoutInner>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const LayoutInner = styled.div`
  display: flex;
  height: 100%;
`;
