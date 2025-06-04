// 공통
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// 진입 파일, React DOM에 App 컴포넌트 마운트
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
