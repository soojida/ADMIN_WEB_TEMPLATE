// 기본 색상

import { DefaultTheme, useTheme } from "styled-components";

export const color = {
  primary: "#212224",
  secondary: "#375c89",

  white: "#FFFFFF",
  black: "#000000",

  // gray
  gray50: "#f7f7f7",
  gray100: "#f2f4f7",
  gray200: "#e4e7ec",
  gray300: "#d0d5dd",
  gray400: "#98a2b3",
  gray500: "#667085", // sub text
  gray600: "#475467",
  gray700: "#344054", // svg, icon
  gray800: "#1d2939",
  gray900: "#101828", // main text
  gray950: "#0c111d",

  // blueGray
  blueGray25: "#fafafc",
  blueGray50: "#f8f9fc",
  blueGray100: "#eaecf5", // border
  blueGray200: "#c8cce5",
  blueGray300: "#9ea5d1",
  blueGray400: "#717bbc",
  blueGray500: "#4e5ba6",
  blueGray600: "#3e4784",
  blueGray700: "#363f72",
  blueGray800: "#293056",
  blueGray900: "#101828",
  blueGray950: "#0d0f1c",

  // action
  error: "#e7290f",
  errorDark: "#ce2929",

  // background
  background: "#f6f7f8",
};

// 다크 모드
export const darkTheme: DefaultTheme = {
  // background: "#212224",
  background: color.primary,
  text: "#ffffff",
  headerBg: "#212224",
  headerText: "#ffffff",
  border: "transparents",
  color: {
    ...color,
  },
};

// 라이트 모드
export const lightTheme: DefaultTheme = {
  background: "#ffffff",
  text: "#212224",
  headerBg: "#ffffff",
  headerText: "#212224",
  border: "#e4e7ec",
  color: {
    ...color,
  },
};

export const theme = {
  color,
  darkTheme,
  lightTheme,
};

export default theme;
