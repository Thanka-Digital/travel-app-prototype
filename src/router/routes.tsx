import { createBrowserRouter, type RouteObject } from "react-router-dom";
import TestPage from "@/pages/TestPage";
import BoardingPage0 from "@/pages/BoardingPage0";
import BoardingPage1 from "@/pages/BoardingPage1";
import BoardingPage2 from "@/pages/BoardingPage2";
import BoardingPage3 from "@/pages/BoardingPage3";
import BoardingPage4 from "@/pages/BoardingPage4";

// Routes in application
const routes: RouteObject[] = [
  {
    path: "/",
    element: <BoardingPage0 />,
  },
  {
    path: "/1",
    element: <BoardingPage1 />,
  },
  {
    path: "/2",
    element: <BoardingPage2 />,
  },
  {
    path: "/3",
    element: <BoardingPage3 />,
  },
  {
    path: "/4",
    element: <BoardingPage4 />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
  {
    path: "/services",
    children: [
      {
        path: "service-a",
        element: <>Service A</>,
      },
      {
        path: "service-b",
        element: <>Service B</>,
      },
    ],
  },
];

export const route = createBrowserRouter(routes);