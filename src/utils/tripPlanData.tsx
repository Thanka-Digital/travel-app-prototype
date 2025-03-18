import { BaggageClaim, Mountain, Snowflake } from "lucide-react";

export const tripPlanListData = [
  {
    id: "tpl1",
    image: "/SplashImg/s1.png",
    name: "Trip to Everest",
    isTripSuccess: true,
    tripTimeStatus: "4 weeks ago",
    hashTags: [
      {
        id: "ht1",
        label: "#natures",
      },
      {
        id: "ht2",
        label: "#snowy",
      },
    ],
  },
  {
    id: "tpl2",
    image: "/SplashImg/s2.png",
    name: "Bali Trip",
    tripTimeStatus: "cancelled",
    isTripSuccess: false,
    hashTags: [
      {
        id: "ht1",
        label: "#natures",
      },
      {
        id: "ht2",
        label: "#winter",
      },
    ],
  },
  {
    id: "tpl3",
    image: "/SplashImg/s3.png",
    name: "LA Doentown",
    tripTimeStatus: "month ago",
    isTripSuccess: true,
    hashTags: [
      {
        id: "ht1",
        label: "#urban",
      },
      {
        id: "ht2",
        label: "#sunny",
      },
    ],
  },
  {
    id: "tpl4",
    image: "/SplashImg/s4.png",
    name: "Phewa Lake",
    tripTimeStatus: "a year ago",
    isTripSuccess: true,
    hashTags: [
      {
        id: "ht1",
        label: "#natures",
      },
      {
        id: "ht2",
        label: "#sunny",
      },
    ],
  },
  {
    id: "tpl5",
    image: "/SplashImg/s5.png",
    name: "Paris Visit",
    tripTimeStatus: "cancelled",
    isTripSuccess: false,
    hashTags: [
      {
        id: "ht1",
        label: "#urban",
      },
      {
        id: "ht2",
        label: "#winter",
      },
    ],
  },
];

export const createTripPlanListData = [
  {
    id: "tpl1",
    image: "/SplashImg/s1.png",
    name: "Trip to Everest",
    isTripSuccess: true,
    tripTimeStatus: "4 weeks ago",
    hashTags: [
      {
        id: "ht1",
        label: "#natures",
      },
      {
        id: "ht2",
        label: "#snowy",
      },
    ],
  },
  {
    id: "tpl2",
    image: "/SplashImg/s2.png",
    name: "Bali Trip",
    tripTimeStatus: "cancelled",
    isTripSuccess: false,
    hashTags: [
      {
        id: "ht1",
        label: "#natures",
      },
      {
        id: "ht2",
        label: "#winter",
      },
    ],
  },
];

export const viewTripPlanDetailsDatas = [
  {
    id: 1,
    image: "/SplashImg/s5.png",
    visitPlaceName: "Trip to Everest",
    visitPlaceLocation: "Nepal",
    tripTimeStatus: "4 weeks ago",
    numberOfVisitors: "143k",
    isTripSucess: true,
    chooseTripTypes: [
      {
        id: "ctt1",
        text: "Trekker",
        icon: <BaggageClaim />,
      },
      {
        id: "ctt2",
        text: "Mountains",
        icon: <Mountain />,
      },
      {
        id: "ctt3",
        text: "Snowy",
        icon: <Snowflake />,
      },
    ],
  },
];