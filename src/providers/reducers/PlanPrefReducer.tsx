export type PlanPrefContextAction = {
  type: "ADD" | "REMOVE";
  payload: {
    key: keyof PlanPreference;
    value: string | number | null;
  };
};

export const initialPlanPrefs: PlanPreference = {
  place: [],
  weather: [],
  date: null,
  locationId: null,
  name: "",
};

export function prefPlanReducer(
  state: PlanPreference,
  action: PlanPrefContextAction
): PlanPreference {
  switch (action.type) {
    case "ADD":
      if (["place", "weather"].includes(action.payload.key)) {
        return {
          ...state,
          [action.payload.key]: [
            ...(state[action.payload.key] as string[]),
            action.payload.value,
          ],
        };
      }
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case "REMOVE":
      if (["place", "weather"].includes(action.payload.key)) {
        return {
          ...state,
          [action.payload.key]: (state[action.payload.key] as string[]).filter(
            (v) => v !== action.payload.value
          ),
        };
      }
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    default:
      return state;
  }
}
