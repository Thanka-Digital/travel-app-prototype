import LocationExtraInfo from "@/pages/LocationPage/components/LocationExtraInfo";
import LocationHotels from "@/pages/LocationPage/components/LocationHotels";
import PostTabContent from "@/components/global/tabs/components/PostTabContent";
import { AudioWaveform, Bike, SunSnow, TrendingUp } from "lucide-react";

export const LocationInfo = [
  {
    image: "/SplashImg/s1.png",
    city: "Pokhara",
    visitorsCount: "100k+ visitors",
    placeName: "Fewa Tal",
    link: "/location-details",
  },
  {
    image: '/SplashImg/s2.png',
    city: 'Pokhara',
    visitorsCount: '100k+ visitors',
    placeName: 'Fewa Tal',
    link: '/location-details'
  },
  {
    image: '/SplashImg/s2.png',
    city: 'Pokhara',
    visitorsCount: '100k+ visitors',
    placeName: 'Fewa Tal',
    link: '/location-details'
  },
]

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
    component: LocationHotels,
  },
  {
    id: "info",
    label: "Extra Info",
    component: LocationExtraInfo,
  },
];
