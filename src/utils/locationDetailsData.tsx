import LocationExtraInfo from "@/pages/LocationPage/components/LocationExtraInfo";
import LocationHotels from "@/pages/LocationPage/components/LocationHotels";
import LocationPosts from "@/pages/LocationPage/components/LocationPosts";
import { AudioWaveform, Bike, SunSnow, Thermometer, TrendingUp } from "lucide-react";

export const locationInfo: LocationInfo[] = [
  {
    id: 1,
    name: "Kathmandu Valley",
    city: "Kathmandu",
    visitorsCount: 1000000,
    imageUrl:
      "https://nepalalibabatreks.com/wp-content/uploads/2023/01/Kathmandu-Valley-Tour.jpg",
    summary: "Cultural and historical heart of Nepal.",
    tags: ["culture", "heritage", "temples"],
    averageCost: 2000,
    hotels: [1, 7, 9, 11, 12, 13],
    extraInfo: {
      averageTemperature: "18°C",
      altitude: 1400,
      transportationModes: ["bus", "plane", "car"],
      activities: ["sightseeing", "shopping", "temple visits"],
    },
    type: ["Urban", "Cultural"],
  },
  {
    id: 2,
    name: "Pokhara",
    city: "Pokhara",
    visitorsCount: 800000,
    imageUrl:
      "https://th.bing.com/th/id/OSK.HEROvG3dJIhFfuhe91A8G9IYu_jSJk8ZfmTI3WrcmLXNAho?rs=1&pid=ImgDetMain",
    summary: "A paradise for nature lovers and adventure seekers.",
    tags: ["lakes", "mountains", "adventure"],
    averageCost: 1500,
    hotels: [2, 5, 8, 17, 18],
    extraInfo: {
      averageTemperature: "20°C",
      altitude: 822,
      transportationModes: ["bus", "plane"],
      activities: ["boating", "paragliding", "trekking"],
    },
    type: ["Urban", "Nature"],
  },
  {
    id: 3,
    name: "Chitwan National Park",
    city: "Chitwan",
    visitorsCount: 500000,
    imageUrl:
      "https://th.bing.com/th/id/OIP.c3Q0ajn4iA9Ccgcq8t1W9AHaEK?rs=1&pid=ImgDetMain",
    summary: "A world-famous wildlife reserve.",
    tags: ["wildlife", "safari", "nature"],
    averageCost: 1800,
    hotels: [3, 4, 10],
    extraInfo: {
      averageTemperature: "25°C",
      altitude: 150,
      transportationModes: ["bus", "car"],
      activities: ["jungle safari", "bird watching", "canoeing"],
    },
    type: ["Nature"],
  },
  {
    id: 4,
    name: "Lumbini",
    city: "Lumbini",
    visitorsCount: 300000,
    imageUrl:
      "https://th.bing.com/th/id/OIP.j6mwNlTAKp032s851CvoOAHaFF?rs=1&pid=ImgDetMain",
    summary: "The birthplace of Lord Buddha.",
    tags: ["pilgrimage", "history", "culture"],
    averageCost: 1600,
    hotels: [20],
    extraInfo: {
      averageTemperature: "27°C",
      altitude: 150,
      transportationModes: ["bus", "car"],
      activities: ["monastery visits", "meditation", "sightseeing"],
    },
    type: ["Cultural"],
  },
  {
    id: 5,
    name: "Nagarkot",
    city: "Nagarkot",
    visitorsCount: 200000,
    imageUrl:
      "https://media.sublimetrails.com/uploads/img/untitled-design--40-.webp",
    summary: "Famous for sunrise views of the Himalayas.",
    tags: ["mountains", "scenic", "relaxation"],
    averageCost: 1600,
    hotels: [16],
    extraInfo: {
      averageTemperature: "16°C",
      altitude: 2175,
      transportationModes: ["bus", "car"],
      activities: ["hiking", "sunrise viewing", "photography"],
    },
    type: ["Nature"],
  },
  {
    id: 6,
    name: "Rara Lake",
    city: "Mugu",
    visitorsCount: 100000,
    imageUrl:
      "https://th.bing.com/th/id/OSK.HEROtIcbgLsQVU8eV7WSlU2_AnGkUkWQeiva0gfR7UkdXXw?rs=1&pid=ImgDetMain",
    summary: "The largest lake in Nepal with crystal-clear waters.",
    tags: ["lake", "remote", "trekking"],
    averageCost: 2500,
    hotels: [],
    extraInfo: {
      averageTemperature: "10°C",
      altitude: 2990,
      transportationModes: ["plane", "trekking"],
      activities: ["boating", "hiking", "wildlife watching"],
    },
    type: ["Nature"],
  },
  {
    id: 7,
    name: "Bandipur",
    city: "Tanahun",
    visitorsCount: 200000,
    imageUrl:
      "https://th.bing.com/th/id/R.4ad4fbffa0158f718a68baff1a9d7c2d?rik=2wNTdjU9tuNBAQ&pid=ImgRaw&r=0",
    summary: "A preserved cultural village with stunning mountain views.",
    tags: ["culture", "mountains", "heritage"],
    averageCost: 1800,
    hotels: [],
    extraInfo: {
      averageTemperature: "18°C",
      altitude: 1030,
      transportationModes: ["bus", "car"],
      activities: ["hiking", "sightseeing", "cultural exploration"],
    },
    type: ["Cultural"],
  },
  {
    id: 8,
    name: "Gosaikunda",
    city: "Rasuwa",
    visitorsCount: 150000,
    imageUrl:
      "https://th.bing.com/th/id/OIP.APDiYNFPdI-kR3vt63uZ_QHaES?rs=1&pid=ImgDetMain",
    summary: "A sacred alpine lake popular among trekkers and pilgrims.",
    tags: ["pilgrimage", "trekking", "lake"],
    averageCost: 3000,
    hotels: [],
    extraInfo: {
      averageTemperature: "5°C",
      altitude: 4380,
      transportationModes: ["trekking"],
      activities: ["trekking", "camping", "spiritual journey"],
    },
    type: ["Nature", "Cultural"],
  },
  {
    id: 9,
    name: "Ilam",
    city: "Ilam",
    visitorsCount: 250000,
    imageUrl:
      "https://th.bing.com/th/id/R.36937c6f21d08072e82109a1e1517fff?rik=DQUTsXXT3J61ag&pid=ImgRaw&r=0&sres=1&sresct=1",
    summary: "Nepal’s tea capital with rolling hills of tea gardens.",
    tags: ["tea gardens", "hills", "nature"],
    averageCost: 1500,
    hotels: [],
    extraInfo: {
      averageTemperature: "15°C",
      altitude: 1200,
      transportationModes: ["bus", "car"],
      activities: ["tea tasting", "hiking", "sightseeing"],
    },
    type: ["Nature"],
  },
  // {
  //   id: 1,
  //   name: "Pashupatinath Temple",
  //   city: "Kathmandu",
  //   visitorsCount: 1000000,
  //   imageUrl:
  //     "https://plus.unsplash.com/premium_photo-1661949303004-bab6b7a82912?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hhbnRpJTIwc3R1cGF8ZW58MHx8MHx8fDA%3D",
  //   summary: "A sacred Hindu temple dedicated to Lord Shiva.",
  //   tags: ["temple", "heritage", "spiritual"],
  //   averageCost: 500,
  //   hotels: [101, 102, 103],
  //   extraInfo: {
  //     averageTemperature: "15°C",
  //     altitude: 1400,
  //     transportationModes: ["taxi", "bus", "walk"],
  //     activities: ["worship", "photography", "meditation"],
  //   },
  //   type: "urban",
  // },
  // {
  //   id: 2,
  //   name: "Boudhanath Stupa",
  //   city: "Kathmandu",
  //   visitorsCount: 800000,
  //   imageUrl: "https://example.com/boudhanath.jpg",
  //   summary: "One of the largest spherical stupas in Nepal.",
  //   tags: ["stupa", "buddhist", "heritage"],
  //   averageCost: 300,
  //   hotels: [104, 105, 106],
  //   extraInfo: {
  //     averageTemperature: "16°C",
  //     altitude: 1400,
  //     transportationModes: ["taxi", "bus", "walk"],
  //     activities: ["prayer", "meditation", "sightseeing"],
  //   },
  //   type: "urban",
  // },
  // {
  //   id: 3,
  //   name: "Everest Base Camp",
  //   city: "Solukhumbu",
  //   visitorsCount: 50000,
  //   imageUrl: "https://example.com/ebc.jpg",
  //   summary: "A famous trekking destination at the foot of Mount Everest.",
  //   tags: ["trekking", "mountains", "adventure"],
  //   averageCost: 30000,
  //   hotels: [107, 108, 109],
  //   extraInfo: {
  //     averageTemperature: "-5°C",
  //     altitude: 5364,
  //     transportationModes: ["plane", "helicopter", "trekking"],
  //     activities: ["hiking", "camping", "mountaineering"],
  //   },
  //   type: "mountain",
  // },
  // {
  //   id: 4,
  //   name: "Pokhara Lakeside",
  //   city: "Pokhara",
  //   visitorsCount: 1200000,
  //   imageUrl: "https://example.com/pokhara_lakeside.jpg",
  //   summary:
  //     "A scenic lakeside area with stunning mountain views and vibrant nightlife.",
  //   tags: ["lake", "nature", "relaxation"],
  //   averageCost: 2000,
  //   hotels: [110, 111, 112],
  //   extraInfo: {
  //     averageTemperature: "20°C",
  //     altitude: 822,
  //     transportationModes: ["taxi", "bus", "boat"],
  //     activities: ["boating", "cycling", "paragliding"],
  //   },
  //   type: "nature",
  // },
  // {
  //   id: 5,
  //   name: "Muktinath Temple",
  //   city: "Mustang",
  //   visitorsCount: 200000,
  //   imageUrl: "https://example.com/muktinath.jpg",
  //   summary:
  //     "A sacred temple for Hindus and Buddhists located in the Mustang region.",
  //   tags: ["temple", "spiritual", "mountain"],
  //   averageCost: 5000,
  //   hotels: [113, 114, 115],
  //   extraInfo: {
  //     averageTemperature: "10°C",
  //     altitude: 3710,
  //     transportationModes: ["jeep", "bus", "hiking"],
  //     activities: ["worship", "sightseeing", "trekking"],
  //   },
  //   type: "mountain",
  // },
  // {
  //   id: 6,
  //   name: "Rara Lake",
  //   city: "Mugu",
  //   visitorsCount: 100000,
  //   imageUrl: "https://example.com/rara_lake.jpg",
  //   summary:
  //     "Nepal’s largest and most pristine lake, surrounded by lush forests.",
  //   tags: ["lake", "nature", "serene"],
  //   averageCost: 7000,
  //   hotels: [116, 117, 118],
  //   extraInfo: {
  //     averageTemperature: "12°C",
  //     altitude: 2990,
  //     transportationModes: ["plane", "jeep", "hiking"],
  //     activities: ["boating", "trekking", "wildlife spotting"],
  //   },
  //   type: "nature",
  // },
  // {
  //   id: 7,
  //   name: "Chitwan National Park",
  //   city: "Chitwan",
  //   visitorsCount: 300000,
  //   imageUrl: "https://example.com/chitwan.jpg",
  //   summary: "A UNESCO-listed national park famous for rhinos and tigers.",
  //   tags: ["wildlife", "jungle", "safari"],
  //   averageCost: 3500,
  //   hotels: [119, 120, 121],
  //   extraInfo: {
  //     averageTemperature: "25°C",
  //     altitude: 150,
  //     transportationModes: ["jeep", "boat", "elephant ride"],
  //     activities: ["safari", "birdwatching", "canoeing"],
  //   },
  //   type: "nature",
  // },
  // {
  //   id: 8,
  //   name: "Tilicho Lake",
  //   city: "Manang",
  //   visitorsCount: 80000,
  //   imageUrl: "https://example.com/tilicho.jpg",
  //   summary: "One of the highest altitude lakes in the world.",
  //   tags: ["lake", "trekking", "mountain"],
  //   averageCost: 8000,
  //   hotels: [122, 123, 124],
  //   extraInfo: {
  //     averageTemperature: "5°C",
  //     altitude: 4919,
  //     transportationModes: ["trekking", "helicopter"],
  //     activities: ["trekking", "photography", "camping"],
  //   },
  //   type: "mountain",
  // },
  // {
  //   id: 9,
  //   name: "Lumbini",
  //   city: "Rupandehi",
  //   visitorsCount: 700000,
  //   imageUrl: "https://example.com/lumbini.jpg",
  //   summary: "The birthplace of Lord Buddha, a UNESCO World Heritage site.",
  //   tags: ["spiritual", "heritage", "historical"],
  //   averageCost: 1500,
  //   hotels: [125, 126, 127],
  //   extraInfo: {
  //     averageTemperature: "22°C",
  //     altitude: 150,
  //     transportationModes: ["bus", "taxi", "bicycle"],
  //     activities: ["meditation", "sightseeing", "prayer"],
  //   },
  //   type: "urban",
  // },
  // {
  //   id: 10,
  //   name: "Dhorpatan Hunting Reserve",
  //   city: "Baglung",
  //   visitorsCount: 25000,
  //   imageUrl: "https://example.com/dhorpatan.jpg",
  //   summary:
  //     "The only hunting reserve in Nepal, offering regulated hunting experiences.",
  //   tags: ["wildlife", "adventure", "nature"],
  //   averageCost: 10000,
  //   hotels: [128, 129, 130],
  //   extraInfo: {
  //     averageTemperature: "10°C",
  //     altitude: 2850,
  //     transportationModes: ["jeep", "trekking"],
  //     activities: ["hunting", "trekking", "camping"],
  //   },
  //   type: "adventure",
  // },
  // {
  //   id: 11,
  //   name: "Santorini",
  //   city: "Santorini",
  //   visitorsCount: 1200000,
  //   imageUrl: "https://example.com/santorini.jpg",
  //   summary:
  //     "A picturesque island in Greece known for its whitewashed houses, blue-domed churches, and stunning sunsets.",
  //   tags: ["island", "beach", "romantic", "historical"],
  //   averageCost: 3000,
  //   hotels: [1, 2, 6],
  //   extraInfo: {
  //     averageTemperature: "25°C",
  //     altitude: 200,
  //     transportationModes: ["ferry", "plane"],
  //     activities: ["sightseeing", "swimming", "sunset views", "vineyard tours"],
  //   },
  //   type: "Island Destination",
  // },
  // {
  //   id: 12,
  //   name: "Banff National Park",
  //   city: "Banff",
  //   visitorsCount: 5000000,
  //   imageUrl: "https://example.com/banff.jpg",
  //   summary:
  //     "A stunning national park in Canada known for its breathtaking mountain landscapes and outdoor adventures.",
  //   tags: ["mountains", "hiking", "wildlife"],
  //   averageCost: 2500,
  //   hotels: [3, 10],
  //   extraInfo: {
  //     averageTemperature: "10°C",
  //     altitude: 1383,
  //     transportationModes: ["car", "bus"],
  //     activities: ["hiking", "skiing", "wildlife spotting"],
  //   },
  //   type: "Nature & Adventure",
  // },
  // {
  //   id: 13,
  //   name: "Paris",
  //   city: "Paris",
  //   visitorsCount: 17000000,
  //   imageUrl: "https://example.com/paris.jpg",
  //   summary:
  //     "The romantic capital of France, famous for the Eiffel Tower, world-class museums, and exquisite cuisine.",
  //   tags: ["city", "romantic", "culture"],
  //   averageCost: 4000,
  //   hotels: [1, 4, 8],
  //   extraInfo: {
  //     averageTemperature: "15°C",
  //     altitude: 35,
  //     transportationModes: ["metro", "bus", "bicycle"],
  //     activities: ["museum visits", "fine dining", "shopping"],
  //   },
  //   type: "Urban Destination",
  // },
  // {
  //   id: 14,
  //   name: "Kyoto",
  //   city: "Kyoto",
  //   visitorsCount: 10000000,
  //   imageUrl: "https://example.com/kyoto.jpg",
  //   summary:
  //     "A cultural gem in Japan known for its ancient temples, cherry blossoms, and traditional tea houses.",
  //   tags: ["culture", "historical", "nature"],
  //   averageCost: 3500,
  //   hotels: [5, 7],
  //   extraInfo: {
  //     averageTemperature: "18°C",
  //     altitude: 50,
  //     transportationModes: ["train", "bus", "bicycle"],
  //     activities: ["temple visits", "tea ceremonies", "hiking"],
  //   },
  //   type: "Cultural & Historical",
  // },
  // {
  //   id: 15,
  //   name: "Dubai",
  //   city: "Dubai",
  //   visitorsCount: 16000000,
  //   imageUrl: "https://example.com/dubai.jpg",
  //   summary:
  //     "A futuristic city known for its skyscrapers, luxury shopping, and desert adventures.",
  //   tags: ["luxury", "desert", "modern"],
  //   averageCost: 5000,
  //   hotels: [1, 4, 8],
  //   extraInfo: {
  //     averageTemperature: "30°C",
  //     altitude: 5,
  //     transportationModes: ["metro", "taxi", "bus"],
  //     activities: ["desert safari", "shopping", "skydiving"],
  //   },
  //   type: "Luxury & Modern",
  // },
  // {
  //   id: 16,
  //   name: "Bali",
  //   city: "Denpasar",
  //   visitorsCount: 7000000,
  //   imageUrl: "https://example.com/bali.jpg",
  //   summary:
  //     "A tropical paradise in Indonesia known for its beaches, temples, and vibrant nightlife.",
  //   tags: ["beach", "tropical", "adventure"],
  //   averageCost: 2500,
  //   hotels: [2, 6],
  //   extraInfo: {
  //     averageTemperature: "28°C",
  //     altitude: 20,
  //     transportationModes: ["scooter", "taxi", "ferry"],
  //     activities: ["surfing", "yoga retreats", "scuba diving"],
  //   },
  //   type: "Tropical Destination",
  // },
  // {
  //   id: 17,
  //   name: "Machu Picchu",
  //   city: "Cusco",
  //   visitorsCount: 1400000,
  //   imageUrl: "https://example.com/machu_picchu.jpg",
  //   summary:
  //     "A historic Incan city in Peru, offering breathtaking views and ancient ruins.",
  //   tags: ["historical", "hiking", "adventure"],
  //   averageCost: 2800,
  //   hotels: [3, 9],
  //   extraInfo: {
  //     averageTemperature: "16°C",
  //     altitude: 2430,
  //     transportationModes: ["train", "hiking"],
  //     activities: ["trekking", "photography", "historical tours"],
  //   },
  //   type: "Historical & Adventure",
  // },
];

export const hotelInfo: HotelInfo[] = [
  {
    id: 1,
    name: "Hotel Yak & Yeti",
    imageUrl: "https://www.yakandyeti.com/images/home/slide4.jpg",
    summary:
      "A luxury 5-star hotel in Kathmandu with a rich cultural heritage.",
    perDayPrice: 15000,
  },
  {
    id: 2,
    name: "Temple Tree Resort & Spa",
    imageUrl:
      "https://tripcompanion.com/wp-content/uploads/2019/01/38393395-1024x662.jpg",
    summary: "A boutique resort in Pokhara with breathtaking mountain views.",
    perDayPrice: 12000,
  },
  {
    id: 3,
    name: "Meghauli Serai, Taj Safari",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/1c/e0/7a/meghauli-serai-a-taj.jpg?w=1400&h=-1&s=1",
    summary: "A luxury safari lodge near Chitwan National Park.",
    perDayPrice: 20000,
  },
  {
    id: 4,
    name: "Barahi Jungle Lodge",
    imageUrl:
      "https://pix10.agoda.net/hotelImages/547/547947/547947_17052115060053125283.jpg?s=1024x768",
    summary: "An eco-friendly jungle retreat in Chitwan.",
    perDayPrice: 18000,
  },
  {
    id: 5,
    name: "The Pavilions Himalayas",
    imageUrl:
      "https://www.bhutan-rundreisen.com/media/Nepal/Hotels/The-Pavilions_Himalayas-lake-views/nepal-reise-the-pavilions-himalayas-lake-views-pokhara-7.jpg",
    summary: "A sustainable luxury resort in Pokhara.",
    perDayPrice: 16000,
  },
  {
    id: 6,
    name: "Gokarna Forest Resort",
    imageUrl:
      "https://th.bing.com/th/id/OIP.78n_71N75FMcmO4n4mivvwHaE8?rs=1&pid=ImgDetMain",
    summary: "A tranquil getaway in the protected Gokarna forest.",
    perDayPrice: 14000,
  },
  {
    id: 7,
    name: "Dwarika's Hotel",
    imageUrl:
      "https://th.bing.com/th/id/OIP.p9zB1ta01D15e4fqvJpXVAHaDo?rs=1&pid=ImgDetMain",
    summary: "A heritage hotel showcasing traditional Nepali architecture.",
    perDayPrice: 22000,
  },
  {
    id: 8,
    name: "Tiger Mountain Pokhara Lodge",
    imageUrl:
      "https://th.bing.com/th/id/OIP.FXeazsZDPYviKMTQ1getqgHaD2?rs=1&pid=ImgDetMain",
    summary: "A peaceful retreat with stunning views of the Himalayas.",
    perDayPrice: 17000,
  },
  {
    id: 9,
    name: "Hyatt Regency Kathmandu",
    imageUrl:
      "https://th.bing.com/th/id/OIP.qdVILwKpT7W3KDIEZx8CQwHaEm?w=1000&h=621&rs=1&pid=ImgDetMain",
    summary: "A luxury hotel near Boudhanath Stupa.",
    perDayPrice: 15500,
  },
  {
    id: 10,
    name: "Kasara Resort",
    imageUrl:
      "https://th.bing.com/th/id/OIP.Glu3jr08vcQND1vQf8aJYwHaEK?rs=1&pid=ImgDetMain",
    summary: "A modern luxury resort near Chitwan National Park.",
    perDayPrice: 19000,
  },
  {
    id: 11,
    name: "Aloft Kathmandu",
    imageUrl:
      "https://th.bing.com/th/id/R.4fb912bf17a0c9cfa9189762fa52d099?rik=bxZWognPf26g%2bA&pid=ImgRaw&r=0",
    summary: "A stylish business hotel in the heart of Kathmandu.",
    perDayPrice: 13000,
  },
  {
    id: 12,
    name: "Hotel Shambala",
    imageUrl:
      "https://th.bing.com/th/id/OIP.6x9WXarxW_6qSelpQAAdjgHaEu?rs=1&pid=ImgDetMain",
    summary: "A Tibetan-themed boutique hotel with panoramic views.",
    perDayPrice: 11000,
  },
  {
    id: 13,
    name: "Hotel Annapurna",
    imageUrl:
      "https://pix10.agoda.net/hotelImages/286/286522/286522_13121915450017936191.jpg?s=1024x768",
    summary: "A renowned 5-star hotel in Kathmandu.",
    perDayPrice: 12500,
  },
  {
    id: 14,
    name: "Baber Mahal Vilas",
    imageUrl:
      "https://res-1.cloudinary.com/enchanting/et-web/2018/04/Enchanting-Travels-Nepal-Tours-Kathmandu-Hotels-Baber-Mahal-Vilas-roof.jpg",
    summary: "A boutique luxury hotel with neoclassical design.",
    perDayPrice: 13500,
  },
  {
    id: 15,
    name: "Fairfield by Marriott Kathmandu",
    imageUrl:
      "https://i1.wp.com/lexlimbu.com/wp-content/uploads/Hotel-.jpg?fit=1280%2C864",
    summary: "A comfortable and modern hotel in central Kathmandu.",
    perDayPrice: 14000,
  },
  {
    id: 16,
    name: "Club Himalaya Nagarkot",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/78/cf/ed/club-himalaya-nagarkot.jpg?w=700&h=-1&s=1",
    summary: "A mountain resort offering stunning sunrise views.",
    perDayPrice: 15000,
  },
  {
    id: 17,
    name: "Himalayan Front Hotel",
    imageUrl:
      "https://pix10.agoda.net/hotelImages/115/1157826/1157826_17091218140056257227.jpg?s=1024x768",
    summary: "A Pokhara hotel with magnificent Annapurna views.",
    perDayPrice: 14500,
  },
  {
    id: 18,
    name: "Sarangkot Mountain Lodge",
    imageUrl:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/367370568.jpg?k=1da374d32ecd5f251c324c883d8632547363960b4607a19cb9e125e74301ab5d&o=&hp=1",
    summary: "A hilltop retreat in Pokhara with unmatched scenery.",
    perDayPrice: 16000,
  },
  {
    id: 19,
    name: "Everest View Hotel",
    imageUrl:
      "https://www.uniqhotels.com/media/hotels/fe/4._hev_drone.jpg.730x546_q85_box-0%2C0%2C2000%2C1498_crop_detail.jpg",
    summary: "The highest hotel in the world with Everest views.",
    perDayPrice: 25000,
  },
  {
    id: 20,
    name: "Hotel Buddha Land",
    imageUrl:
      "https://th.bing.com/th/id/OIP.gEkPrsmS9zuHVwHMmh2NnwHaE8?rs=1&pid=ImgDetMain",
    summary: "A budget-friendly hotel in Kathmandu.",
    perDayPrice: 8000,
  },
  // {
  //   id: 101,
  //   name: "Hotel Yak & Yeti",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1599495111218-0f679723087b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVscyUyMGluJTIwbmVwYWx8ZW58MHx8MHx8fDA%3D",
  //   summary: "A luxury five-star hotel in the heart of Kathmandu.",
  //   perDayPrice: 15000,
  // },
  // {
  //   id: 102,
  //   name: "Temple Tree Resort & Spa",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1719855412960-3c83f413e3b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVscyUyMGluJTIwbmVwYWx8ZW58MHx8MHx8fDA%3D",
  //   summary: "A serene resort near Phewa Lake in Pokhara.",
  //   perDayPrice: 12000,
  // },
  // {
  //   id: 103,
  //   name: "Everest View Hotel",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1669206766475-b60cb9680cf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVscyUyMGluJTIwbmVwYWwlMjB2aWxsYWdlfGVufDB8fDB8fHww",
  //   summary: "A high-altitude hotel with stunning Everest views.",
  //   perDayPrice: 25000,
  // },
  // {
  //   id: 104,
  //   name: "Waterfront Resort",
  //   imageUrl:
  //     "https://plus.unsplash.com/premium_photo-1697729729075-3e56242aef49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVscyUyMGluJTIwbmVwYWx8ZW58MHx8MHx8fDA%3D",
  //   summary: "A lakeside retreat offering picturesque views of Phewa Lake.",
  //   perDayPrice: 10000,
  // },
  // {
  //   id: 105,
  //   name: "Muktinath Inn",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1669206766475-b60cb9680cf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVscyUyMGluJTIwbmVwYWwlMjB2aWxsYWdlfGVufDB8fDB8fHww",
  //   summary: "A cozy inn near the sacred Muktinath Temple.",
  //   perDayPrice: 8000,
  // },
  // {
  //   id: 106,
  //   name: "Rara Paradise Lodge",
  //   imageUrl:
  //     "https://plus.unsplash.com/premium_photo-1697729729075-3e56242aef49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVscyUyMGluJTIwbmVwYWx8ZW58MHx8MHx8fDA%3D",
  //   summary: "A peaceful lodge near Rara Lake with stunning scenery.",
  //   perDayPrice: 7000,
  // },
  // {
  //   id: 107,
  //   name: "Lumbini Heritage Hotel",
  //   imageUrl:
  //     "https://plus.unsplash.com/premium_photo-1661952578770-79010299a9f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWxzJTIwaW4lMjBuZXBhbCUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D",
  //   summary: "A cultural hotel in Lumbini, the birthplace of Buddha.",
  //   perDayPrice: 9000,
  // },
  // {
  //   id: 108,
  //   name: "Baglung Hilltop Retreat",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1719855412960-3c83f413e3b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVscyUyMGluJTIwbmVwYWx8ZW58MHx8MHx8fDA%3D",
  //   summary: "A peaceful retreat with breathtaking hilltop views.",
  //   perDayPrice: 6000,
  // },
  // {
  //   id: 109,
  //   name: "Thamel Grand Hotel",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1669206766475-b60cb9680cf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVscyUyMGluJTIwbmVwYWwlMjB2aWxsYWdlfGVufDB8fDB8fHww",
  //   summary: "A convenient stay in the bustling Thamel area of Kathmandu.",
  //   perDayPrice: 7500,
  // },
  // {
  //   id: 110,
  //   name: "Chitwan Jungle Lodge",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1599495111218-0f679723087b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVscyUyMGluJTIwbmVwYWx8ZW58MHx8MHx8fDA%3D",
  //   summary: "An eco-lodge offering wildlife safaris in Chitwan National Park.",
  //   perDayPrice: 8500,
  // },
  // {
  //   id: 1,
  //   name: "Grand Plaza Hotel",
  //   imageUrl: "https://example.com/grand_plaza.jpg",
  //   summary:
  //     "A luxurious 5-star hotel in the heart of the city, offering world-class amenities and stunning views.",
  //   perDayPrice: 250,
  // },
  // {
  //   id: 2,
  //   name: "Seaside Retreat",
  //   imageUrl: "https://example.com/seaside_retreat.jpg",
  //   summary:
  //     "A peaceful getaway by the ocean, featuring beachfront rooms and top-tier dining.",
  //   perDayPrice: 180,
  // },
  // {
  //   id: 3,
  //   name: "Mountain Bliss Resort",
  //   imageUrl: "https://example.com/mountain_bliss.jpg",
  //   summary:
  //     "A cozy resort nestled in the mountains, perfect for nature lovers and adventure seekers.",
  //   perDayPrice: 200,
  // },
  // {
  //   id: 4,
  //   name: "Urban Comfort Inn",
  //   imageUrl: "https://example.com/urban_comfort.jpg",
  //   summary:
  //     "A modern hotel in the downtown area, ideal for business and leisure travelers.",
  //   perDayPrice: 150,
  // },
  // {
  //   id: 5,
  //   name: "Heritage Palace",
  //   imageUrl: "https://example.com/heritage_palace.jpg",
  //   summary: "A historic hotel with traditional decor and royal hospitality.",
  //   perDayPrice: 220,
  // },
  // {
  //   id: 6,
  //   name: "Sunset Bay Hotel",
  //   imageUrl: "https://example.com/sunset_bay.jpg",
  //   summary:
  //     "Located along the coast, offering spectacular sunset views and water activities.",
  //   perDayPrice: 190,
  // },
  // {
  //   id: 7,
  //   name: "Forest Haven Lodge",
  //   imageUrl: "https://example.com/forest_haven.jpg",
  //   summary:
  //     "An eco-friendly lodge in a dense forest, perfect for an escape into nature.",
  //   perDayPrice: 170,
  // },
  // {
  //   id: 8,
  //   name: "Skyline Suites",
  //   imageUrl: "https://example.com/skyline_suites.jpg",
  //   summary:
  //     "A high-rise hotel with panoramic city views and luxurious suites.",
  //   perDayPrice: 300,
  // },
  // {
  //   id: 9,
  //   name: "Riverside Resort",
  //   imageUrl: "https://example.com/riverside_resort.jpg",
  //   summary:
  //     "A charming resort located along a peaceful river, perfect for relaxation.",
  //   perDayPrice: 210,
  // },
  // {
  //   id: 10,
  //   name: "Snow Peak Lodge",
  //   imageUrl: "https://example.com/snow_peak.jpg",
  //   summary:
  //     "A cozy mountain lodge with ski-in/ski-out access and warm hospitality.",
  //   perDayPrice: 230,
  // },
];

// "https://plus.unsplash.com/premium_photo-1661952578770-79010299a9f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWxzJTIwaW4lMjBuZXBhbCUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D",
// "https://images.unsplash.com/photo-1669206766475-b60cb9680cf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVscyUyMGluJTIwbmVwYWwlMjB2aWxsYWdlfGVufDB8fDB8fHww",

export const locationDetailsData = [
  {
    icon: <SunSnow size={24} />,
    label: "season",
  },
  {
    icon: <Thermometer size={24} />,
    label: "temperature",
  },
  {
    icon: <TrendingUp size={24} />,
    label: "altitude",
  },
  {
    icon: <Bike size={24} />,
    label: "transportation",
    // types: [
    //   {
    //     id: 1,
    //     label: "Bus",
    //   },
    //   {
    //     id: 2,
    //     label: "Taxi",
    //   },
    //   {
    //     id: 3,
    //     label: "Train",
    //   },
    //   {
    //     id: 4,
    //     label: "Airplane",
    //   },
    // ],
  },
  {
    icon: <AudioWaveform size={24} />,
    label: "activities",
    // types: [
    //   {
    //     id: 1,
    //     label: "Boating",
    //   },
    //   {
    //     id: 2,
    //     label: "Sightseeing",
    //   },
    //   {
    //     id: 3,
    //     label: "Night Life",
    //   },
    //   {
    //     id: 4,
    //     label: "Cable car ride to sarankot",
    //   },
    // ],
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
