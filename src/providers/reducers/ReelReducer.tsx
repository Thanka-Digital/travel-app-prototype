import { reelsVidinfo } from "@/utils/reelsVidinfo";
export type ReelContextAction = {
  type: "LIKE" | "UNLIKE" | "SAVE" | "UNSAVE";
  payload: number;
}

export const initialReels = reelsVidinfo

export function reelReducer(
  state: typeof initialReels,
  action: ReelContextAction
): typeof initialReels {
  switch (action.type) {
    case "LIKE":
      return state.map((reel, index) => {
        if (index === action.payload) {
          return {
            ...reel,
            isLiked: true,
            likes: reel.likes + 1,
          }
        }
        return reel;
      });
    case "UNLIKE":
      return state.map((reel, index) => {
        if (index === action.payload) {
          return {
            ...reel,
            isLiked: false,
            likes: reel.likes - 1,
          }
        }
        return reel;
      });
    case "SAVE":
      return state.map((reel, index) => {
        if (index === action.payload) {
          return {
            ...reel,
            isSaved: true,
            saves: reel.saves + 1,
          }
        }
        return reel;
      });
    case "UNSAVE":
      return state.map((reel, index) => {
        if (index === action.payload) {
          return {
            ...reel,
            isSaved: false,
            saves: reel.saves - 1,
          }
        }
        return reel;
      });
    default:
      return state;
  }
}
