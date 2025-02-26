import { createContext, Dispatch } from "react";
import { initialAppState } from "../reducers/AppReducer";
import { AppContextAction, AppContextState } from "../reducers/type";
import { initialReels, ReelContextAction } from "../reducers/ReelReducer";
import { initialPosts, PostContextAction } from "../reducers/PostsReducer";

export const AppContext = createContext<AppContextState>(initialAppState);
export const AppStateDispatch = createContext<Dispatch<AppContextAction>>(() => { });

export const ReelContext = createContext(initialReels);
export const ReelStateDispatch = createContext<Dispatch<ReelContextAction>>(() => { });

export const PostContext = createContext(initialPosts);
export const PostStateDispatch = createContext<Dispatch<PostContextAction>>(() => { });