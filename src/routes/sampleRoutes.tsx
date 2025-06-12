// 페이지
import MainPage from "@/pages/MainPage";

import SamplePage from "@/pages/SamplePage";
import SampleDetailPage from "@/pages/SampleDetailPage";

export const sampleRoutes = [
  {
    path: "/sample",
    element: <MainPage />,
    children: [
      {
        index: true,
        element: <SamplePage />,
      },
      {
        path: "detail",
        element: <SampleDetailPage />,
      },
    ],
  },
];
