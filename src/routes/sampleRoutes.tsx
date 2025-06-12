// 페이지
import MainPage from "@/pages/MainPage";
import SamplePage from "@/pages/SamplePage";

export const sampleRoutes = [
  {
    path: "/main",
    element: <MainPage />,
    children: [
      {
        index: true,
        element: <SamplePage />,
      },
    ],
  },
];
