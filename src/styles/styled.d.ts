// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;

      white: string;
      black: string;

      gray50: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;
      gray950: string;

      blueGray25: string;
      blueGray50: string;
      blueGray100: string;
      blueGray200: string;
      blueGray300: string;
      blueGray400: string;
      blueGray500: string;
      blueGray600: string;
      blueGray700: string;
      blueGray800: string;
      blueGray900: string;
      blueGray950: string;

      error: string;
      errorDark: string;

      background: string;
    };
  }

  // mode를 유지하며, DefaultTheme에 포함 시키기 (App.tsx 파일 내 다크/라이트 모드 설정을 위함)
  export interface DefaultTheme extends mode {
    background: string;
    text: string;
    headerBg: string;
    headerText: string;
    border: string;
  }
}
