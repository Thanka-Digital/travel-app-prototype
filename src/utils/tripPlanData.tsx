import {
  BaggageClaim,
  Mountain,
  Snowflake,
  Sun,
  TicketsPlane,
  TreePalm,
} from "lucide-react";

export const tripPlanListData = [
  {
    id: "tpl1",
    image: "/trip-plan/tpimg1.jpg",
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
    image: "/trip-plan/tpimg2.jpg",
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
    image: "/trip-plan/tpimg3.jpg",
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
    image: "/trip-plan/tpimg4.jpg",
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
    image: "/trip-plan/tpimg5.jpg",
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
    image: "/trip-plan/tpimg1.jpg",
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
    image: "/trip-plan/tpimg2.jpg",
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
    id: "vtpl1",
    image: "/trip-plan/tpimg1.jpg",
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
  // {
  //   id: "vtpl2",
  //   image: "/trip-plan/tpimg2.jpg",
  //   visitPlaceName: "Bali Trip",
  //   visitPlaceLocation: "Indonesia",
  //   tripTimeStatus: "cancelled",
  //   numberOfVisitors: "123k",
  //   isTripSucess: false,
  //   chooseTripTypes: [
  //     {
  //       id: "ctt1",
  //       text: "Global",
  //       icon: <TicketsPlane />,
  //     },
  //     {
  //       id: "ctt2",
  //       text: "Beach",
  //       icon: <TreePalm />,
  //     },
  //     {
  //       id: "ctt3",
  //       text: "Sunny",
  //       icon: <Sun />,
  //     },
  //   ],
  // },
];
