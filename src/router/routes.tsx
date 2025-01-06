import { createBrowserRouter, type RouteObject } from "react-router-dom";
import TestPage from "@/pages/TestPage";
import BoardingPage0 from "@/pages/Splash-Screen/BoardingPage0";
import BoardingPage1 from "@/pages/Splash-Screen/BoardingPage1";
import BoardingPage2 from "@/pages/Splash-Screen/BoardingPage2";
import BoardingPage3 from "@/pages/Splash-Screen/BoardingPage3";
import BoardingPage4 from "@/pages/Splash-Screen/BoardingPage4";
import LocationDetails from "@/pages/location/LocationDetails";
import PostDetails from "@/pages/post/PostDetails";
import ProfileLayout from "@/layout/profile/ProfileLayout";
import FriendSearchPage from "@/pages/find-friends/FriendSearchPage";
import FriendsNearYou from "@/pages/find-friends/FriendsNearYou";
import FriendsWithSimilarInterests from "@/pages/find-friends/FriendsWithSimilarInterests";

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
    path: "/profile",
    element: <ProfileLayout />,
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
    path: "/post-details",
    element: <PostDetails />,
  },
  {
    path: "/services",
    children: [
      {
        path: "find-friends",
        element: <FriendSearchPage />,
      },
      {
        path: "friends-near-you",
        element: <FriendsNearYou />,
      },
      {
        path: "friends-with-similar-interests",
        element: <FriendsWithSimilarInterests />,
      },
    ],
  },
];

export const route = createBrowserRouter(routes);
