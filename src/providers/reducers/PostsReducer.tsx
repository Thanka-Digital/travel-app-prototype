import { postList } from "@/utils/postList";
export type PostContextAction = {
  type: "LIKE" | "UNLIKE" | "ADD";
  payload: number | Post;
};

export const initialPosts: Post[] = postList;

export function postReducer(
  state: typeof initialPosts,
  action: PostContextAction
): typeof initialPosts {
  switch (action.type) {
    case "LIKE":
      return state.map((post) => {
        if (post.id === action.payload) {
          return {
            ...post,
            isLiked: true,
            likeCount: post.likeCount + 1,
          };
        }
        return post;
      });
    case "UNLIKE":
      return state.map((post) => {
        if (post.id === action.payload) {
          return {
            ...post,
            isLiked: false,
            likeCount: post.likeCount - 1,
          };
        }
        return post;
      });
    case "ADD": {
      const newPosts = [...state];
      newPosts.push(action.payload as Post);
      return newPosts;
    }
    default:
      return state;
  }
}
