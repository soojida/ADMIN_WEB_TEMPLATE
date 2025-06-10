import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login/LoginPage";
import { MainPage } from "@/pages/MainPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
};

export default Router;
