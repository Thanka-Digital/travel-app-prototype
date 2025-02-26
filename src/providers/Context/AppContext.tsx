import { type PropsWithChildren, useReducer } from "react";

import { AppContext, AppStateDispatch, PostContext, PostStateDispatch, ReelContext, ReelStateDispatch } from "./context";
import { appReducer, initialAppState } from "../reducers/AppReducer";
import { initialReels, reelReducer } from "../reducers/ReelReducer";
import { initialPosts, postReducer } from "../reducers/PostsReducer";

export default function AppProvider({ children }: PropsWithChildren) {
  const [appState, appStateDispatch] = useReducer(appReducer, initialAppState);
  const [reelState, reelStateDispatch] = useReducer(reelReducer, initialReels);
  const [postState, postStateDispatch] = useReducer(postReducer, initialPosts);

  return (
    <AppContext.Provider value={appState}>
      <AppStateDispatch.Provider value={appStateDispatch}>
        <PostContext.Provider value={postState}>
          <PostStateDispatch.Provider value={postStateDispatch}>
            <ReelContext.Provider value={reelState}>
              <ReelStateDispatch.Provider value={reelStateDispatch}>
                {children}
              </ReelStateDispatch.Provider>
            </ReelContext.Provider>
          </PostStateDispatch.Provider>
        </PostContext.Provider>
      </AppStateDispatch.Provider>
    </AppContext.Provider>
  );
}