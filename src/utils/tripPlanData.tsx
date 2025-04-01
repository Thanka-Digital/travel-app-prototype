// import { BaggageClaim, Mountain, Snowflake } from "lucide-react";

export const tripPlanData: Plan[] = [
  {
    id: 1,
    imageUrl: "/SplashImg/s1.png",
    name: "Trip to Everest",
    status: "visited",
    date: new Date("2025-01-03"),
    tags: ["natures", "snowy"],
    prefData: {
      type: ["Trekker"],
      weather: ["Snowy"],
      place: ["Mountains"],
    },
    locationId: 1,
  },

  {
    id: 2,
    imageUrl: "/SplashImg/s2.png",
    name: "Bali Trip",
    status: "cancelled",
    date: new Date("2024-09-23"),
    tags: ["natures", "beach"],
    prefData: {
      type: ["Travel"],
      weather: ["Summer"],
      place: ["Beach"],
    },
    locationId: 2,
  },

  {
    id: 3,
    imageUrl: "/SplashImg/s3.png",
    name: "LA downtown",
    status: "visited",
    date: new Date("2024-05-01"),
    tags: ["global", "LA"],
    prefData: {
      type: ["Global"],
      weather: ["Summer"],
      place: ["Urban"],
    },
    locationId: 3,
  },

  {
    id: 4,
    imageUrl: "/SplashImg/s4.png",
    name: "Phewa Lake",
    status: "visited",
    date: new Date("2024-02-13"),
    tags: ["natures", "lake"],
    prefData: {
      type: ["Nature"],
      weather: ["Summer"],
      place: ["Cultural"],
    },
    locationId: 4,
  },

  {
    id: 5,
    imageUrl: "/SplashImg/s5.png",
    name: "Paris Visit",
    status: "planning",
    date: new Date("2025-05-08"),
    tags: ["tower", "paris"],
    prefData: {
      type: ["Global"],
      weather: ["Summer"],
      place: ["Urban"],
    },
    locationId: 5,
  },
];
