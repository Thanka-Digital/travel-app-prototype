import { tripPlanData } from "@/utils/tripPlanData";

export type PlanContextAction = {
  type: "ADD" | "UPDATE";
  payload: number | Plan;
};

export const initialPlans: Plan[] = tripPlanData;

export function planReducer(
  state: typeof initialPlans,
  action: PlanContextAction
): Plan[] {
  switch (action.type) {
    case "ADD": {
      const newPlans = [...state];
      newPlans.push(action.payload as Plan);
      return newPlans;
    }
    case "UPDATE": {
      const plans = state.map((p) => {
        if (p.id === (action.payload as Plan).id) {
          return action.payload as Plan;
        }
        return p;
      });
      return plans;
    }
    default:
      return state;
  }
}
