import LocationExtraInfo from "@/pages/LocationPage/components/LocationExtraInfo";
import LocationHotels from "@/pages/LocationPage/components/LocationHotels";
import LocationPosts from "@/pages/LocationPage/components/LocationPosts";
import { AudioWaveform, Bike, SunSnow, TrendingUp } from "lucide-react";

export const locationInfo: LocationInfo[] = [
  {
    id: 1,
    name: "Pashupatinath Temple",
    city: "Kathmandu",
    visitorsCount: 1000000,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661949303004-bab6b7a82912?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hhbnRpJTIwc3R1cGF8ZW58MHx8MHx8fDA%3D",
    summary: "A sacred Hindu temple dedicated to Lord Shiva.",
    tags: ["temple", "heritage", "spiritual"],
    averageCost: 500,
    hotels: [101, 102, 103],
    extraInfo: {
      averageTemperature: "15°C",
      altitude: 1400,
      transportationModes: ["taxi", "bus", "walk"],
      activities: ["worship", "photography", "meditation"],
    },
    type: "urban",
  },
  {
    id: 2,
    name: "Boudhanath Stupa",
    city: "Kathmandu",
    visitorsCount: 800000,
    imageUrl: "https://example.com/boudhanath.jpg",
    summary: "One of the largest spherical stupas in Nepal.",
    tags: ["stupa", "buddhist", "heritage"],
    averageCost: 300,
    hotels: [104, 105, 106],
    extraInfo: {
      averageTemperature: "16°C",
      altitude: 1400,
      transportationModes: ["taxi", "bus", "walk"],
      activities: ["prayer", "meditation", "sightseeing"],
    },
    type: "urban",
  },
  {
    id: 3,
    name: "Everest Base Camp",
    city: "Solukhumbu",
    visitorsCount: 50000,
    imageUrl: "https://example.com/ebc.jpg",
    summary: "A famous trekking destination at the foot of Mount Everest.",
    tags: ["trekking", "mountains", "adventure"],
    averageCost: 30000,
    hotels: [107, 108, 109],
    extraInfo: {
      averageTemperature: "-5°C",
      altitude: 5364,
      transportationModes: ["plane", "helicopter", "trekking"],
      activities: ["hiking", "camping", "mountaineering"],
    },
    type: "mountain",
  },
  {
    id: 4,
    name: "Pokhara Lakeside",
    city: "Pokhara",
    visitorsCount: 1200000,
    imageUrl: "https://example.com/pokhara_lakeside.jpg",
    summary:
      "A scenic lakeside area with stunning mountain views and vibrant nightlife.",
    tags: ["lake", "nature", "relaxation"],
    averageCost: 2000,
    hotels: [110, 111, 112],
    extraInfo: {
      averageTemperature: "20°C",
      altitude: 822,
      transportationModes: ["taxi", "bus", "boat"],
      activities: ["boating", "cycling", "paragliding"],
    },
    type: "nature",
  },
  {
    id: 5,
    name: "Muktinath Temple",
    city: "Mustang",
    visitorsCount: 200000,
    imageUrl: "https://example.com/muktinath.jpg",
    summary:
      "A sacred temple for Hindus and Buddhists located in the Mustang region.",
    tags: ["temple", "spiritual", "mountain"],
    averageCost: 5000,
    hotels: [113, 114, 115],
    extraInfo: {
      averageTemperature: "10°C",
      altitude: 3710,
      transportationModes: ["jeep", "bus", "hiking"],
      activities: ["worship", "sightseeing", "trekking"],
    },
    type: "mountain",
  },
  {
    id: 6,
    name: "Rara Lake",
    city: "Mugu",
    visitorsCount: 100000,
    imageUrl: "https://example.com/rara_lake.jpg",
    summary:
      "Nepal’s largest and most pristine lake, surrounded by lush forests.",
    tags: ["lake", "nature", "serene"],
    averageCost: 7000,
    hotels: [116, 117, 118],
    extraInfo: {
      averageTemperature: "12°C",
      altitude: 2990,
      transportationModes: ["plane", "jeep", "hiking"],
      activities: ["boating", "trekking", "wildlife spotting"],
    },
    type: "nature",
  },
  {
    id: 7,
    name: "Chitwan National Park",
    city: "Chitwan",
    visitorsCount: 300000,
    imageUrl: "https://example.com/chitwan.jpg",
    summary: "A UNESCO-listed national park famous for rhinos and tigers.",
    tags: ["wildlife", "jungle", "safari"],
    averageCost: 3500,
    hotels: [119, 120, 121],
    extraInfo: {
      averageTemperature: "25°C",
      altitude: 150,
      transportationModes: ["jeep", "boat", "elephant ride"],
      activities: ["safari", "birdwatching", "canoeing"],
    },
    type: "nature",
  },
  {
    id: 8,
    name: "Tilicho Lake",
    city: "Manang",
    visitorsCount: 80000,
    imageUrl: "https://example.com/tilicho.jpg",
    summary: "One of the highest altitude lakes in the world.",
    tags: ["lake", "trekking", "mountain"],
    averageCost: 8000,
    hotels: [122, 123, 124],
    extraInfo: {
      averageTemperature: "5°C",
      altitude: 4919,
      transportationModes: ["trekking", "helicopter"],
      activities: ["trekking", "photography", "camping"],
    },
    type: "mountain",
  },
  {
    id: 9,
    name: "Lumbini",
    city: "Rupandehi",
    visitorsCount: 700000,
    imageUrl: "https://example.com/lumbini.jpg",
    summary: "The birthplace of Lord Buddha, a UNESCO World Heritage site.",
    tags: ["spiritual", "heritage", "historical"],
    averageCost: 1500,
    hotels: [125, 126, 127],
    extraInfo: {
      averageTemperature: "22°C",
      altitude: 150,
      transportationModes: ["bus", "taxi", "bicycle"],
      activities: ["meditation", "sightseeing", "prayer"],
    },
    type: "urban",
  },
  {
    id: 10,
    name: "Dhorpatan Hunting Reserve",
    city: "Baglung",
    visitorsCount: 25000,
    imageUrl: "https://example.com/dhorpatan.jpg",
    summary:
      "The only hunting reserve in Nepal, offering regulated hunting experiences.",
    tags: ["wildlife", "adventure", "nature"],
    averageCost: 10000,
    hotels: [128, 129, 130],
    extraInfo: {
      averageTemperature: "10°C",
      altitude: 2850,
      transportationModes: ["jeep", "trekking"],
      activities: ["hunting", "trekking", "camping"],
    },
    type: "adventure",
  },
];

export const hotelInfo: HotelInfo[] = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1599495111218-0f679723087b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVscyUyMGluJTIwbmVwYWx8ZW58MHx8MHx8fDA%3D",
    name: "Hotel Royal",
    perDayPrice: 440,
    summary:
      "This hotel offers luxurious rooms with stunning city views and exceptional service.",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1719855412960-3c83f413e3b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVscyUyMGluJTIwbmVwYWx8ZW58MHx8MHx8fDA%3D",
    name: "Bikash Hotel",
    perDayPrice: 900,
    summary:
      "A perfect blend of comfort and elegance, ideal for both business and leisure travelers.",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1669206766475-b60cb9680cf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVscyUyMGluJTIwbmVwYWwlMjB2aWxsYWdlfGVufDB8fDB8fHww",
    name: "Lumbini Guest House",
    perDayPrice: 690,
    summary:
      "Experience world-class amenities, including a rooftop pool, spa, and fine dining.",
  },
  {
    id: 4,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1697729729075-3e56242aef49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVscyUyMGluJTIwbmVwYWx8ZW58MHx8MHx8fDA%3D",
    name: "Fula Guest House",
    perDayPrice: 350,
    summary:
      "This boutique hotel boasts stylish interiors and personalized guest services.",
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1669206766475-b60cb9680cf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVscyUyMGluJTIwbmVwYWwlMjB2aWxsYWdlfGVufDB8fDB8fHww",
    name: "Kola Hotel",
    perDayPrice: 540,
    summary:
      "Nestled in a prime location, it offers easy access to popular attractions and vibrant nightlife.",
  },
  {
    id: 6,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1697729729075-3e56242aef49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVscyUyMGluJTIwbmVwYWx8ZW58MHx8MHx8fDA%3D",
    name: "Lakepari Guest House",
    perDayPrice: 1280,
    summary:
      "Relax in spacious rooms with modern decor and breathtaking ocean views.",
  },
  {
    id: 7,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661952578770-79010299a9f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWxzJTIwaW4lMjBuZXBhbCUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D",
    name: "Hotel Niwas",
    perDayPrice: 790,
    summary: "Renowned for its impeccable hospitality and serene ambiance.",
  },
  {
    id: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1719855412960-3c83f413e3b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVscyUyMGluJTIwbmVwYWx8ZW58MHx8MHx8fDA%3D",
    name: "Bandhu Hotel",
    perDayPrice: 905,
    summary:
      "Enjoy gourmet cuisine, state-of-the-art fitness facilities, and a peaceful spa retreat.",
  },
  {
    id: 9,
    imageUrl:
      "https://images.unsplash.com/photo-1669206766475-b60cb9680cf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVscyUyMGluJTIwbmVwYWwlMjB2aWxsYWdlfGVufDB8fDB8fHww",
    name: "Basanti Guest House",
    perDayPrice: 1000,
    summary:
      "A family-friendly hotel featuring kid-friendly activities and spacious suites.",
  },
  {
    id: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1599495111218-0f679723087b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVscyUyMGluJTIwbmVwYWx8ZW58MHx8MHx8fDA%3D",
    name: "Gurung Lodge",
    perDayPrice: 200,
    summary:
      "This eco-friendly hotel combines sustainability with luxury for a guilt-free stay.",
  },
  {
    id: 11,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661952578770-79010299a9f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWxzJTIwaW4lMjBuZXBhbCUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D",
    name: "Myagdi Niwas",
    perDayPrice: 750,
    summary:
      "An elegant retreat offering cozy rooms, artisanal breakfasts, and exceptional concierge service.",
  },
  {
    id: 12,
    imageUrl:
      "https://images.unsplash.com/photo-1669206766475-b60cb9680cf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVscyUyMGluJTIwbmVwYWwlMjB2aWxsYWdlfGVufDB8fDB8fHww",
    name: "Kori Lodge",
    perDayPrice: 1500,
    summary:
      "Featuring contemporary design, seamless technology, and a vibrant social atmosphere.",
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
