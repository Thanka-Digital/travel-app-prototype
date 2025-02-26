import { postList } from "@/utils/postList";
export type PostContextAction = {
  type: "LIKE" | "UNLIKE"
  payload: number;
}

export const initialPosts = postList

export function postReducer(
  state: typeof postList,
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
          }
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
          }
        }
        return post;
      });
    default:
      return state;
  }
}