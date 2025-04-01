import BackButton from "@/components/global/BackButton";
import { tripPlanData } from "@/utils/tripPlanData";
import PlanCard from "./components/PlanCard";

export default function AllPlansPage() {
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
        {tripPlanData?.map((tripPlanData) => (
          <PlanCard key={tripPlanData.id} plan={tripPlanData} />
        ))}
      </div>
    </div>
  );
}
