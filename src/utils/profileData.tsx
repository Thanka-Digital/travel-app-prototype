import FriendsTabContent from "@/pages/ProfilePage/components/FriendsTabContent";
import PostTabContent from "@/pages/ProfilePage/components/PostTabContent";
import SavedTabContent from "@/pages/ProfilePage/components/SavedTabContent";

export const ProfileDetailsTabsData = [
  {
    id: "posts",
    label: "Posts",
    component: PostTabContent,
  },
  {
    id: "friends",
    label: "Friends",
    component: FriendsTabContent,
  },
  {
    id: "saved",
    label: "Saved",
    component: SavedTabContent,
  },
];
