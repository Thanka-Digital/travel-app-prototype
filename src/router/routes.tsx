import { createBrowserRouter, type RouteObject } from "react-router-dom";
import TestPage from "@/pages/TestPage";
import BoardingPage0 from "@/pages/Splash-Screen/BoardingPage0";
import BoardingPage1 from "@/pages/Splash-Screen/BoardingPage1";
import BoardingPage2 from "@/pages/Splash-Screen/BoardingPage2";
import BoardingPage3 from "@/pages/Splash-Screen/BoardingPage3";
import BoardingPage4 from "@/pages/Splash-Screen/BoardingPage4";
import LocationDetails from "@/pages/location/LocationDetails";
import AddPostPage from "@/pages/AddPost/AddPostPage";
import NormalPostForm from "@/pages/AddPost/NormalPostForm";

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
    element: <BoardingPage4 />
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
    path: "/add-post",
    children: [
      {
        path: "",
        element: <AddPostPage />,
      },
      {
        path: "normal-post",
        element: <NormalPostForm />,
      },
    ],
  },
];

export const route = createBrowserRouter(routes);