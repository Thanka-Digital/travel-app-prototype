import { type PropsWithChildren, useReducer } from "react";

import { AppContext, AppStateDispatch, ReelContext, ReelStateDispatch } from "./context";
import { appReducer, initialAppState } from "../reducers/AppReducer";
import { initialReels, reelReducer } from "../reducers/ReelReducer";

export default function AppProvider({ children }: PropsWithChildren) {
  const [appState, appStateDispatch] = useReducer(appReducer, initialAppState);
  const [reelState, reelStateDispatch] = useReducer(reelReducer, initialReels);

  return (
    <AppContext.Provider value={appState}>
      <AppStateDispatch.Provider value={appStateDispatch}>
        <ReelContext.Provider value={reelState}>
          <ReelStateDispatch.Provider value={reelStateDispatch}>
            {children}
          </ReelStateDispatch.Provider>
        </ReelContext.Provider>
      </AppStateDispatch.Provider>
    </AppContext.Provider>
  );
}
