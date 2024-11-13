import ExtraInfoTabContent from "@/components/global/tabs/components/location-details/ExtraInfoTabContent";
import HotelTabContent from "@/components/global/tabs/components/location-details/HotelTabContent";
import PostTabContent from "@/components/global/tabs/components/PostTabContent";
import { AudioWaveform, Bike, SunSnow, TrendingUp } from "lucide-react";

export const LocationInfo = [
  {
    image: "/SplashImg/s1.png",
    city: "Pokhara",
    visitorsCount: "100k+ visitors",
    placeName: "Fewa Tal",
    link: "/",
  },
];

export const locationDetailsData = [
  {
    icon: <SunSnow size={28} />,
    label: "28 C, Rainy",
  },
  {
    icon: <TrendingUp size={28} />,
    label: "742m",
  },
  {
    icon: <Bike size={28} />,
    label: "All mode of transportation is avaiable",
    types: [
      {
        id: "tp1",
        label: "Bus",
      },
      {
        id: "tp2",
        label: "Taxi",
      },
      {
        id: "tp3",
        label: "Train",
      },
      {
        id: "tp4",
        label: "Airplane",
      },
    ],
  },
  {
    icon: <AudioWaveform size={28} />,
    label: "Activities avaiable to do",
    types: [
      {
        id: "ep1",
        label: "Boating",
      },
      {
        id: "ep2",
        label: "Sightseeing",
      },
      {
        id: "ep3",
        label: "Night Life",
      },
      {
        id: "ep4",
        label: "Cable car ride to sarankot",
      },
    ],
  },
];

export const locationDetailsTabsData = [
  {
    id: "posts",
    label: "Posts",
    component: PostTabContent,
  },
  {
    id: "hotels",
    label: "Hotels",
    component: HotelTabContent,
  },
  {
    id: "info",
    label: "Extra Info",
    component: ExtraInfoTabContent,
  },
];

export const LocationMiniCarddatas = [
  {
    id: "lmd1",
    name: "Pokhara Lake",
    address: "Pokhara",
    image: "/SplashImg/s3.png",
  },
  {
    id: "lmd1",
    name: "Rara Lake",
    address: "Mugu",
    image: "/SplashImg/s1.png",
  },
  {
    id: "lmd1",
    name: "Begnash Lake",
    address: "Pokhara",
    image: "/SplashImg/s4.png",
  },
  {
    id: "lmd1",
    name: "Machhapuchre",
    address: "Pokhara",
    image: "/SplashImg/s2.png",
  },
];
