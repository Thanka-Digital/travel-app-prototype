import { createContext, useReducer } from "react";
import { initialAppPostsState, initialAppReelsState, postReducer, reelsReducer } from "../reducers/AppReducer";

export const PostContext = createContext(null);
export const ReelsContext = createContext(null);

export const PostDispatchContext = createContext(null);
export const ReelsDispatchContext = createContext(null);

export default function AppProvider({ children }) {
  const [posts, postDispatch] = useReducer(postReducer, initialAppPostsState);
  const [reels, reelDispatch] = useReducer(reelsReducer, initialAppReelsState);

  return <PostContext.Provider value={posts}>
    <PostDispatchContext.Provider value={postDispatch}>
      <ReelsContext.Provider value={reels}>
        <ReelsDispatchContext.Provider value={reelDispatch}>
          {children}
        </ReelsDispatchContext.Provider>
      </ReelsContext.Provider>
    </PostDispatchContext.Provider>
  </PostContext.Provider>;
}
