import { createContext, Dispatch } from "react";
import { initialAppState } from "../reducers/AppReducer";
import { AppContextAction, AppContextState } from "../reducers/type";
import { initialReels, ReelContextAction } from "../reducers/ReelReducer";

export const AppContext = createContext<AppContextState>(initialAppState);
export const AppStateDispatch = createContext<Dispatch<AppContextAction>>(() => { });

export const ReelContext = createContext(initialReels);
export const ReelStateDispatch = createContext<Dispatch<ReelContextAction>>(() => { });
