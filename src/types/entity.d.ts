interface Reel {
  id: number;
  path: string;
  user: string;
  description: string;
  likes: number;
  saves: number;
  comments: {
    [key: string]: unknown;
  }[];
  shares: number;
  isLiked: boolean;
  isSaved: boolean;
  isLoading: boolean;
}

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
