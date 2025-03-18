import { MapPinPlus, NotebookPen, Play, Telescope, UserRound } from "lucide-react";

export const navLinks = [
  {
    icon: <Telescope />,
    path: "/explore-page/all"
  },
  {
    icon: <NotebookPen />,
    path: "/trip-plan/create"
  },
  {
    icon: <MapPinPlus />,
    path: "/add-post"
  },
  {
    icon: <Play />,
    path: "/reels-page"
  },
  {
    icon: <UserRound />,
    path: "/user-profile"
  },
]