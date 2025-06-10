// 공통
import styled from "styled-components";

// 레이아웃
import Header from "@/layouts/common/Header";
import Sidemenu from "@/layouts/common/Sidemenu";
import DefaultLayout from "@/layouts/DefaultLayout";

export const MainPage = () => {
  return (
    <Container className="container">
      <Header />
      <Sidemenu />
      <DefaultLayout />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
