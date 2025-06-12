import { Navigate, useRoutes } from "react-router-dom";
import { LoginPage } from "../pages/login/LoginPage";

import { sampleRoutes } from "./sampleRoutes";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <LoginPage /> },
    { path: "*", element: <Navigate to="/" /> },
    ...sampleRoutes,
  ]);
  return routes;
};

export default Router;
