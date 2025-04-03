import { createContext, Dispatch } from "react";
import { initialAppState } from "../reducers/AppReducer";
import { AppContextAction, AppContextState } from "../reducers/type";
import { initialPosts, PostContextAction } from "../reducers/PostsReducer";
import { initialPrefs, PrefContextAction } from "../reducers/PrefReducer";
import { initialPlanPrefs, PlanPrefContextAction } from "../reducers/PlanPrefReducer";
import { initialPlans, PlanContextAction } from "../reducers/PlanReducer";

export const AppContext = createContext<AppContextState>(initialAppState);
export const AppStateDispatch = createContext<Dispatch<AppContextAction>>(() => { });
export const UserPrefContext = createContext<{
  pref: Preference,
  prefDispatch: Dispatch<PrefContextAction>
}>({
  pref: initialPrefs,
  prefDispatch: () => { }
});

export const PostContext = createContext<{
  posts: Post[],
  postDispatch: Dispatch<PostContextAction>
}>({
  posts: initialPosts,
  postDispatch: () => { }
});

export const UserPlanPrefContext = createContext<{
  pref: PlanPreference,
  prefDispatch: Dispatch<PlanPrefContextAction>
}>({
  pref: initialPlanPrefs,
  prefDispatch: () => { }
})

export const UserPlansContext = createContext<{
  plans: Plan[];
  planDispatch: Dispatch<PlanContextAction>
}>({
  plans: initialPlans,
  planDispatch: () => { },
});
