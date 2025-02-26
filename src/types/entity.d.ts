interface Post {
  id: number;
  userId: number;
  caption: string;
  isLiked: boolean;
  likeCount: number;
  images: string[];
  profile?: boolean;
}