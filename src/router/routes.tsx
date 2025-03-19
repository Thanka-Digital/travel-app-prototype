import { createBrowserRouter, type RouteObject } from "react-router-dom";
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
import ProfileDetailsPage from "@/pages/ProfilePage/ProfileDetailsPage";
import PostDetailsPage from "@/pages/post/PostDetailsPage";
import CreatePlansPage from "@/pages/PlansPage/CreatePlansPage";
import AllPlansPage from "@/pages/PlansPage/AllPlansPage";
import CreatePlanStep1 from "@/pages/PlansPage/steps/CreatePlanStep1";
import CreatePlanStep2 from "@/pages/PlansPage/steps/CreatePlanStep2";
import CreatePlanStep3 from "@/pages/PlansPage/steps/CreatePlanStep3";
import CreatePlanStep4 from "@/pages/PlansPage/steps/CreatePlanStep4";
import CreatePlanStep5 from "@/pages/PlansPage/steps/CreatePlanStep5";
import CreatePlanStep6 from "@/pages/PlansPage/steps/CreatePlanStep6";
import PlanPageDetails from "@/pages/PlansPage/PlanDetails";

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
    path: "/reels-page",
    element: <ReelsPage />
  },
  {
    path: "/user-profile",
    element: <ProfileDetailsPage />
  },
  {
    path: "/location-details/:id",
    element: <LocationDetailsPage />,
  },
  {
    path: "/post-details/:id",
    element: <PostDetailsPage />,
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
    path: "/trip-plan",
    children: [
      {
        path: "create",
        element: <CreatePlansPage />
      },
      {
        path: "all",
        element: <AllPlansPage />
      },
      {
        path: "details/:id",
        element: <PlanPageDetails />
      },
      {
        path: "create/step-1",
        element: <CreatePlanStep1 />
      },
      {
        path: "create/step-2",
        element: <CreatePlanStep2 />
      },
      {
        path: "create/step-3",
        element: <CreatePlanStep3 />
      },
      {
        path: "create/step-4",
        element: <CreatePlanStep4 />
      },
      {
        path: "create/step-5",
        element: <CreatePlanStep5 />
      },
      {
        path: "create/step-6",
        element: <CreatePlanStep6 />
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