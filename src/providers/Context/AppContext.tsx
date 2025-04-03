import { type PropsWithChildren, useReducer } from "react";

import {
  AppContext,
  AppStateDispatch,
  PostContext,
  UserPlanPrefContext,
  UserPlansContext,
  UserPrefContext,
} from "./context";
import { appReducer, initialAppState } from "../reducers/AppReducer";
import { initialPosts, postReducer } from "../reducers/PostsReducer";
import { initialPrefs, prefReducer } from "../reducers/PrefReducer";
import { initialPlanPrefs, prefPlanReducer } from "../reducers/PlanPrefReducer";
import { initialPlans, planReducer } from "../reducers/PlanReducer";

export default function AppProvider({ children }: PropsWithChildren) {
  const [appState, appStateDispatch] = useReducer(appReducer, initialAppState);
  const [postState, postStateDispatch] = useReducer(postReducer, initialPosts);
  const [pref, prefDispatch] = useReducer(prefReducer, initialPrefs);
  const [planPref, planPrefDispatch] = useReducer(
    prefPlanReducer,
    initialPlanPrefs
  );
  const [plans, setPlans] = useReducer(planReducer, initialPlans);

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
              <UserPlansContext.Provider
                value={{
                  plans,
                  planDispatch: setPlans,
                }}
              >
                {children}
              </UserPlansContext.Provider>
            </UserPlanPrefContext.Provider>
          </PostContext.Provider>
        </UserPrefContext.Provider>
      </AppStateDispatch.Provider>
    </AppContext.Provider>
  );
}
