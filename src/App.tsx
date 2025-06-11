// 공통
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import Router from "./routes/Router";
import { useThemeStore } from "./stores/common/useThemeSotre";

// 실제 화면에 보여질 UI 컴포넌트 루트 구성 요소
const App = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {/* 스타일 호출 */}
      <GlobalStyle />
      {/* 라우터 호출 */}
      <Router />
    </ThemeProvider>
  );
};

export default App;
