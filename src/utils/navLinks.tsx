import {
  MapPinPlus,
  NotebookPen,
  Play,
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
    path: "/post-details",
  },
  {
    icon: <MapPinPlus />,
    path: "/trip-plan/add",
  },
  {
    icon: <UserRoundSearch />,
    path: "/services/find-friends",
  },
  {
    icon: <UserRound />,
    path: "/profile",
  },
];
