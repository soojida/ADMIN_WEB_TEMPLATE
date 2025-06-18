// 공통
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import Router from "./routes/Router";
import { useMediaQuery } from "react-responsive";

// 상태 관리
import { useThemeStore } from "./stores/common/useThemeStore";

// 패아자
import MobilePage from "./pages/mobile/MobilePage";

// 실제 화면에 보여질 UI 컴포넌트 루트 구성 요소
const App = () => {
  // 다크/라이트 모드 전환
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  // 모바일 대응
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {/* 스타일 호출 */}
      <GlobalStyle />
      {/* 라우터 호출 */}
      {isMobile ? <MobilePage /> : <Router />}
    </ThemeProvider>
  );
};

export default App;
