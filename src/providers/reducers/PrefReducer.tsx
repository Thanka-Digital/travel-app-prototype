export type PrefContextAction = {
  type: "ADD" | "REMOVE";
  payload: {
    key: keyof Preference;
    value: string;
  };
};

export const initialPrefs: Preference = {
  place: [],
  weather: [],
  type: [],
  frequency: "",
};

export function prefReducer(
  state: Preference,
  action: PrefContextAction
): Preference {
  switch (action.type) {
    case "ADD":
      if (action.payload.key !== "frequency") {
        return {
          ...state,
          [action.payload.key]: [
            ...state[action.payload.key],
            action.payload.value,
          ],
        };
      }
      return {
        ...state,
        frequency: action.payload.value,
      };
    case "REMOVE":
      if (action.payload.key !== "frequency") {
        return {
          ...state,
          [action.payload.key]: state[action.payload.key].filter(
            (v) => v !== action.payload.value
          ),
        };
      }
      return {
        ...state,
        frequency: "",
      };
    default:
      return state;
  }
}
