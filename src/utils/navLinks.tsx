import {
  MapPinPlus,
  NotebookPen,
  Telescope,
  UserRound,
  UserRoundSearch,
} from "lucide-react";

export const navLinks = [
  {
    icon: <Telescope />,
    path: "/explore-page",
  },
  {
    icon: <NotebookPen />,
    path: "/trip-plan/create",
  },
  {
    icon: <MapPinPlus />,
    path: "/add-post/normal-post",
  },
  {
    icon: <UserRoundSearch />,
    path: "/services/find-friends",
  },
  {
    icon: <UserRound />,
    path: "/user-profile/1",
  },
];
