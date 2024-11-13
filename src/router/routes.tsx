import { createBrowserRouter, type RouteObject } from "react-router-dom";
import TestPage from "@/pages/TestPage";
import BoardingPage0 from "@/pages/Splash-Screen/BoardingPage0";
import BoardingPage1 from "@/pages/Splash-Screen/BoardingPage1";
import BoardingPage2 from "@/pages/Splash-Screen/BoardingPage2";
import BoardingPage3 from "@/pages/Splash-Screen/BoardingPage3";
import BoardingPage4 from "@/pages/Splash-Screen/BoardingPage4";
import LocationDetails from "@/pages/location/LocationDetails";
import PostDetails from "@/pages/post/PostDetails";
import ExplorePage from "@/pages/ExplorePage/ExplorePage";

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
    path: "/explore-page",
    element: <ExplorePage />
  },
  {
    path: "/test",
    element: <TestPage />,
  },
  {
    path: "/location-details",
    element: <LocationDetails />,
  },
  {
    path: "/explore-page",
    element: <ExplorePage />
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
