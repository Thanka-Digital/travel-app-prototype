import LocationExtraInfo from "@/pages/LocationPage/components/LocationExtraInfo";
import LocationHotels from "@/pages/LocationPage/components/LocationHotels";
import LocationPosts from "@/pages/LocationPage/components/LocationPosts";
import { AudioWaveform, Bike, SunSnow, TrendingUp } from "lucide-react";

export const locationInfo = [
  {
    id: 1,
    image: 'https://plus.unsplash.com/premium_photo-1661949303004-bab6b7a82912?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hhbnRpJTIwc3R1cGF8ZW58MHx8MHx8fDA%3D',
    city: 'Pokhara',
    visitorsCount: '7k+ visitors',
    placeName: 'Shanti stupa',
    link: '/location-details',
    category: "hills",
    description: "Hills are naturally elevated landforms with gentle slopes, rising above the surrounding terrain."
  },
  {
    id: 2,
    image: 'https://www.nepaltourhiking.com/wp-content/uploads/2024/01/Kahun-Danda-Pokhara.jpg',
    city: 'Pokhara',
    visitorsCount: '6k+ visitors',
    placeName: 'Kahundada',
    link: '/location-details',
    category: "hills",
    description: "Hills are naturally elevated landforms with gentle slopes, rising above the surrounding terrain."
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1687495423260-5466c1c83c1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    city: 'Pokhara',
    visitorsCount: '3k+ visitors',
    placeName: 'Sarangkot',
    link: '/location-details',
    category: "hills",
    description: "Hills are naturally elevated landforms with gentle slopes, rising above the surrounding terrain."
  },
  {
    id: 4,
    image: 'https://plus.unsplash.com/premium_photo-1700558685152-81f821a40724?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9vbmhpbGx8ZW58MHx8MHx8fDA%3D',
    visitorsCount: '8k+ visitors',
    placeName: 'Poon hill',
    link: '/location-details',
    category: "mountains",
    description: "Towering peaks rise majestically, cloaked in mist and rugged beauty."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1693030817674-31c8d701f364?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    city: "Kaski",
    visitorsCount: "6k+ visitors",
    placeName: "Khumai Dada",
    link: "/location-details",
    category: "mountains",
    description: "Towering peaks rise majestically, cloaked in mist and rugged beauty."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1731692017808-9c58c66e3cd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29yaXxlbnwwfHwwfHx8MA%3D%3D",
    city: "Kaski",
    visitorsCount: "10k+ visitors",
    placeName: "Kori",
    link: "/location-details",
    category: "mountains",
    description: "Towering peaks rise majestically, cloaked in mist and rugged beauty."
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1626548799631-11f8ee9b216c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    city: "Kathmandu",
    visitorsCount: "27k+ visitors",
    placeName: "Basantapur",
    link: "/location-details",
    category: "urban",
    description: "Bustling streets pulse with life, surrounded by towering skyscrapers and neon lights."
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1722595631994-6de3b5318da1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxha2VzaWRlJTIwcG9raGFyYXxlbnwwfHwwfHx8MA%3D%3D',
    city: 'Pokhara',
    visitorsCount: '34k+ visitors',
    placeName: 'Fewa Tal',
    link: '/location-details',
    category: "urban",
    description: "Bustling streets pulse with life, surrounded by towering skyscrapers and neon lights."
  },
  {
    id: 9,
    image: "https://plus.unsplash.com/premium_photo-1664302740919-e6645ba8c053?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpdHdhbiUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D",
    city: "Chitwan",
    visitorsCount: "21k+ visitors",
    placeName: "Chitwan National Park",
    link: "/location-details",
    category: "urban",
    description: "Bustling streets pulse with life, surrounded by towering skyscrapers and neon lights."
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1523058941547-c2ffb39fe1df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXRsYW50aWMlMjBvY2VhbnxlbnwwfHwwfHx8MA%3D%3D',
    city: 'Atlanta',
    visitorsCount: '10k+ visitors',
    placeName: 'Atlantic Ocean',
    link: '/location-details',
    category: "ocean",
    description: "Endless waves shimmer under the sun, stretching into the serene horizon."
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1563377226776-1b0bd48458f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW50YXJ0aWMlMjBvY2VhbnxlbnwwfHwwfHx8MA%3D%3D",
    city: "Antartica",
    visitorsCount: "23k+ visitors",
    placeName: "Antartic Ocean",
    link: "/location-details",
    category: "ocean",
    description: "Endless waves shimmer under the sun, stretching into the serene horizon."
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1578325413871-62d979ef9629?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFjaWZpYyUyMG9jZWFufGVufDB8fDB8fHww",
    city: "Pacific",
    visitorsCount: "23k+ visitors",
    placeName: "Pacific Ocean",
    link: "/location-details",
    category: "ocean",
    description: "Endless waves shimmer under the sun, stretching into the serene horizon."
  },
]

export const hotelinfo = [
  {
    id: 1,
    image: "",
    hotelName: "",
    price: 4,
    description: "",
    tags: ["", ""],
  },
  {
    id: 2,
    image: "",
    hotelName: "",
    price: 4,
    description: "",
    tags: ["", ""],
  },
  {
    id: 3,
    image: "",
    hotelName: "",
    price: 4,
    description: "",
    tags: ["", ""],
  },
  {
    id: 4,
    image: "",
    hotelName: "",
    price: 4,
    description: "",
    tags: ["", ""],
  },
  {
    id: 5,
    image: "",
    hotelName: "",
    price: 4,
    description: "",
    tags: ["", ""],
  },
  {
    id: 6,
    image: "",
    hotelName: "",
    price: 4,
    description: "",
    tags: ["", ""],
  },
  {
    id: 7,
    image: "",
    hotelName: "",
    price: 4,
    description: "",
    tags: ["", ""],
  },
  {
    id: 8,
    image: "",
    hotelName: "",
    price: 4,
    description: "",
    tags: ["", ""],
  },
  {
    id: 9,
    image: "",
    hotelName: "",
    price: 4,
    description: "",
    tags: ["", ""],
  },
  {
    id: 10,
    image: "",
    hotelName: "",
    price: 4,
    description: "",
    tags: ["", ""],
  },
  {
    id: 11,
    image: "",
    hotelName: "",
    price: 4,
    description: "",
    tags: ["", ""],
  },
  {
    id: 12,
    image: "",
    hotelName: "",
    price: 4,
    description: "",
    tags: ["", ""],
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
        id: 1,
        label: "Bus",
      },
      {
        id: 2,
        label: "Taxi",
      },
      {
        id: 3,
        label: "Train",
      },
      {
        id: 4,
        label: "Airplane",
      },
    ],
  },
  {
    icon: <AudioWaveform size={28} />,
    label: "Activities avaiable to do",
    types: [
      {
        id: 1,
        label: "Boating",
      },
      {
        id: 2,
        label: "Sightseeing",
      },
      {
        id: 3,
        label: "Night Life",
      },
      {
        id: 4,
        label: "Cable car ride to sarankot",
      },
    ],
  },
];

export const locationDetailsTabsData = [
  {
    id: "posts",
    label: "Posts",
    component: LocationPosts,
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