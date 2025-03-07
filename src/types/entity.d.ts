interface Post {
  id: number;
  userId: number;
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