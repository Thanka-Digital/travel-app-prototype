import { createContext, Dispatch } from "react";
import { initialAppState } from "../reducers/AppReducer";
import { AppContextAction, AppContextState } from "../reducers/type";
import { initialReels, ReelContextAction } from "../reducers/ReelReducer";
import { initialPosts, PostContextAction } from "../reducers/PostsReducer";

export const AppContext = createContext<AppContextState>(initialAppState);
export const AppStateDispatch = createContext<Dispatch<AppContextAction>>(() => { });

export const ReelContext = createContext<{
  reels: Reel[],
  reelDispatch: Dispatch<ReelContextAction>
}>({
  reels: initialReels,
  reelDispatch: () => { }
});

export const PostContext = createContext<{
  posts: Post[],
  postDispatch: Dispatch<PostContextAction>
}>({
  posts: initialPosts,
  postDispatch: () => { }
});