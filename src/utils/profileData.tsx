import PostTabContent from "@/components/global/tabs/components/PostTabContent";

export const profileFollowersData = [
  {
    id: "pfc1",
    images: [
      { id: "image1", image: "/SplashImg/s1.png" },
      { id: "image2", image: "/SplashImg/s2.png" },
      { id: "image3", image: "/SplashImg/s4.png" },
      { id: "image4", image: "/SplashImg/s3.png" },
    ],
    name: "234 Followers",
  },
];

export const profileTeamData = [
  {
    id: "ptc1",
    images: [
      { id: "image1", image: "/SplashImg/s1.png" },
      { id: "image3", image: "/SplashImg/s4.png" },
      { id: "image4", image: "/SplashImg/s2.png" },
    ],
    name: "8 teams",
  },
];

export const profileFollowingData = [
  {
    id: "pflw1",
    images: [
      { id: "image1", image: "/SplashImg/s1.png" },
      { id: "image3", image: "/SplashImg/s4.png" },
      { id: "image4", image: "/SplashImg/s2.png" },
      { id: "image5", image: "/SplashImg/s5.png" },
    ],
    name: "156 Following",
  },
];

export const ProfileDetailsTabsData = [
  {
    id: "posts",
    label: "Posts",
    component: PostTabContent,
  },
  {
    id: "friends",
    label: "Friends",
    component: PostTabContent,
  },
  {
    id: "saved",
    label: "Saved",
    component: PostTabContent,
  },
];