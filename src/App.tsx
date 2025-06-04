// 공통
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";

// 실제 화면에 보여질 UI 컴포넌트 루트 구성 요소
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
