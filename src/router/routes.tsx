import { createBrowserRouter, type RouteObject } from "react-router-dom";
import TestPage from "@/pages/TestPage";
import BoardingPage0 from "@/pages/Splash-Screen/BoardingPage0";
import BoardingPage1 from "@/pages/Splash-Screen/BoardingPage1";
import BoardingPage2 from "@/pages/Splash-Screen/BoardingPage2";
import BoardingPage3 from "@/pages/Splash-Screen/BoardingPage3";
import BoardingPage4 from "@/pages/Splash-Screen/BoardingPage4";
import AllExplorePage from "@/pages/ExplorePage/AllExplorePage";
import LocationDetailsPage from "@/pages/LocationPage/LocationDetailsPage";
import ReelsPage from "@/pages/ReelsPage/ReelsPage";
import AddPostPage from "@/pages/AddPost/AddPostPage";
import NormalPostForm from "@/pages/AddPost/NormalPostForm";
import ReelPostFrom from "@/pages/AddPost/ReelPostFrom";
import HillsExplorePage from "@/pages/ExplorePage/HillsExplorePage";
import UrbanExplorePage from "@/pages/ExplorePage/UrbanExplorePage";
import MountainsExplorePage from "@/pages/ExplorePage/MountainsExplorePage";
import OceanExplorePage from "@/pages/ExplorePage/OceanExplorePage";

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
    element: <AllExplorePage />
  },
  {
    path: "/reels-page",
    element: <ReelsPage />
  },
  {
    path: "/test",
    element: <TestPage />,
  },
  {
    path: "/location-details",
    element: <LocationDetailsPage />,
  },
  {
    path: "/explore-page",
    children: [
      {
        path: "all",
        element: <AllExplorePage />
      },
      {
        path: "hills",
        element: <HillsExplorePage />
      },
      {
        path: "urban",
        element: <UrbanExplorePage />
      },
      {
        path: "mountains",
        element: <MountainsExplorePage />
      },
      {
        path: "ocean",
        element: <OceanExplorePage />
      },
    ]
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
      {
        path: "reel-post",
        element: <ReelPostFrom />,
      },
    ],
  },
];

export const route = createBrowserRouter(routes);