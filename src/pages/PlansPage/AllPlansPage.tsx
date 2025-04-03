import BackButton from "@/components/global/BackButton";
import PlanCard from "./components/PlanCard";
import { useContext } from "react";
import { UserPlansContext } from "@/providers/Context/context";

export default function AllPlansPage() {
  const { plans } = useContext(UserPlansContext);

  return (
    <div className="px-4 text-black bg-white py-14">
      <BackButton />
      <div>
        <p className="text-2xl font-medium">All your trip plans</p>
        <p className="text-sm font-medium text-gray-400">
          Enjoy your life to fullest
        </p>
      </div>

      <div className="my-5">
        {plans.reverse().map((tripPlanData) => (
          <PlanCard key={tripPlanData.id} plan={tripPlanData} />
        ))}
      </div>
    </div>
  );
}
