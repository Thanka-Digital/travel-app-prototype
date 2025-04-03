interface Post {
  id: number;
  userId: number;
  locationId: number;
  season: string;
  transportation: string,
  temperature: number,
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

interface PlanPreference extends Omit<Preference, "frequency" | "type"> {
  locationId: number | null;
  name: string;
  date: string | null;
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
  type: string[];
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  profilePic: string;
  city: string;
  country: string;
  savedPosts: number[];
  following: number[];
  followers: number[];
}

interface Plan {
  id: number;
  imageUrl: string;
  tags: string[];
  status: "planning" | "visited" | "cancelled";
  prefData: PlanPreference;
}
