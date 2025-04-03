// import { BaggageClaim, Mountain, Snowflake } from "lucide-react";

export const tripPlanData: Plan[] = [
  {
    id: 1,
    imageUrl: "/SplashImg/s1.png",
    status: "visited",
    tags: ["natures", "snowy"],
    prefData: {
      weather: ["Snowy"],
      place: ["Mountains"],
      date: "2025-01-03",
      locationId: 1,
      name: "Trip to Everest",
    },
  },

  {
    id: 2,
    imageUrl: "/SplashImg/s2.png",
    status: "cancelled",
    tags: ["natures", "beach"],
    prefData: {
      name: "Bali Trip",
      date: "2024-09-23",
      weather: ["Summer"],
      place: ["Beach"],
      locationId: 2,
    },
  },

  {
    id: 3,
    imageUrl: "/SplashImg/s3.png",
    status: "visited",
    tags: ["global", "LA"],
    prefData: {
      name: "LA downtown",
      date: "2024-05-01",
      weather: ["Summer"],
      place: ["Urban"],
      locationId: 3,
    },
  },

  {
    id: 4,
    imageUrl: "/SplashImg/s4.png",
    status: "visited",
    tags: ["natures", "lake"],
    prefData: {
      name: "Phewa Lake",
      date: "2024-02-13",
      weather: ["Summer"],
      place: ["Cultural"],
      locationId: 4,
    },
  },

  {
    id: 5,
    imageUrl: "/SplashImg/s5.png",
    status: "planning",
    tags: ["tower", "paris"],
    prefData: {
      name: "Paris Visit",
      date: "2025-05-08",
      weather: ["Summer"],
      place: ["Urban"],
      locationId: 5,
    },
  },
];
