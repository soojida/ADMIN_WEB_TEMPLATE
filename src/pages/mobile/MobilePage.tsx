// 공통
import styled from "styled-components";

const MobilePage = () => {
  return (
    <MobileLayout id="MobileLayout">
      <MobileInner>
        <h1>
          <span>📱➡︎ 💻</span>
          태블릿 또는 데스크톱 환경에서 접속하세요!
        </h1>
        <em>
          어드민 사이트는 모바일 환경 및 태블릿 세로 모드를 지원하지 않습니다.
        </em>
      </MobileInner>
    </MobileLayout>
  );
};

export default MobilePage;

const MobileLayout = styled.div`
  position: fixed;
  inset: 0;
`;
const MobileInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 100%;
  margin: auto;
  padding: 0 42px;

  h1 {
    font-size: 26px;
    font-weight: 600;
    line-height: 1.4;
    text-align: center;
    word-break: keep-all;

    span {
      display: block;
      font-size: 38px;
      margin-bottom: 16px;
    }
  }

  em {
    color: ${({ theme }) => theme.color.gray500};
    font-size: 15px;
    text-align: center;
    line-height: 1.6;
    word-break: keep-all;
  }
`;
