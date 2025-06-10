// 공통
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

// 진입 파일, React DOM에 App 컴포넌트 마운트
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* App 컴포넌트 마운트 */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
