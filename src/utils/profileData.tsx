import PostTabContent from "@/components/global/tabs/components/PostTabContent";
import FriendsTabContent from "@/components/global/tabs/components/taProfile/FriendsTabContent";

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

export const profileFriendsData = [
  {
    id: "fd1",
    name: "Janney Doe",
    image: "/profile/pp1.jfif",
  },
  {
    id: "fd2",
    name: "Rambo Boxer",
    image: "/profile/pp2.jfif",
  },
  {
    id: "fd3",
    name: "Peter Parker",
    image: "/profile/pp3.jfif",
  },
  {
    id: "fd4",
    name: "Wade Wilson",
    image: "/profile/pp4.jfif",
  },
  {
    id: "fd5",
    name: "Penny Wade",
    image: "/profile/pp5.jfif",
  },
  {
    id: "fd6",
    name: "DJ Night",
    image: "/profile/pp6.jfif",
  },
  {
    id: "fd7",
    name: "Bob Cut",
    image: "/profile/pp7.jfif",
  },
  {
    id: "fd8",
    name: "JMadam Curie",
    image: "/profile/pp10.jfif",
  },
  {
    id: "fd9",
    name: "Von Neuman",
    image: "/profile/pp8.jfif",
  },
  {
    id: "fd10",
    name: "Shelly Sea",
    image: "/profile/pp9.jfif",
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
    component: FriendsTabContent,
  },
  {
    id: "saved",
    label: "Saved",
    component: PostTabContent,
  },
];
