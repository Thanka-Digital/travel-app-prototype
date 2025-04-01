interface Post {
  id: number;
  userId: number;
  locationId: number;
  season: string;
  transportation: string,
  temperature: string,
  activities: string,
  location: string,
  caption: string;
  isLiked: boolean;
  likeCount: number;
  images: string[];
  comments?: { comment: string, user: string }[];
  profile?: boolean;
}

interface PostImage {
  id: number;
  base64: string;
}

interface Preference {
  type: string[];
  weather: string[];
  place: string[];
  frequency: string;
}

interface HotelInfo {
  id: number;
  name: string;
  imageUrl: string;
  summary: string;
  perDayPrice: number;
}

interface LocationInfo {
  id: number;
  name: string;
  city: string;
  visitorsCount: number;
  imageUrl: string;
  summary: string;
  tags: string[];
  averageCost: number;
  hotels: number[];
  extraInfo: {
    averageTemperature: string;
    altitude: number;
    transportationModes: string[];
    activities: string[];
  };
  type: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  city: string;
  country: string;
  pref: Preference;
  posts: number[];
}

interface Plan {
  id: number;
  name: string;
  imageUrl: string;
  tags: string[];
  date: Date;
  locationId: number;
  status: "planning" | "visited" | "cancelled";
}
