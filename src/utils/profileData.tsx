import PostTabContent from "@/pages/ProfilePage/components/PostTabContent";
import ReelsTabContent from "@/pages/ProfilePage/components/ReelsTabContent";
import SavedTabContent from "@/pages/ProfilePage/components/SavedTabContent";

export const ProfileDetailsTabsData = [
  {
    id: "posts",
    label: "Posts",
    component: PostTabContent,
  },
  {
    id: "Reels",
    label: "Reels",
    component: ReelsTabContent,
  },
  {
    id: "saved",
    label: "Saved",
    component: SavedTabContent,
  },
];