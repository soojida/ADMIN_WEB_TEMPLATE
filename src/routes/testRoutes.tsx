// 페이지
import MainPage from "@/pages/MainPage";
import TestPage from "@/pages/TestPage";

export const testRoutes = [
  {
    path: "/main",
    element: <MainPage />,
    children: [
      {
        index: true,
        element: <TestPage />,
      },
    ],
  },
];
