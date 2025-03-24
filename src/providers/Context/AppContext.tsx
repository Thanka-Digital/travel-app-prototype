import { type PropsWithChildren, useReducer } from "react";

import {
  AppContext,
  AppStateDispatch,
  PostContext,
  ReelContext,
  UserPrefContext,
} from "./context";
import { appReducer, initialAppState } from "../reducers/AppReducer";
import { initialReels, reelReducer } from "../reducers/ReelReducer";
import { initialPosts, postReducer } from "../reducers/PostsReducer";
import { initialPrefs, prefReducer } from "../reducers/PrefReducer";

export default function AppProvider({ children }: PropsWithChildren) {
  const [appState, appStateDispatch] = useReducer(appReducer, initialAppState);
  const [reelState, reelStateDispatch] = useReducer(reelReducer, initialReels);
  const [postState, postStateDispatch] = useReducer(postReducer, initialPosts);
  const [pref, prefDispatch] = useReducer(prefReducer, initialPrefs);

  return (
    <AppContext.Provider value={appState}>
      <AppStateDispatch.Provider value={appStateDispatch}>
        <UserPrefContext.Provider
          value={{
            pref,
            prefDispatch,
          }}
        >
          <PostContext.Provider
            value={{
              posts: postState,
              postDispatch: postStateDispatch,
            }}
          >
            <ReelContext.Provider
              value={{
                reels: reelState,
                reelDispatch: reelStateDispatch,
              }}
            >
              {children}
            </ReelContext.Provider>
          </PostContext.Provider>
        </UserPrefContext.Provider>
      </AppStateDispatch.Provider>
    </AppContext.Provider>
  );
}
