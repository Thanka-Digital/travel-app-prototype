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
import TripPlanListPage from "@/pages/trip-plan/TripPlanListPage";
import AddTripPlanPage from "@/pages/trip-plan/AddTripPlanPage";
import ViewTripPlanDetailsPage from "@/pages/trip-plan/ViewTripPlanDetailsPage";
import TripPlanStep1 from "@/pages/trip-plan/steps/TripPlanStep1";
import TripPlanStep2 from "@/pages/trip-plan/steps/TripPlanStep2";
import TripPlanStep3 from "@/pages/trip-plan/steps/TripPlanStep3";
import TripPlanStep4 from "@/pages/trip-plan/steps/TripPlanStep4";
import TripPlanStep5 from "@/pages/trip-plan/steps/TripPlanStep5";
import TripPlanStep6 from "@/pages/trip-plan/steps/TripPlanStep6";
import ExplorePage from "@/pages/ExplorePage";

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
    path: "/explore",
    element: <ExplorePage />,
  },
  {
    path: "/profile",
    element: <ProfileLayout />,
  },
  {
    path: "/explore-page",
    element: <ExplorePage />,
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
  {
    path: "/trip-plan",
    children: [
      {
        path: "",
        element: <TripPlanListPage />,
      },
      {
        path: "add",
        element: <AddTripPlanPage />,
      },
      {
        path: "details",
        element: <ViewTripPlanDetailsPage />,
      },
      {
        path: "steps-1",
        element: <TripPlanStep1 />,
      },
      {
        path: "steps-2",
        element: <TripPlanStep2 />,
      },
      {
        path: "steps-3",
        element: <TripPlanStep3 />,
      },
      {
        path: "steps-4",
        element: <TripPlanStep4 />,
      },
      {
        path: "steps-5",
        element: <TripPlanStep5 />,
      },
      {
        path: "steps-6",
        element: <TripPlanStep6 />,
      },
    ],
  },
];

export const route = createBrowserRouter(routes);
