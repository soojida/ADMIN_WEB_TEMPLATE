import { Navigate, useRoutes } from "react-router-dom";
import { LoginPage } from "../pages/login/LoginPage";
// import { MainPage } from "@/pages/MainPage";
import { testRoutes } from "./testRoutes";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <LoginPage /> },
    { path: "*", element: <Navigate to="/" /> },
    ...testRoutes,
  ]);
  return routes;
};

export default Router;
