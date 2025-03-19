import { BaggageClaim, Mountain, Snowflake } from "lucide-react";

export const tripPlanData = [
  {
    id: 1,
    image: "/SplashImg/s1.png",
    name: "Trip to Everest",
    isTripSuccess: true,
    tripTimeStatus: "4 weeks ago",
    hashTags: [
      {
        id: 1,
        label: "#natures",
      },
      {
        id: 2,
        label: "#snowy",
      },
    ],
    tripTypes: [
      {
        id: 1,
        text: "Trekker",
        icon: <BaggageClaim />,
      },
      {
        id: 2,
        text: "Mountains",
        icon: <Mountain />,
      },
      {
        id: 3,
        text: "Snowy",
        icon: <Snowflake />,
      },
    ],
  },

  {
    id: 2,
    image: "/SplashImg/s2.png",
    name: "Bali Trip",
    tripTimeStatus: "cancelled",
    isTripSuccess: false,
    hashTags: [
      {
        id: 1,
        label: "#natures",
      },
      {
        id: 2,
        label: "#winter",
      },
    ],
    tripTypes: [
      {
        id: 1,
        text: "Trekker",
        icon: <BaggageClaim />,
      },
      {
        id: 2,
        text: "Mountains",
        icon: <Mountain />,
      },
      {
        id: 3,
        text: "Snowy",
        icon: <Snowflake />,
      },
    ],
  },

  {
    id: 3,
    image: "/SplashImg/s3.png",
    name: "LA Doentown",
    tripTimeStatus: "month ago",
    isTripSuccess: true,
    hashTags: [
      {
        id: 1,
        label: "#urban",
      },
      {
        id: 2,
        label: "#sunny",
      },
    ],
    tripTypes: [
      {
        id: 1,
        text: "Trekker",
        icon: <BaggageClaim />,
      },
      {
        id: 2,
        text: "Mountains",
        icon: <Mountain />,
      },
      {
        id: 3,
        text: "Snowy",
        icon: <Snowflake />,
      },
    ],
  },

  {
    id: 4,
    image: "/SplashImg/s4.png",
    name: "Phewa Lake",
    tripTimeStatus: "a year ago",
    isTripSuccess: true,
    hashTags: [
      {
        id: 1,
        label: "#natures",
      },
      {
        id: 2,
        label: "#sunny",
      },
    ],
    tripTypes: [
      {
        id: 1,
        text: "Trekker",
        icon: <BaggageClaim />,
      },
      {
        id: 2,
        text: "Mountains",
        icon: <Mountain />,
      },
      {
        id: 3,
        text: "Snowy",
        icon: <Snowflake />,
      },
    ],
  },

  {
    id: 5,
    image: "/SplashImg/s5.png",
    name: "Paris Visit",
    tripTimeStatus: "cancelled",
    isTripSuccess: false,
    hashTags: [
      {
        id: 1,
        label: "#urban",
      },
      {
        id: 2,
        label: "#winter",
      },
    ],
    tripTypes: [
      {
        id: 1,
        text: "Trekker",
        icon: <BaggageClaim />,
      },
      {
        id: 2,
        text: "Mountains",
        icon: <Mountain />,
      },
      {
        id: 3,
        text: "Snowy",
        icon: <Snowflake />,
      },
    ],
  },
];