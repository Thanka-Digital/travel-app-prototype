import { type PropsWithChildren, useReducer } from "react";

import {
  AppContext,
  AppStateDispatch,
  PostContext,
  UserPlanPrefContext,
  UserPrefContext,
} from "./context";
import { appReducer, initialAppState } from "../reducers/AppReducer";
import { initialPosts, postReducer } from "../reducers/PostsReducer";
import { initialPrefs, prefReducer } from "../reducers/PrefReducer";

export default function AppProvider({ children }: PropsWithChildren) {
  const [appState, appStateDispatch] = useReducer(appReducer, initialAppState);
  const [postState, postStateDispatch] = useReducer(postReducer, initialPosts);
  const [pref, prefDispatch] = useReducer(prefReducer, initialPrefs);
  const [planPref, planPrefDispatch] = useReducer(prefReducer, initialPrefs);

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
            <UserPlanPrefContext.Provider
              value={{ pref: planPref, prefDispatch: planPrefDispatch }}
            >
              {children}
            </UserPlanPrefContext.Provider>
          </PostContext.Provider>
        </UserPrefContext.Provider>
      </AppStateDispatch.Provider>
    </AppContext.Provider>
  );
}
